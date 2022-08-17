import LogoWithName from "@/components/LogoWithName";
import Controls from "./Controls";
import SearchBar from "@/components/SearchBar";
import ContactsList from "@/components/ContactsList";

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
