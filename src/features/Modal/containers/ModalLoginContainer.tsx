import { FC } from "react";

import { useRecoilValue } from "recoil";

import { AuthenticationFunctions, ModalState } from "../../../types";
import { modalState } from "../../../recoil";
import { useAuthentication } from "../../Authentication/hooks/useAuthentication";
import ModalButton from "../components/ModalButton";

/**
 * モーダルのログインボタンコンテナコンポーネントです。
 */
const ModalLoginContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);

  const authenticationService: AuthenticationFunctions = useAuthentication();

  /**
   * クリック時にログインを実行し、状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleLogin = (): void => {
    console.log("ログインボタンがクリックされました");
    authenticationService.login();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleLogin} />;
};

export default ModalLoginContainer;
