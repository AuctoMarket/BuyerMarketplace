import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ButtonLink from '../../components/Button/Link';
import Image from '../../components/Image';
import responsive from '../../utils/responsive';

const AboutUsPage = () => {
  return (
    <Layout>
      <div className={styles['about-us-page']}>
        <div className={styles.top}>
          <div className={styles.left}>
            About Us
            <div className={styles['content-1']}>
              <span>Making collecting accessible</span>, lorem ipsum dolor sit
              ametous, consectetur adipiscing elit. Maecenas et leo non massa
              egestas tristique, congue tellus mattis ultrices.
            </div>
            <div className={styles['content-2']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, suradora
              do eiusmod tempor incididunt ut labore et dolore. Elsem etudar
              elit marcenas et leon non massue triteck attis ametous beotes.
            </div>
            <ButtonLink to={`/`} className={styles['button']} theme="color">
              Marketplace
            </ButtonLink>
          </div>

          <div className={styles['right']}>
            <Image src="images/about-us/pokemon-cards.png" />
          </div>

          {responsive.isMd() && <div className={styles['gradient']} />}
        </div>

        <div className={styles['bottom']}>
          <div className={styles['left']}>
            <Image src="images/about-us/pokemon-1.png" />
          </div>

          <div className={styles['right']}>
            <div className={styles['content-1']}>
              <span>Making collecting safe</span>, lorem ipsum dolor sit
              ametous, consectetur adipiscing elit. Maecenas et leo non massa
              egestas tristique, congue tellus mattis ultrices.
            </div>

            <div className={styles['content-2']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              suradorased do eiusmod tempor incididunt ut labore et dolore.
              Elsem etudar elit marcenas et leon non massue triteck attis
              ametous beotes.
            </div>

            <ButtonLink to={`/`} className={styles['button']} theme="color">
              Our Policies
            </ButtonLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
