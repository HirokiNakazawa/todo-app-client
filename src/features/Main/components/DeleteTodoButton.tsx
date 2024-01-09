import { FC } from "react";

import { Button } from "@mui/material";

/**
 * タスク削除ボタンコンポーネントの型定義
 *
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type DeleteTodoButtonProps = {
  handleClick: () => void;
};

/**
 * タスク削除ボタンコンポーネントです。
 *
 * @param {DeleteTodoButtonProps} props
 */
const DeleteTodoButton: FC<DeleteTodoButtonProps> = (props: DeleteTodoButtonProps) => {
  const { handleClick } = props;

  return (
    <Button variant="outlined" color="error" onClick={handleClick}>
      削除
    </Button>
  );
};

export default DeleteTodoButton;
