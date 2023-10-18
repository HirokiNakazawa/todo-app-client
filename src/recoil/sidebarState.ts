import { atom } from "recoil";

export const sidebarErrorMsgState = atom<string>({
  key: "sidebarErrorMsg",
  default: "",
});
