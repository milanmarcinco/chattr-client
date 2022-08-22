import useStore from "@/store";
import anonymizeString from "@/lib/anonymizeString";
import styles from "./Header.module.scss";

interface IProps {
  room: IRoom;
}

const Header = ({ room }: IProps) => {
  const privacyModeEnabled = useStore((state) => state.privacyModeEnabled);

  const { firstName, lastName, avatarUrl } = room.participants[0].user;

  return (
    <div className={styles.header} key={room.id}>
      <div className={styles.avatar}>
        <img className={styles.image} src={avatarUrl || "/avatars/avatar-1.png"} />
      </div>
      <div className={styles.name}>
        <p className={styles.firstName}>{privacyModeEnabled ? anonymizeString(firstName) : firstName}</p>
        <p className={styles.lastName}>{privacyModeEnabled ? anonymizeString(lastName) : lastName}</p>
      </div>
    </div>
  );
};

export default Header;
