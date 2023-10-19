import { FC } from "react";

import { TableCell, TableRow } from "@mui/material";

import { UserTodoState } from "../../../types";

/**
 * タスク一覧テーブルのテーブルデータコンポーネント型定義
 *
 * @property {UserTodoState[]} todoList
 */
type TodoTableRowProps = {
  todoList: UserTodoState[];
};

/**
 * タスク一覧テーブルのテーブルデータコンポーネントです。
 *
 * @param {TodoTableRowProps} props
 */
const TodoTableRow: FC<TodoTableRowProps> = (props: TodoTableRowProps) => {
  const { todoList } = props;

  return (
    <>
      {todoList.map((item) => (
        <TableRow key={item.id}>
          <TableCell align="center">{item.category}</TableCell>
          <TableCell>{item.todo}</TableCell>
          <TableCell align="center">{item.limitDate}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TodoTableRow;
