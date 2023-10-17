import { FC } from "react";

import { Typography } from "@mui/material";

import LogoutContainer from "../../Authentication/containers/LogoutContainer";

/**
 * ログインしている状態の認証領域コンポーネントの型定義
 *
 * @property {string} name - ログインしているユーザー名
 */
type LoggedInUserProps = {
  name: string;
};

/**
 * ログインしている状態の認証領域コンポーネントです。
 *
 * @param {LoggedInUserProps} props
 */
const LoggedInUser: FC<LoggedInUserProps> = (props: LoggedInUserProps) => {
  const { name } = props;

  return (
    <>
      <Typography>{name}</Typography>
      <LogoutContainer />
    </>
  );
};

export default LoggedInUser;
