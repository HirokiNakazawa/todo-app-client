import { FC } from "react";

import { useRecoilValue } from "recoil";

import { AuthenticationFunctions, ModalState } from "../../../types";
import { modalState } from "../../../recoil";
import { useAuthentication } from "../../Authentication/hooks/useAuthentication";
import ModalButton from "../components/ModalButton";

/**
 * モーダルのユーザー登録ボタンコンテナコンポーネントです。
 */
const ModalRegistrationContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);

  const authenticationService: AuthenticationFunctions = useAuthentication();

  /**
   * クリック時に状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleRegister = (): void => {
    console.log("新規登録ボタンがクリックされました");
    authenticationService.register();
  };

  return <ModalButton text={modal.buttonText} handleClick={handleRegister} />;
};

export default ModalRegistrationContainer;
