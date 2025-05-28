import logoImage from '../../assets/logo.svg'
import styles from '../Header/header.module.css';

const Logo = () => {
  return (
    <div className={styles.logoMasked}>
      <img
        className={styles.logoImg}
        src={logoImage}
        alt="Zoo logo"
        height={100}
      />

    </div>
  )
}

export default Logo