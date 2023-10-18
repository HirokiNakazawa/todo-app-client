import { atom } from "recoil";

export const sidebarErrorMsgState = atom<string>({
  key: "sidebarErrorMsg",
  default: "",
});

export const sidebarCategoryState = atom<string>({
  key: "sidebarCategoryState",
  default: "",
});
