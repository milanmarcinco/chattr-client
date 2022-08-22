// type IURL = string;
// type IUUID = string;

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

interface IMessage {
  id: string;
  userId: string;
  roomId: string;
  content: string;
  user: {
    id: string;
    firstName: string;
  };
  createdAt: string;
}

interface IParticipant {
  userId: string;
  roomId: string;
  user: IUser;
}

interface IRoom {
  id: string;
  type: "DIRECT" | "GROUP";
  participants: IParticipant[];
  messages: IMessage[];
  updatedAt: string;
  createdAt: string;
}

interface IInitResponse {
  rooms: IRoom[];
}
