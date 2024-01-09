import { FC } from "react";

import { useSetRecoilState } from "recoil";

import { ModalState, UserTodoState } from "../../../types";
import { isUpdateTodoState, modalState } from "../../../recoil";
import UpdateTodoButton from "../components/UpdateTodoButton";

/**
 * タスク編集ボタンコンテナコンポーネントの型定義
 *
 * @property {UserTodoState} todo - 更新対象のタスク
 */
type UpdateTodoContainerProps = {
  todo: UserTodoState;
};

/**
 * タスク編集ボタンコンテナコンポーネントです。
 *
 * @param {UpdateTodoContainerProps} props
 */
const UpdateTodoContainer: FC<UpdateTodoContainerProps> = (props: UpdateTodoContainerProps) => {
  const { todo } = props;

  const setModal = useSetRecoilState<ModalState>(modalState);
  const setIsUpdateTodo = useSetRecoilState<boolean>(isUpdateTodoState);

  /**
   * クリック時に状態を更新するコールバック
   *
   * @returns {void}
   */
  const handleUpdateTodo = (): void => {
    console.log(todo);
    console.log("タスク編集ボタンがクリックされました");
    setModal({
      isOpen: true,
      title: "タスク編集",
      buttonText: "更新",
    });
    setIsUpdateTodo(true);
  };

  return <UpdateTodoButton handleClick={handleUpdateTodo} />;
};

export default UpdateTodoContainer;
