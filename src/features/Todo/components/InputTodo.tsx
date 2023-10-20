import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

/**
 * タスク名の入力フォームコンポーネントの型定義
 *
 * @property {string} id - テキストフィールドの固有ID
 * @property {string} todo - タスク名
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} handleChange - 入力時に発火するコールバック
 */
type TodoProps = {
  id: string;
  todo: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * タスク名の入力フォームコンポーネントです。
 *
 * @param {TodoProps} props
 */
const InputTodo: FC<TodoProps> = (props: TodoProps) => {
  const { id, todo, handleChange } = props;

  return <TextField id={id} label="TODO" type="text" name="todo" value={todo} onChange={handleChange} required />;
};

export default InputTodo;
