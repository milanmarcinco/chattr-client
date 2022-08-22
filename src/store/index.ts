import { Socket } from "socket.io-client";
import create from "zustand";

interface IStore {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;

  socket: Socket | null;
  setSocket: (socket: Socket | null) => void;

  rooms: IRoom[];
  setRooms: (rooms: IRoom[]) => void;

  selectedRoomId: string | null;
  setSelectedRoomId: (roomId: string | null) => void;

  privacyModeEnabled: boolean;
  togglePrivacyMode: () => void;

  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;

  receiveMessage: (message: IMessage) => void;

  sendMessage: (content: string) => void;
}

const useStore = create<IStore>()((set, get) => ({
  isLoggedIn: true,

  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYzAzYjBiLTk4NWEtNDRkYS04NWJlLWM5ZGY5MDE4Mjg3YSIsImlhdCI6MTY2MTE3MDQzNSwiZXhwIjoxNjYxMTc0MDM1fQ.MCGH93gQiawTC4G2CsqB5aySJv1Sm_iitgXYByu7Tyc",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYzAzYjBiLTk4NWEtNDRkYS04NWJlLWM5ZGY5MDE4Mjg3YSIsImlhdCI6MTY2MTE3MDQzNSwiZXhwIjoxNjYzNzYyNDM1fQ.qxj5qaoPvgXVmI5YZYIl7n-CDcWkCm3GNVPWYQc4G7U",

  socket: null,
  setSocket: (socket) => set({ socket }),

  rooms: [],
  setRooms: (rooms) => set({ rooms }),

  selectedRoomId: null,
  setSelectedRoomId: (roomId) => {
    if (!roomId) return set({ selectedRoomId: null, searchTerm: "" });
    set({ selectedRoomId: roomId, searchTerm: "" });
  },

  privacyModeEnabled: false,
  togglePrivacyMode: () => set((state) => ({ privacyModeEnabled: !state.privacyModeEnabled, searchTerm: "" })),

  searchTerm: "",
  setSearchTerm: (newSearchTerm) => set({ searchTerm: newSearchTerm, privacyModeEnabled: false }),

  receiveMessage: (message) => {
    const { rooms } = get();

    const targetRoom = rooms.find((room) => room.id === message.roomId)!;
    const otherRooms = rooms.filter((room) => room.id !== message.roomId);

    targetRoom.messages.unshift(message);

    set({
      rooms: [targetRoom, ...otherRooms],
    });
  },

  sendMessage: (content) => {
    const { socket, selectedRoomId } = get();

    if (!socket || !selectedRoomId) return;

    const payload = {
      targetRoomId: selectedRoomId,
      content,
    };

    socket.emit("message:send", payload, (message: IMessage) => {
      get().receiveMessage(message);
    });
  },
}));

export default useStore;
