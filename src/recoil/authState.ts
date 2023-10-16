import { atom } from "recoil";

export const authNameState = atom<string>({
  key: "authName",
  default: "",
});

export const authPasswordState = atom<string>({
  key: "authPassword",
  default: "",
});
