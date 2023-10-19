import { FC } from "react";

import { Box, Toolbar, Typography } from "@mui/material";

import { CurrentCategoryState, UserTodoState } from "../../../types";
import TodoTableContainer from "../containers/TodoTableContainer";
import CreateTodoContainer from "../containers/CreateTodoContainer";

/**
 * メインコンテンツコンポーネントの型定義
 *
 * @property {CurrentCategoryState} currentCategory - 選択中のカテゴリ
 * @property {UserTodoState[]} completedTodoList - 完了したタスク一覧
 * @property {UserTodoState[]} inCompletedTodoList - 未完了のタスク一覧
 */
type MainProps = {
  currentCategory: CurrentCategoryState;
  completedTodoList: UserTodoState[];
  inCompletedTodoList: UserTodoState[];
};

/**
 * メインコンテンツコンポーネントです。
 *
 * @param {MainProps} props
 */
const Main: FC<MainProps> = (props: MainProps) => {
  const { currentCategory, completedTodoList, inCompletedTodoList } = props;

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
        <Typography>カテゴリ：{currentCategory.name}</Typography>
        <CreateTodoContainer />
      </Box>
      <TodoTableContainer status="未完了" todoList={inCompletedTodoList} />
      <TodoTableContainer status="完了" todoList={completedTodoList} />
    </Box>
  );
};

export default Main;
