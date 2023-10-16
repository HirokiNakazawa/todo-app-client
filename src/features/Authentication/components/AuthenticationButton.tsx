import { Button } from "@mui/material";
import { FC } from "react";

/**
 * 認証関連のボタンコンポーネント型定義
 *
 * @property {string} text - ボタンの表示名
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type AuthenticationButtonProps = {
  text: string;
  handleClick: () => void;
};

/**
 * 認証関連のボタンコンポーネントです。
 */
const AuthenticationButton: FC<AuthenticationButtonProps> = (props: AuthenticationButtonProps) => {
  const { text, handleClick } = props;

  return (
    <Button color="inherit" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default AuthenticationButton;
