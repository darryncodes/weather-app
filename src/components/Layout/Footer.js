import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Designed & coded by{' '}
        <a
          href="https://www.darryncodes.co.uk/"
          target="_blank"
          rel="noreferrer"
          className={styles.footer__link}
        >
          @darryncodes
        </a>
      </p>
    </footer>
  );
};
export default Footer;
