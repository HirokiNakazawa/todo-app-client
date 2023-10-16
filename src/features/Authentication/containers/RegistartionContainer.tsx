import { FC } from "react";

import { useSetRecoilState } from "recoil";

import { REGISTER_BUTTON } from "../../../config/config";
import { ModalState } from "../../../types";
import { isRegisterState, modalState } from "../../../recoil";
import AuthenticationButton from "../components/AuthenticationButton";

/**
 * 認証領域のユーザー登録ボタンコンテナコンポーネントです。
 */
const RegistrationContainer: FC = () => {
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setIsRegister = useSetRecoilState<boolean>(isRegisterState);

  /**
   * クリック時にモーダルの状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleSetState = (): void => {
    console.log("新規登録がクリックされました");
    setModal({
      isOpen: true,
      title: REGISTER_BUTTON,
      buttonText: REGISTER_BUTTON,
    });
    setIsRegister(true);
  };

  return <AuthenticationButton text={REGISTER_BUTTON} handleClick={handleSetState} />;
};

export default RegistrationContainer;
