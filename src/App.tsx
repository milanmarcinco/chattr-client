import { Routes, Route, Navigate } from "react-router-dom";

import IndexPage from "./pages/IndexPage";

import useStore from "./store";

import "./App.scss";

function App() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <Routes>
      {isLoggedIn && (
        <>
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </>
      )}

      {!isLoggedIn && <></>}
    </Routes>
  );
}

export default App;
