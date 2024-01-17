import { FC } from "react";
import { useRecoilValue } from "recoil";
import { ModalState, TodoFunctions } from "../../../types";
import { modalState } from "../../../recoil";
import { useTodo } from "../../Todo/hooks/useTodo";
import ModalButton from "../components/ModalButton";

/**
 * モーダルのタスク更新ボタンコンテナコンポーネントです。
 */
const ModalUpdateTodoContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);

  const todoService: TodoFunctions = useTodo();

  /**
   * クリック時にタスクを更新し、状態を処理するコールバック
   *
   * @returns {Promise<void>}
   */
  const handleUpdateTodo = async (): Promise<void> => {
    console.log("タスク更新ボタンがクリックされました");
  };

  return <ModalButton text={modal.buttonText} handleClick={handleUpdateTodo} />;
};

export default ModalUpdateTodoContainer;
