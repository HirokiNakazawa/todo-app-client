import { FC } from "react";

import { Button } from "@mui/material";

import { UserTodoState } from "../../../types";

/**
 * 状態更新ボタンコンポーネントの型定義
 *
 * @property {UserTodoState} todo - 更新対象のタスク
 * @property {(todo: UserTodoState) => void} handleClick - クリックした時に発火するコールバック
 */
type UpdateStatusButtonProps = {
  todo: UserTodoState;
  handleClick: (todo: UserTodoState) => void;
};

/**
 * 状態更新ボタンコンポーネントです。
 *
 * @param {UpdateStatusButtonProps} props
 */
const UpdateStatusButton: FC<UpdateStatusButtonProps> = (props: UpdateStatusButtonProps) => {
  const { todo, handleClick } = props;

  return (
    <Button
      variant="outlined"
      onClick={() => handleClick(todo)}
      color={todo.isCompleted === true ? "success" : "primary"}
    >
      {todo.isCompleted === true ? "完了" : "未完了"}
    </Button>
  );
};

export default UpdateStatusButton;
