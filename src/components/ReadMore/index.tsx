import React, { ComponentProps, useEffect, useState } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'p'> {
  maxChars?: number;
  children: string;
}

function ReadMore({ className, maxChars = 150, children, ...rest }: Props) {
  const [isReadMore, setIsReadMore] = useState(children.length > maxChars);

  useEffect(() => {
    setIsReadMore(children.length > maxChars);
  }, [children, maxChars]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className={className} {...rest}>
      {isReadMore ? (
        <>
          {children.slice(0, maxChars)}...
          <span onClick={toggleReadMore} className={styles['button']}>
            Read more
          </span>
        </>
      ) : (
        children
      )}
    </p>
  );
}

export default ReadMore;
