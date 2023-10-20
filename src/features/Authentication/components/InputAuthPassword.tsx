import { ChangeEvent, FC } from "react";

import { TextField } from "@mui/material";

/**
 * 認証パスワードの入力フォームコンポーネントの型定義
 *
 * @property {string} id - テキストフィールドの固有ID
 * @property {string} password - パスワード
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} handleChange - 入力時に発火するコールバック
 */
type AuthPasswordProps = {
  id: string;
  password: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * 認証パスワードの入力フォームコンポーネントです。
 *
 * @param {AuthPasswordProps} props
 */
const InputAuthPassword: FC<AuthPasswordProps> = (props: AuthPasswordProps) => {
  const { id, password, handleChange } = props;

  return (
    <TextField
      id={id}
      label="パスワード"
      type="password"
      name="authPassword"
      value={password}
      onChange={handleChange}
      required
    />
  );
};

export default InputAuthPassword;
