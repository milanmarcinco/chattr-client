import IconButton from "@/components/IconButton";

import useStore from "@/store";

import VisibilityOffIcon from "@/assets/visibility-off.svg";
import HomeIcon from "@/assets/home.svg";

import styles from "./Controls.module.scss";

const Controls = () => {
  const selectedContactId = useStore((state) => state.selectedContactId);
  const unselectContact = useStore((state) => state.unselectContact);

  const privacyModeEnabled = useStore((state) => state.privacyModeEnabled);
  const togglePrivacyMode = useStore((state) => state.togglePrivacyMode);

  return (
    <div className={styles.controls}>
      <IconButton icon={<VisibilityOffIcon />} onClick={togglePrivacyMode} enabled={privacyModeEnabled} />
      <IconButton icon={<HomeIcon />} onClick={unselectContact} enabled={!selectedContactId} />
      <img className={styles.avatar} src="/avatars/avatar-3.png" alt="Your profile picture" />
    </div>
  );
};

export default Controls;
