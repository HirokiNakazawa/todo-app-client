import { FC } from "react";

import { useSetRecoilState } from "recoil";

import { ModalState } from "../../../types";
import { isCreateTodoState, modalState } from "../../../recoil";
import CreateTodoButton from "../components/CreateTodoButton";

/**
 * タスク登録ボタンコンテナコンポーネントです。
 */
const CreateTodoContainer: FC = () => {
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setIsCreateTodo = useSetRecoilState<boolean>(isCreateTodoState);

  /**
   * クリック時に状態を更新するコールバック
   *
   * @returns {void}
   */
  const handleCreateTodo = (): void => {
    console.log("タスク追加ボタンがクリックされました");
    setModal({
      isOpen: true,
      title: "タスク作成",
      buttonText: "作成",
    });
    setIsCreateTodo(true);
  };

  return <CreateTodoButton handleClick={handleCreateTodo} />;
};

export default CreateTodoContainer;
