import { FC } from "react";

import { useSetRecoilState } from "recoil";

import { LOGIN_BUTTON } from "../../../config/config";
import { ModalState } from "../../../types";
import { isLoginState, modalState } from "../../../recoil";
import AuthenticationButton from "../components/AuthenticationButton";

/**
 * 認証領域のログインボタンコンテナコンポーネントです。
 */
const LoginContainer: FC = () => {
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setIsLogin = useSetRecoilState<boolean>(isLoginState);

  /**
   * クリック時にモーダルの状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleSetState = (): void => {
    console.log("ログインがクリックされました");
    setModal({
      isOpen: true,
      title: LOGIN_BUTTON,
      buttonText: LOGIN_BUTTON,
    });
    setIsLogin(true);
  };

  return <AuthenticationButton text={LOGIN_BUTTON} handleClick={handleSetState} />;
};

export default LoginContainer;
