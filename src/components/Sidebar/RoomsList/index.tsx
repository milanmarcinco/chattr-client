import { useMemo } from "react";
import Room from "./Room";
import useStore from "@/store";
import styles from "./RoomsList.module.scss";

interface IProps {
  selectedRoom: IRoom | null;
}

const RoomsList = ({ selectedRoom }: IProps) => {
  const rooms = useStore((state) => state.rooms);
  const setSelectedRoomId = useStore((state) => state.setSelectedRoomId);
  const searchTerm = useStore((state) => state.searchTerm);

  const roomsToShow = useMemo(
    () =>
      searchTerm
        ? rooms.filter(
            (room) =>
              room.participants[0].user.firstName.toLocaleLowerCase().includes(searchTerm) ||
              room.participants[0].user.lastName.toLocaleLowerCase().includes(searchTerm)
          )
        : rooms,
    [rooms, searchTerm]
  );

  return (
    <div>
      <p className={styles.title}>recent messages</p>

      <div className={styles.rooms}>
        {roomsToShow.map((room, idx) => (
          <Room
            room={room}
            handleClick={setSelectedRoomId}
            selected={selectedRoom?.id === room.id}
            highlightTerm={searchTerm}
            key={room.id}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
