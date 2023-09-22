import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ButtonLink from '../../components/Button/Link';
import Image from '../../components/Image';

const AboutUsPage = () => {
  return (
    <Layout>
      <div className={styles['about-us-page']}>
        <div className={styles.top}>
          <div className={styles.left}>
            About Us
            <div className={styles['content-1']}>
              <span>Collecting made easy</span>. At Aucto, we want collectors to
              enjoy their passions without worrying about trust
            </div>
            <div className={styles['content-2']}>
              At Aucto, we understand that collecting is more than just a
              hobby—it's a passion. It's the thrill of the hunt, the joy of the
              find, and the satisfaction of owning a piece of art. As collectors
              ourselves, we know collecting can be hard, and we have created a
              specialized marketplace exclusively for our fellow collectors to
              find all types of collectibles. Aucto is your go-to destination
              for collectibles that you can trust.
            </div>
            <ButtonLink to={`/`} className={styles['button']} theme="color">
              Marketplace
            </ButtonLink>
          </div>

          <div className={styles['right']}>
            <Image src="images/about-us/pokemon-cards.png" />
          </div>

          <div className={styles['gradient']} />
        </div>

        <div className={styles['bottom']}>
          <div className={styles['left']}>
            <Image src="images/about-us/pokemon-1.png" />
          </div>

          <div className={styles['right']}>
            <div className={styles['content-1']}>
              <span>Making collecting safe</span>. Aucto verifies all its
              sellers and insures deliveries to ensure that collectors get
              exactly what they order.
            </div>

            <div className={styles['content-2']}>
              We partner only with established sellers who have a comprehensive
              history of sales and proven credibility. We also understand the
              importance of handling your prized collectibles with care. That's
              why our delivery process is designed to be as secure as possible.
              From the moment a transaction is completed, we ensure that your
              item reaches you in the same condition it left the seller—pristine
              and intact. If not, we will refund you!
            </div>

            <ButtonLink
              to="https://aucto-s3-prod.s3.ap-southeast-1.amazonaws.com/refund/Refund+Policy_20230913.pdf"
              className={styles['button']}
              theme="color"
              target="_blank"
            >
              Refund Policy
            </ButtonLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
