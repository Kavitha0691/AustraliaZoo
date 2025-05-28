import { useState } from 'react';
import { SocialLogo } from 'social-logos';
import styles from '../footer.module.css';

const FooterSocialLogo = () => {
    const [socialLinks, setSocialLinks] = useState([
        { name: 'facebook', url: 'https://www.facebook.com/' },
        { name: 'instagram', url: 'https://www.instagram.com/' },
        { name: 'twitter', url: 'https://x.com/account/access' }
    ]);

    return (
        <div className={styles.SocialIcon}>
            {socialLinks.map((link, index) => (
                <a key={index} href={link.url}>
                    <SocialLogo icon={link.name} size={48} className={styles[link.name]} />
                </a>
            ))}
        </div>
    );
};

export default FooterSocialLogo;