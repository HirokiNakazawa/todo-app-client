/**
 * Recoilの状態
 */
export type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
};

/**
 * 状態の初期化に関するカスタムフック
 */
export declare type ResetFunctions = {
  resetModalParams: () => void;
};

/**
 * ユーザー認証に関するカスタムフック
 */
export declare type AuthenticationFunctions = {
  register: () => Promise<void>;
  login: () => Promise<void>;
};
