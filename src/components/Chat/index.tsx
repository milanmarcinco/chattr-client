import useStore from "../../store";
import styles from "./Chat.module.scss";

const Chat = () => {
  const selectedContactId = useStore((state) => state.selectedContactId);

  return (
    <div className={styles.chat}>
      {!selectedContactId && (
        <img src="/graphics/empty-chat-illustration.svg" className={styles.noOpenChatIllustration} />
      )}
    </div>
  );
};

export default Chat;
