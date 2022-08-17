import styles from "./MainLayout.module.scss";

interface IProps {
  children: [JSX.Element, JSX.Element];
}

const MainLayout = ({ children }: IProps) => (
  <div className={styles.layout}>
    {children[0]}
    <div className={styles.divider}></div>
    {children[1]}
  </div>
);

export default MainLayout;
