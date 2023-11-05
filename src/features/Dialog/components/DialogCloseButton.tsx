import { Button } from "@mui/material";
import { FC } from "react";

/**
 * ダイアログのクローズボタンコンポーネントの型定義
 *
 * @property {string} text - ボタンの表示名
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type DialogCloseButtonProps = {
  text: string;
  handleClick: () => void;
};

/**
 * ダイアログのクローズボタンコンポーネントです。
 *
 * @param {DialogCloseButtonProps} props
 */
const DialogCloseButton: FC<DialogCloseButtonProps> = (props: DialogCloseButtonProps) => {
  const { text, handleClick } = props;

  return (
    <Button color="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default DialogCloseButton;
