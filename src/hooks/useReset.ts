import { useSetRecoilState } from "recoil";

import { ModalState, ResetFunctions } from "../types";
import {
  authNameState,
  authPasswordState,
  isCreateTodoState,
  isLoginState,
  isRegisterState,
  limitDateState,
  mainCategoryState,
  modalErrorMsgState,
  modalState,
  todoState,
} from "../recoil";

/**
 * 状態の初期化に関するカスタムフックです。
 *
 * @returns {ResetFunctions} 状態の初期化関連の関数を含むオブジェクト
 */
const useReset = (): ResetFunctions => {
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setModalErrorMsg = useSetRecoilState<string>(modalErrorMsgState);

  const setIsRegister = useSetRecoilState<boolean>(isRegisterState);
  const setIsLogin = useSetRecoilState<boolean>(isLoginState);
  const setIsCreateTodo = useSetRecoilState<boolean>(isCreateTodoState);

  const setAuthName = useSetRecoilState<string>(authNameState);
  const setAuthPassword = useSetRecoilState<string>(authPasswordState);

  const setCategory = useSetRecoilState<string>(mainCategoryState);
  const setTodo = useSetRecoilState<string>(todoState);
  const setLimitDate = useSetRecoilState<Date | null>(limitDateState);

  /**
   * モーダルの状態を初期化する関数
   *
   * @returns {void}
   */
  const resetModalParams = (): void => {
    setModal({
      isOpen: false,
      title: "",
      buttonText: "",
    });
    setModalErrorMsg("");
    setIsRegister(false);
    setIsLogin(false);
    setIsCreateTodo(false);
  };

  /**
   * 認証情報の状態を初期化する関数
   *
   * @returns {void}
   */
  const resetAuthenticationParams = (): void => {
    setAuthName("");
    setAuthPassword("");
  };

  /**
   * タスク情報の状態を初期化する関数
   *
   * @returns {void}
   */
  const resetTodoParams = (): void => {
    setCategory("");
    setTodo("");
    setLimitDate(null);
  };

  return { resetModalParams, resetAuthenticationParams, resetTodoParams };
};

export { useReset };
