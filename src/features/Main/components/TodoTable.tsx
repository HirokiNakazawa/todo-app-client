import { FC } from "react";

import { UserTodoState } from "../../../types";
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

/**
 * タスク一覧テーブルコンポーネントの型定義
 *
 * @property {string} status - タスクの状態
 * @property {UserTodoState[]} todoList - タスク一覧
 */
type TodoTableProps = {
  status: string;
  todoList: UserTodoState[];
};

/**
 * タスク一覧テーブルコンポーネントです。
 *
 * @param {TodoTableProps} props
 */
const TodoTable: FC<TodoTableProps> = (props: TodoTableProps) => {
  const { status, todoList } = props;

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
            {todoList.map((item) => (
              <TableRow>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.todo}</TableCell>
                <TableCell>{item.limitDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoTable;
