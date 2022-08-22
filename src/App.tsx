import { Routes, Route, Navigate } from "react-router-dom";
import { Socket } from "socket.io-client";

import MainPage from "./pages/MainPage";
import useInitSocket from "./hooks/useInitSocket";
import useStore from "./store";

import "./App.scss";

interface IProps {
  socket: Socket;
}

function App({ socket }: IProps) {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  useInitSocket(socket);

  return (
    <Routes>
      {isLoggedIn && (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </>
      )}

      {!isLoggedIn && <></>}
    </Routes>
  );
}

export default App;
