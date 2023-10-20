import { FC } from "react";

import { Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

/**
 * タスク登録ボタンコンポーネントの型定義
 *
 * @property {() => void} handleClick - クリックした時に発火するコールバック
 */
type CreateTodoButtonProps = {
  handleClick: () => void;
};

/**
 * タスク登録ボタンコンポーネントです。
 *
 * @param {CreateTodoButtonProps} props
 */
const CreateTodoButton: FC<CreateTodoButtonProps> = (props: CreateTodoButtonProps) => {
  const { handleClick } = props;

  return (
    <Button variant="outlined" startIcon={<AddCircleOutline />} onClick={handleClick}>
      タスク追加
    </Button>
  );
};

export default CreateTodoButton;
