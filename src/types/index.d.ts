/**
 * Recoilの状態
 */
export type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
};

export type UserState = {
  id: number;
  name: string;
  isLoggedIn: boolean;
};

/**
 * フォームデータ
 */
export type AuthFormData = {
  name: string;
  password: string;
};

/**
 * APIレスポンス
 */
export type PostAuthResponse = {
  id: number;
  name: string;
};

/**
 * 状態の初期化に関するカスタムフック
 */
export declare type ResetFunctions = {
  resetModalParams: () => void;
  resetAuthenticationParams: () => void;
};

/**
 * ユーザー認証に関するAPI関数の型定義
 */
export declare type AuthApiFunctions = {
  postRegister: (data: AuthFormData) => Promise<PostAuthResponse>;
  postLogin: (data: AuthFormData) => Promise<PostAuthResponse>;
};

/**
 * ユーザー認証に関するカスタムフック
 */
export declare type AuthenticationFunctions = {
  register: () => Promise<void>;
  login: () => Promise<void>;
};
