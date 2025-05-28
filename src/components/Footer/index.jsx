import React from "react";
import styles from "./Footer.module.css";
import FooterSocialLogo from "./FooterSocialLogo"

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <FooterSocialLogo />
        <div className={styles.footerInformation}>
          <p>© 2025 Australia Zoo – All rights reserved.</p>
          <p>
            Designed by Kavi | Kavi's Zoo project
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;