import { FC } from "react";

import { TodoFunctions, UserTodoState } from "../../../types";
import { useTodo } from "../../Todo/hooks/useTodo";
import UpdateStatusButton from "../components/UpdateStatusButton";

/**
 * 状態更新ボタンコンテナコンポーネントの型定義
 *
 * @property {UserTodoState} todo - 更新対象のタスク
 */
type UpdateStatusContainerProps = {
  todo: UserTodoState;
};

/**
 * 状態更新ボタンコンテナコンポーネントです。
 *
 * @param {UpdateStatusContainerProps} props
 */
const UpdateStatusContainer: FC<UpdateStatusContainerProps> = (props: UpdateStatusContainerProps) => {
  const { todo } = props;

  const todoService: TodoFunctions = useTodo();

  /**
   * クリック時に状態を更新するコールバック
   *
   * @param {UserTodoState} todo - 更新対象のタスク
   * @returns {Promise<void>}
   */
  const handleUpdateStatus = async (todo: UserTodoState): Promise<void> => {
    console.log("状態更新ボタンがクリックされました");
    await todoService.updateTodoStatus(todo);
  };

  return <UpdateStatusButton todo={todo} handleClick={() => handleUpdateStatus(todo)} />;
};

export default UpdateStatusContainer;
