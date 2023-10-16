import { ChangeEvent, FC } from "react";

import { TextField } from "@mui/material";

/**
 * 認証ユーザー名の入力フォームコンポーネントの型定義
 *
 * @property {string} id - テキストフィールドの固有ID
 * @property {string} name - ユーザー名
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} handleChange - 入力時に発火するコールバック
 */
type AuthNameProps = {
  id: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * 認証ユーザー名の入力フォームコンポーネントです。
 *
 * @param {AuthNameProps} props
 */
const InputAuthName: FC<AuthNameProps> = (props: AuthNameProps) => {
  const { id, name, handleChange } = props;

  return <TextField id={id} label="名前" type="text" name="authName" value={name} onChange={handleChange} required />;
};

export default InputAuthName;
