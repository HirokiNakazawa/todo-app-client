import { atom } from "recoil";

import { ModalState } from "../types";

export const modalState = atom<ModalState>({
  key: "modal",
  default: { isOpen: false, title: "", buttonText: "" },
});

export const isRegisterState = atom<boolean>({
  key: "isRegisterModal",
  default: false,
});

export const isLoginState = atom<boolean>({
  key: "isLoginModal",
  default: false,
});
