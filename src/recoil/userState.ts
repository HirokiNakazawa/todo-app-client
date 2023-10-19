import { atom } from "recoil";

import { UserCategoryState, UserState } from "../types";

export const userState = atom<UserState>({
  key: "user",
  default: { id: 0, name: "", isLoggedIn: false },
});

export const userCategoryListState = atom<UserCategoryState[]>({
  key: "userCategoryList",
  default: [],
});
