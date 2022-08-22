import useStore from "@/store";
import anonymizeString from "@/lib/anonymizeString";
import cx from "classnames";
import styles from "./Room.module.scss";

interface IProps {
  room: IRoom;

  selected?: boolean;
  unread?: boolean;
  highlightTerm?: string;

  handleClick: (roomId: string) => void;

  idx: number;
}

const Room = ({ room, selected, unread, highlightTerm, handleClick, idx }: IProps) => {
  const privacyModeEnabled = useStore((state) => state.privacyModeEnabled);

  const { firstName, lastName, avatarUrl } = room.participants[0].user;
  const name = (firstName + " " + lastName).toLowerCase();

  return (
    <button
      onClick={handleClick.bind(null, room.id)}
      className={cx(styles.room, {
        [styles["room--selected"]]: selected,
        [styles["room--unread"]]: unread,
      })}
      style={{
        animationDelay: idx * 100 + "ms",
      }}
    >
      <img className={styles.avatar} src={avatarUrl || "/avatars/avatar-1.png"} />

      {highlightTerm ? (
        <p
          className={styles.name}
          dangerouslySetInnerHTML={{ __html: name.replaceAll(highlightTerm, `<b>${highlightTerm}</b>`) }}
        ></p>
      ) : (
        <p className={styles.name}>{privacyModeEnabled ? anonymizeString(name) : name}</p>
      )}
    </button>
  );
};

export default Room;
