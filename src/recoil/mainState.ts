import { atom } from "recoil";

import { CurrentCategoryState } from "../types";

export const currentCategoryState = atom<CurrentCategoryState>({
  key: "currentCategory",
  default: {
    id: 0,
    name: "全て",
  },
});

export const mainCategoryState = atom<string>({
  key: "mainCategory",
  default: "",
});

export const todoState = atom<string>({
  key: "todo",
  default: "",
});

export const limitDateState = atom<Date | null>({
  key: "limitDate",
  default: null,
});
