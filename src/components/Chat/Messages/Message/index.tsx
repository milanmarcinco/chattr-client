import cx from "classnames";
import styles from "./Message.module.scss";

interface IProps {
  firstName: string;
  content: string;
  showName: boolean;
  isMine: boolean;
  idx: number;
}

const Message = ({ firstName, content, showName, isMine, idx }: IProps) => (
  <div className={styles.message} style={{ animationDelay: idx * 50 + "ms" }}>
    <p
      className={cx(styles.name, {
        [styles["name--isMine"]]: isMine,
        [styles["name--hideName"]]: !showName,
      })}
    >
      {firstName}
    </p>
    <p className={styles.content}>{content}</p>
  </div>
);

export default Message;
