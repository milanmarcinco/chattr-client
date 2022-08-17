import useStore from "../../../store";
import anonymizeString from "../../../lib/anonymizeString";
import cx from "classnames";
import styles from "./Contact.module.scss";

interface IProps {
  contact: IContact;

  highlightTerm?: string;
  selected?: boolean;
  unread?: boolean;

  handleClick: (contactId: string) => void;
}

const Contact = ({ contact, selected, unread, highlightTerm, handleClick }: IProps) => {
  const privacyModeEnabled = useStore((state) => state.privacyModeEnabled);

  const { firstName, lastName, avatarUrl, id } = contact;
  const name = firstName + " " + lastName;

  return (
    <button
      onClick={handleClick.bind(null, id)}
      className={cx(styles.contact, {
        [styles["contact--selected"]]: selected,
        [styles["contact--unread"]]: unread,
      })}
    >
      <img className={styles.avatar} src={avatarUrl} />

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

export default Contact;
