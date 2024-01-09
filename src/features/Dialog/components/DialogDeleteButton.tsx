import { FC } from "react";

import { Button } from "@mui/material";

/**
 * ダイアログの削除ボタンコンポーネントの型定義
 *
 * @property {string} text - ボタンの表示名
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type DialogDeleteButtonProps = {
  text: string;
  handleClick: () => void;
};

/**
 * ダイアログの削除ボタンコンポーネントです。
 *
 * @param {DialogDeleteButtonProps} props
 */
const DialogDeleteButton: FC<DialogDeleteButtonProps> = (props: DialogDeleteButtonProps) => {
  const { text, handleClick } = props;

  return (
    <Button color="error" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default DialogDeleteButton;
