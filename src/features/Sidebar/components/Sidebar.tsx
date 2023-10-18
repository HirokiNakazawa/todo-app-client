import { FC } from "react";

import { Box, Drawer, Toolbar } from "@mui/material";

import CategoryRegistrationContainer from "../containers/CategoryRegistrationContainer";

/**
 * サイドバーコンポーネントの型定義
 *
 * @property {number} drawerWidth - サイドバーの横幅
 */
type SideberProps = {
  drawerWidth: number;
};

/**
 * サイドバーコンポーネントです。
 *
 * @param {SideberProps} props
 */
const Sidebar: FC<SideberProps> = (props: SideberProps) => {
  const { drawerWidth } = props;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <CategoryRegistrationContainer />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
