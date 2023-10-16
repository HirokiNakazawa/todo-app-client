import { FC } from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

import { APP_NAME } from "../../../config/config";

/**
 * ヘッダーコンポーネントです。
 */
const Header: FC = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
