import { atom } from "recoil";

import { DialogState } from "../types";

export const dialogState = atom<DialogState>({
  key: "dialog",
  default: { isOpen: false, title: "", text: "" },
});
