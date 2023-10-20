import { atom } from "recoil";

import { CurrentCategoryState } from "../types";

export const currentCategoryState = atom<CurrentCategoryState>({
  key: "currentCategory",
  default: {
    id: 0,
    name: "全て",
  },
});

export const todoState = atom<string>({
  key: "todo",
  default: "",
});