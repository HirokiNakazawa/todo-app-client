import { FC } from "react";

import { CurrentCategoryState, UserTodoState } from "../../../types";
import TodoTable from "../components/TodoTable";
import { useRecoilValue } from "recoil";
import { currentCategoryState } from "../../../recoil";

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

  const currentCategory = useRecoilValue<CurrentCategoryState>(currentCategoryState);

  return <TodoTable status={status} todoList={todoList} currentCategory={currentCategory} />;
};

export default TodoTableContainer;
