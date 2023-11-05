import { FC } from "react";

import { useSetRecoilState } from "recoil";

import { DialogState, UserTodoState } from "../../../types";
import { dialogState } from "../../../recoil/dialogState";
import DeleteTodoButton from "../components/DeleteTodoButton";

/**
 * タスク削除ボタンコンテナコンポーネントの型定義
 *
 * @property {UserTodoState} todo - 削除対象のタスク
 */
type DeleteTodoContainerProps = {
  todo: UserTodoState;
};

/**
 * タスク削除ボタンコンテナコンポーネントです。
 *
 * @param {DeleteTodoContainerProps} props
 */
const DeleteTodoContainer: FC<DeleteTodoContainerProps> = (props: DeleteTodoContainerProps) => {
  const { todo } = props;

  const setDialog = useSetRecoilState<DialogState>(dialogState);

  /**
   * クリック時にダイアログの状態を更新するコールバック
   *
   * @returns {void}
   */
  const handleSetState = (): void => {
    console.log(todo);
    console.log("タスク削除ボタンがクリックされました");
    setDialog({
      isOpen: true,
      title: "確認",
      text: "本当に削除しますか?",
    });
  };

  return <DeleteTodoButton handleClick={handleSetState} />;
};

export default DeleteTodoContainer;
