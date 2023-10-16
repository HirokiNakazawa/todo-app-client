import { FC } from "react";

import { Button } from "@mui/material";

/**
 * モーダルのボタンコンポーネントの型定義
 *
 * @property {string} text - ボタンの表示名
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type ModalButtonProps = {
  text: string;
  handleClick: () => void;
};

/**
 * モーダルのボタンコンポーネントです。
 *
 * @param {ModalButtonProps} props
 */
const ModalButton: FC<ModalButtonProps> = (props: ModalButtonProps) => {
  const { text, handleClick } = props;

  return (
    <Button type="submit" variant="contained" color="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default ModalButton;
