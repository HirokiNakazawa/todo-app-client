import { FC } from "react";

import Sidebar from "../components/Sidebar";

/**
 * サイドバーコンテナコンポーネントです。
 */
const SidebarContainer: FC = () => {
  const drawerWidth: number = 300;

  return <Sidebar drawerWidth={drawerWidth} />;
};

export default SidebarContainer;
