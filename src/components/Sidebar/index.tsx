import LogoWithName from "@/components/Sidebar/LogoWithName";
import Controls from "./Controls";
import SearchBar from "@/components/Sidebar/SearchBar";
import RoomsList from "@/components/Sidebar/RoomsList";

import styles from "./Sidebar.module.scss";

interface IProps {
  selectedRoom: IRoom | null;
}

const Sidebar = ({ selectedRoom }: IProps) => (
  <div className={styles.sidebar}>
    <div className={styles.helperContainer}>
      <LogoWithName />
      <Controls selectedRoom={selectedRoom} />
    </div>
    <SearchBar />
    <RoomsList selectedRoom={selectedRoom} />
  </div>
);

export default Sidebar;
