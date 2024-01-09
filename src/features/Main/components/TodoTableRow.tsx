import { FC } from "react";

import { Box, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";

import { CurrentCategoryState, UserTodoState } from "../../../types";
import UpdateStatusContainer from "../containers/UpdateStatusContainer";
import UpdateTodoContainer from "../containers/UpdateTodoContainer";
import DeleteTodoContainer from "../containers/DeleteTodoContainer";

/**
 * タスク一覧テーブルのテーブルデータコンポーネント型定義
 *
 * @property {CurrentCategoryState} currentCategory - 選択中のカテゴリ
 * @property {UserTodoState[]} todoList - タスク一覧
 */
type TodoTableRowProps = {
  currentCategory: CurrentCategoryState;
  todoList: UserTodoState[];
};

/**
 * タスク一覧テーブルのテーブルデータコンポーネントです。
 *
 * @param {TodoTableRowProps} props
 */
const TodoTableRow: FC<TodoTableRowProps> = (props: TodoTableRowProps) => {
  const { currentCategory, todoList } = props;

  return (
    <>
      {todoList.map((item) =>
        currentCategory.id === 0 || currentCategory.id === item.categoryId ? (
          <TableRow key={item.id}>
            <TableCell align="center">{item.category}</TableCell>
            <TableCell>{item.todo}</TableCell>
            <TableCell align="center">
              {item.limitDate ? dayjs(item.limitDate).format("YYYY/MM/DD") : "期限なし"}
            </TableCell>
            <TableCell align="center">
              <UpdateStatusContainer todo={item} />
            </TableCell>
            <TableCell>
              <Box sx={{ display: "flex", gap: 2 }}>
                <UpdateTodoContainer todo={item} />
                <DeleteTodoContainer todo={item} />
              </Box>
            </TableCell>
          </TableRow>
        ) : null
      )}
    </>
  );
};

export default TodoTableRow;
