import React, { ComponentProps, useState, useEffect } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'p'> {
  maxChars?: number;
  children: string;
}

// regex to strip out html tags
const regex = /(<([^>]+)>)/gi;

function ReadMore({ className, maxChars = 150, children, ...rest }: Props) {
  const strippedChildren = children.replace(regex, '');
  const [isReadMore, setIsReadMore] = useState(
    strippedChildren.length > maxChars,
  );

  useEffect(() => {
    setIsReadMore(strippedChildren.length > maxChars);
  }, [strippedChildren.length, maxChars]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={className} {...rest}>
      {isReadMore ? (
        <>
          <span
            dangerouslySetInnerHTML={{
              __html: `${strippedChildren.slice(0, maxChars)}...`,
            }}
          />
          <span onClick={toggleReadMore} className={styles['button']}>
            Read more
          </span>
        </>
      ) : (
        <span dangerouslySetInnerHTML={{ __html: children }} />
      )}
    </div>
  );
}

export default ReadMore;
