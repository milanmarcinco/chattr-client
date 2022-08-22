import IconButton from "@/components/IconButton";

import useStore from "@/store";

import VisibilityOffIcon from "@/assets/visibility-off.svg";
import HomeIcon from "@/assets/home.svg";

import styles from "./Controls.module.scss";

interface IProps {
  selectedRoom: IRoom | null;
}

const Controls = ({ selectedRoom }: IProps) => {
  const setSelectedRoomId = useStore((state) => state.setSelectedRoomId);

  const privacyModeEnabled = useStore((state) => state.privacyModeEnabled);
  const togglePrivacyMode = useStore((state) => state.togglePrivacyMode);

  const handleUnselectRoom = () => setSelectedRoomId(null);

  return (
    <div className={styles.controls}>
      <IconButton icon={<VisibilityOffIcon />} onClick={togglePrivacyMode} enabled={privacyModeEnabled} />
      <IconButton icon={<HomeIcon />} onClick={handleUnselectRoom} enabled={!selectedRoom} />
      <img className={styles.avatar} src="/avatars/avatar-3.png" alt="Your profile picture" />
    </div>
  );
};

export default Controls;
