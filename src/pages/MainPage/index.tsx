import { useMemo } from "react";

import MainLayout from "@/layouts/MainLayout";
import Sidebar from "@/components/Sidebar";
import Chat from "@/components/Chat";

import useStore from "@/store";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const rooms = useStore((state) => state.rooms);
  const selectedRoomId = useStore((state) => state.selectedRoomId);

  const selectedRoom = useMemo(
    () => (selectedRoomId ? rooms.find((room) => room.id === selectedRoomId) || null : null),
    [rooms, selectedRoomId]
  );

  return (
    <MainLayout>
      <Sidebar selectedRoom={selectedRoom} />
      <Chat selectedRoom={selectedRoom} />
    </MainLayout>
  );
};

export default MainPage;
