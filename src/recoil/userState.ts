import { atom } from "recoil";
import { UserState } from "../types";

export const userState = atom<UserState>({
  key: "user",
  default: { id: 0, name: "", isLoggedIn: false },
});

export const userCategoriesState = atom({
  key: "userCategoriesState",
  default: [],
});
