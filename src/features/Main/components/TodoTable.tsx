import { FC } from "react";

import { CurrentCategoryState, UserTodoState } from "../../../types";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TodoTableRow from "./TodoTableRow";

/**
 * タスク一覧テーブルコンポーネントの型定義
 *
 * @property {string} status - タスクの状態
 * @property {UserTodoState[]} todoList - タスク一覧
 * @property {CurrentCategoryState} currentCategory - 選択中のカテゴリ
 */
type TodoTableProps = {
  status: string;
  todoList: UserTodoState[];
  currentCategory: CurrentCategoryState;
};

/**
 * タスク一覧テーブルコンポーネントです。
 *
 * @param {TodoTableProps} props
 */
const TodoTable: FC<TodoTableProps> = (props: TodoTableProps) => {
  const { status, todoList, currentCategory } = props;

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Typography>・{status}</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">カテゴリ</TableCell>
              <TableCell align="center" width={400}>
                タスク名
              </TableCell>
              <TableCell align="center">期限</TableCell>
              <TableCell align="center">状態</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TodoTableRow todoList={todoList} currentCategory={currentCategory} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoTable;
