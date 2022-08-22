import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import io from "socket.io-client";

import App from "./App";
import useStore from "./store";

import "./index.scss";

const socket = io("http://localhost:4000", {
  auth: (cb) => {
    cb({ accessToken: useStore.getState().accessToken });
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App socket={socket} />
    </BrowserRouter>
  </React.StrictMode>
);
