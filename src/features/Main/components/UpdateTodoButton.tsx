import { FC } from "react";

import { Button } from "@mui/material";

/**
 * タスク編集ボタンコンポーネントの型定義
 *
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type UpdateTodoButtonProps = {
  handleClick: () => void;
};

/**
 * タスク編集ボタンコンポーネントです。
 */
const UpdateTodoButton: FC<UpdateTodoButtonProps> = (props: UpdateTodoButtonProps) => {
  const { handleClick } = props;

  return (
    <Button variant="outlined" color="info" onClick={handleClick}>
      編集
    </Button>
  );
};

export default UpdateTodoButton;
