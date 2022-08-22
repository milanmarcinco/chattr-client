import styles from "./LogoWithName.module.scss";

const LogoWithName = () => (
  <div className={styles.logoWithName}>
    <img className={styles.logo} src="/logo.svg" />
    <h1 className={styles.name}>chattr</h1>
  </div>
);

export default LogoWithName;
