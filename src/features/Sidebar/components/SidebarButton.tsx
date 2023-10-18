import { FC } from "react";

import { Button } from "@mui/material";

/**
 * サイドバーボタンコンポーネントの型定義
 *
 * @property {string} text - ボタンの表示名
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type SidebarButtonProps = {
  text: string;
  handleClick: () => void;
};

/**
 * サイドバーボタンコンポーネントです。
 *
 * @param {SidebarButtonProps} props
 */
const SidebarButton: FC<SidebarButtonProps> = (props: SidebarButtonProps) => {
  const { text, handleClick } = props;

  return (
    <Button type="submit" variant="contained" color="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default SidebarButton;
