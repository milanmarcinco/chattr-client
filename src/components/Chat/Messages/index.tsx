import { useEffect, useRef } from "react";
import Message from "./Message";
import styles from "./Messages.module.scss";

interface IProps {
  messages: IMessage[];
}

const Messages = ({ messages }: IProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({ top: scrollContainerRef.current.scrollHeight });
  }, [messages.length]);

  let lastMessageAuthorId: string;

  return (
    <div ref={scrollContainerRef} className={styles.wrapper}>
      <div className={styles.messages}>
        {messages
          .slice()
          .reverse()
          .map(({ id, user: { id: userId, firstName }, content }, idx, arr) => {
            const messageElement = (
              <Message
                firstName={firstName}
                content={content}
                showName={userId !== lastMessageAuthorId}
                isMine={userId === "milan"}
                key={id}
                idx={arr.length - idx - 1}
              />
            );

            lastMessageAuthorId = userId;

            return messageElement;
          })}
      </div>
    </div>
  );
};

export default Messages;
