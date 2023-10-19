import { FC } from "react";

import { UserTodoState } from "../../../types";
import TodoTable from "../components/TodoTable";

/**
 * タスク一覧テーブルコンテナコンポーネントの型定義
 *
 * @property {string} status - タスクの状態
 * @property {UserTodoState[]} todoList - タスク一覧
 */
type TodoTableContainerProps = {
  status: string;
  todoList: UserTodoState[];
};

/**
 * タスク一覧テーブルコンテナコンポーネントです。
 *
 * @param {TodoTableContainerProps} props
 */
const TodoTableContainer: FC<TodoTableContainerProps> = (props: TodoTableContainerProps) => {
  const { status, todoList } = props;

  return <TodoTable status={status} todoList={todoList} />;
};

export default TodoTableContainer;
