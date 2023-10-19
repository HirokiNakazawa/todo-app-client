import { FC } from "react";

import CreateTodoButton from "../components/CreateTodoButton";

/**
 * タスク登録ボタンコンテナコンポーネントです。
 */
const CreateTodoContainer: FC = () => {
  /**
   * クリック時に状態を更新するコールバック
   *
   * @returns {Promise<void>}
   */
  const handleCreateTodo = async (): Promise<void> => {
    console.log("タスク追加ボタンがクリックされました");
  };

  return <CreateTodoButton handleClick={handleCreateTodo} />;
};

export default CreateTodoContainer;
