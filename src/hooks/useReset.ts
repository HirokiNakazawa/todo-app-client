import { useSetRecoilState } from "recoil";

import { ModalState, ResetFunctions } from "../types";
import {
  authNameState,
  authPasswordState,
  isLoginState,
  isRegisterState,
  modalErrorMsgState,
  modalState,
} from "../recoil";

/**
 * 状態の初期化に関するカスタムフックです。
 *
 * @returns {ResetFunctions} 状態の初期化関連の関数を含むオブジェクト
 */
const useReset = (): ResetFunctions => {
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setModalErrorMsg = useSetRecoilState<string>(modalErrorMsgState);

  const setAuthName = useSetRecoilState<string>(authNameState);
  const setAuthPassword = useSetRecoilState<string>(authPasswordState);

  const setIsRegister = useSetRecoilState<boolean>(isRegisterState);
  const setIsLogin = useSetRecoilState<boolean>(isLoginState);

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

  return { resetModalParams, resetAuthenticationParams };
};

export { useReset };
