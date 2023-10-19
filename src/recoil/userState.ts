import { atom } from "recoil";

import { UserCategoryState, UserState, UserTodoState } from "../types";

export const userState = atom<UserState>({
  key: "user",
  default: { id: 0, name: "", isLoggedIn: false },
});

export const userCategoryListState = atom<UserCategoryState[]>({
  key: "userCategoryList",
  default: [],
});

export const userTodoListState = atom<UserTodoState[]>({
  key: "userTodoList",
  default: [],
});

export const inCompletedTodoListState = atom<UserTodoState[]>({
  key: "inCompletedTodoList",
});

export const completedTodoListState = atom<UserTodoState[]>({
  key: "completedTodoList",
});
