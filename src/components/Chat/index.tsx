import Header from "./Header";
import Messages from "./Messages";
import NewMessageControls from "./NewMessageControls";

import useStore from "@/store";

import styles from "./Chat.module.scss";

interface IProps {
  selectedRoom: IRoom | null;
}

const Chat = ({ selectedRoom }: IProps) => (
  <div className={styles.chat}>
    {selectedRoom && (
      <>
        <Header room={selectedRoom} />
        <Messages messages={selectedRoom.messages} />
        <NewMessageControls />
      </>
    )}

    {!selectedRoom && <img src="/graphics/empty-chat-illustration.svg" className={styles.noOpenChatIllustration} />}
  </div>
);

export default Chat;
