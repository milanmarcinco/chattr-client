import LogoWithName from "../LogoWithName";
import Controls from "./Controls";
import SearchBar from "../SearchBar";
import ContactsList from "../ContactsList";

import styles from "./Sidebar.module.scss";

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.helperContainer}>
      <LogoWithName />
      <Controls />
    </div>
    <SearchBar />
    <ContactsList />
  </div>
);

export default Sidebar;
