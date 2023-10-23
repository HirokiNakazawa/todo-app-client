import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState, TodoFunctions } from "../../../types";
import { modalState } from "../../../recoil";
import { useTodo } from "../../Todo/hooks/useTodo";
import ModalButton from "../components/ModalButton";

/**
 * モーダルのタスク作成ボタンコンテナコンポーネントです。
 */
const ModalCreateTodoContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);

  const todoService: TodoFunctions = useTodo();

  /**
   * クリック時にタスクを作成し、状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleCreateTodo = (): void => {
    console.log("タスク作成ボタンがクリックされました");
    todoService.createTodo();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleCreateTodo} />;
};

export default ModalCreateTodoContainer;
