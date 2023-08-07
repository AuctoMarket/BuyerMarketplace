import React, { ComponentProps, useState } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'p'> {
  showAll?: boolean;
  maxChars?: number;
  children: string;
}

function ReadMore({
  className,
  showAll,
  maxChars = 150,
  children,
  ...rest
}: Props) {
  const [isReadMore, setIsReadMore] = useState(
    !showAll ?? children.length > maxChars,
  );
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className={className} {...rest}>
      {isReadMore ? (
        <>
          <span
            dangerouslySetInnerHTML={{ __html: children.slice(0, maxChars) }}
          />
          ...
          <span onClick={toggleReadMore} className={styles['button']}>
            Read more
          </span>
        </>
      ) : (
        <span dangerouslySetInnerHTML={{ __html: children }} />
      )}
    </p>
  );
}

export default ReadMore;
