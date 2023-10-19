import { FC } from "react";

import { Box, Toolbar, Typography } from "@mui/material";
import { UserTodoState } from "../../../types";
import TodoTableContainer from "../containers/TodoTableContainer";

/**
 * メインコンテンツコンポーネントの型定義
 *
 * @property {UserTodoState[]} completedTodoList - 完了したタスク一覧
 * @property {UserTodoState[]} inCompletedTodoList - 未完了のタスク一覧
 */
type MainProps = {
  completedTodoList: UserTodoState[];
  inCompletedTodoList: UserTodoState[];
};

/**
 * メインコンテンツコンポーネントです。
 *
 * @param {MainProps} props
 */
const Main: FC<MainProps> = (props: MainProps) => {
  const { completedTodoList, inCompletedTodoList } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 2 }}>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography>カテゴリ</Typography>
      </Box>
      <TodoTableContainer status="未完了" todoList={inCompletedTodoList} />
      <TodoTableContainer status="完了" todoList={completedTodoList} />
    </Box>
  );
};

export default Main;