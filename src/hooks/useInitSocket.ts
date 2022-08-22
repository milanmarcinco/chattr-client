import { useEffect } from "react";
import { Socket } from "socket.io-client";
import useStore from "@/store";

const useInitSocket = (socket: Socket) => {
  const setSocket = useStore((state) => state.setSocket);
  const setRooms = useStore((state) => state.setRooms);
  const receiveMessage = useStore((state) => state.receiveMessage);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED");
      setSocket(socket);

      socket.on("disconnect", () => {
        console.log("SOCKET DISCONNECTED");
        setSocket(null);
      });

      socket.on("message:receive", (message: IMessage) => {
        receiveMessage(message);
      });

      socket.emit("init", (response: IInitResponse) => {
        setRooms(response.rooms);
      });
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
};

export default useInitSocket;
