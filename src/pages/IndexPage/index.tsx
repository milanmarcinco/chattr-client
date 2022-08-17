import MainLayout from "@/layouts/MainLayout";
import Sidebar from "@/components/Sidebar";
import Chat from "@/components/Chat";

import styles from "./IndexPage.module.scss";

const IndexPage = () => (
  <MainLayout>
    <Sidebar />
    <Chat />
  </MainLayout>
);

export default IndexPage;
