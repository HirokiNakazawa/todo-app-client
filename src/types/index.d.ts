/**
 * Recoilの状態
 */
export type ModalState = {
  isOpen: boolean;
  title: string;
  buttonText: string;
};

export type DialogState = {
  isOpen: boolean;
  title: string;
  text: string;
};

export type UserState = {
  id: number;
  name: string;
  isLoggedIn: boolean;
};

export type UserCategoryState = {
  id: number;
  category: string;
};

export type UserTodoState = {
  id: number;
  categoryId: number;
  todo: string;
  limitDate: string;
  isCompleted: boolean;
  category: string;
};

export type CurrentCategoryState = {
  id: number;
  name: string;
};

/**
 * フォームデータ
 */
export type AuthFormData = {
  name: string;
  password: string;
};

export type CreateCategoryFormData = {
  user_id: number;
  category: string;
};

export type TodoFormData = {
  id?: number;
  user_id?: number;
  category_id?: number;
  todo?: string;
  limit_date?: string | null;
  is_completed?: boolean;
};

/**
 * APIレスポンス
 */
export type PostAuthResponse =
  | {
      id: number;
      name: string;
    }
  | {
      message: string;
    };

export type GetUserCategoryListResponse = {
  id: number;
  category: string;
};

export type GetUserTodoListResponse = {
  id: number;
  category_id: number;
  todo: string;
  limit_date: string;
  is_completed: boolean;
  category: string;
};

export type PostCreateCategoryResponse =
  | {
      category: string;
    }
  | { message: string };

export type PostCreateTodoResponse =
  | {
      category: string;
      todo: string;
      limit_date: string;
    }
  | { message: string };

export type PostUpdateTodoResponse =
  | {
      category: string;
      todo: string;
      limit_date: string;
      is_completed: boolean;
    }
  | { message: string };

export type PostDeleteTodoResponse =
  | {
      id: number;
      todo: string;
    }
  | { message: string };

/**
 * 汎用API関数の型定義
 */
export declare type ApiFunctions = {
  getUserCategoryList: (id: number) => Promise<GetUserCategoryListResponse[]>;
  getUserTodoList: (id: number) => Promise<GetUserTodoListResponse[]>;
};

/**
 * APIレスポンスコンバートカスタムフックの型定義
 */
export declare type ConvertFunctions = {
  convertToUserState: (response: PostAuthResponse) => UserState;
  convertToUserTodoState: (response: GetUserTodoListResponse[]) => UserTodoState[];
};

/**
 * 状態の初期化に関するカスタムフック
 */
export declare type ResetFunctions = {
  resetModalParams: () => void;
  resetDialogParams: () => void;
  resetAuthenticationParams: () => void;
  resetTodoParams: () => void;
};

/**
 * 状態の更新に関するカスタムフックの型定義
 */
export declare type UpdateFunctions = {
  updateUserCategoryList: (id: number) => Promise<void>;
  updateUserTodoList: (id: number) => Promise<void>;
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

/**
 * カテゴリ登録に関するAPI関数の型定義
 */
export declare type CreateCategoryApiFunctions = {
  postCreateCategory: (data: CreateCategoryFormData) => Promise<PostCreateCategoryResponse>;
};

/**
 * カテゴリ登録に関するカスタムフックの型定義
 */
export declare type CreateCategoryFunctions = {
  createCategory: () => Promise<void>;
};

/**
 * タスクに関するAPI関数の型定義
 */
export declare type TodoApiFunctions = {
  postCreateTodo: (data: TodoFormData) => Promise<PostCreateTodoResponse>;
  postUpdateTodo: (id: number, data: TodoFormData) => Promise<PostUpdateTodoResponse>;
  postUpdateTodoStatus: (id: number, data: TodoFormData) => Promise<PostUpdateTodoResponse>;
  postDeleteTodo: (id: number) => Promise<PostDeleteTodoResponse>;
};

/**
 * タスクに関するカスタムフックの型定義
 */
export declare type TodoFunctions = {
  createTodo: () => Promise<void>;
  updateTodo: () => Promise<void>;
  updateTodoStatus: (todo: UserTodoState) => Promise<void>;
  deleteTodo: () => Promise<void>;
};
