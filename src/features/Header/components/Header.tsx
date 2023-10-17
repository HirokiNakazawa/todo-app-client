import { FC } from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

import { APP_NAME } from "../../../config/config";
import LoggedInUser from "./LoggedInUser";
import Guest from "./Guest";

/**
 * ヘッダーコンポーネントの型定義
 *
 * @property {string} name - ログインしているユーザー名
 * @property {boolean} isLoggedIn - ユーザーログインフラグ
 */
type HeaderProps = {
  name: string;
  isLoggedIn: boolean;
};

/**
 * ヘッダーコンポーネントです。
 */
const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { name, isLoggedIn } = props;

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        {isLoggedIn ? <LoggedInUser name={name} /> : <Guest />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
