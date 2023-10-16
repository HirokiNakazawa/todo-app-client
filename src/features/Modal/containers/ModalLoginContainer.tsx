import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState } from "../../../types";
import { modalState } from "../../../recoil";
import ModalButton from "../components/ModalButton";

/**
 * モーダルのログインボタンコンテナコンポーネントです。
 */
const ModalLoginContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);

  /**
   * クリック時に状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleLogin = (): void => {
    console.log("ログインボタンがクリックされました");
  };

  return <ModalButton text={modal.buttonText} handleClick={handleLogin} />;
};

export default ModalLoginContainer;
