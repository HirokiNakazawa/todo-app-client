import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { todoState } from "../../../recoil";
import InputTodo from "../components/InputTodo";

/**
 * タスク名の入力フォームコンテナコンポーネントです。
 */
const InputTodoContainer: FC = () => {
  const [todo, setTodo] = useRecoilState<string>(todoState);

  /**
   * タスク名の変更を処理するコールバック
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  return <InputTodo id="todo" todo={todo} handleChange={handleChangeTodo} />;
};

export default InputTodoContainer;
