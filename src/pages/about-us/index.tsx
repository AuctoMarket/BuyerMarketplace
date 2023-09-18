import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ButtonLink from '../../components/Button/Link';
import Image from '../../components/Image';

function isMobile() {
  return window.innerWidth <= 820;
}

const AboutUsPage = () => {
  return (
    <Layout className={styles['about-us-container']}>
      <div className={styles['about-us-page']}>
        <div className={`${styles.top} ${isMobile() ? styles.gradient : ''}`}>
          <div className={styles['left']}>
            About Us
            <div className={styles['content-1']}>
              <span>Making collecting accessible</span>, lorem ipsum dolor sit
              ametous, consectetur adipiscing elit.
            </div>
            <div className={styles['conntent-2']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, suradora
              do eiusmod tempor incididunt ut labore et dolore. Elsem etudar
              elit marcenas et leon non massue triteck attis ametous beotes.
            </div>
            <ButtonLink to={`/`} className={styles['button']}>
              Marketplace
            </ButtonLink>
          </div>

          {isMobile() ? (
            <>
              <div className={styles['right-mobile']}>
                <Image src="images/category/pokemon-cards-1-mobile.png" />
              </div>
            </>
          ) : (
            <div className={styles['right']}>
              <Image src="images/category/pokemon-cards-1.png" />
            </div>
          )}
        </div>

        <div className={styles['bottom']}>
          {isMobile() ? (
            <div className={styles['left-mobile']}>
              <Image src="images/category/pokemon-cards-2-mobile.png" />
            </div>
          ) : (
            <div className={styles['left']}>
              <Image src="images/category/pokemon-cards-2.png" />
            </div>
          )}

          <div className={styles['right']}>
            <div className={styles['content-1']}>
              <span>Making collecting safe</span>, lorem ipsum dolor sit
              ametous, consectetur adipiscing elit. Maecenas et leo non massa.
            </div>

            <div className={styles['content-2']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              suradorased do eiusmod tempor incididunt ut labore et dolore.
              Elsem etudar elit marcenas et leon non massue triteck attis
              ametous beotes. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, suradorased do eiusmod tempor incididunt ut labore et
              dolore. Elsem etudar elit marcenas et leon non massue triteck
              attis ametous beotes.
            </div>

            <ButtonLink to={`/`} className={styles['button']}>
              Our Policies
            </ButtonLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
