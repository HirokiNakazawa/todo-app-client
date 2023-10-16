import { FC } from "react";

import { ResetFunctions } from "../../../types";
import { useReset } from "../../../hooks/useReset";
import ModalButton from "../components/ModalButton";

/**
 * モーダルのクローズボタンコンテナコンポーネントです。
 */
const ModalCloseContainer: FC = () => {
  const resetService: ResetFunctions = useReset();

  /**
   * クリック時に状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleClose = (): void => {
    console.log("閉じるボタンがクリックされました");
    resetService.resetModalParams();
    resetService.resetAuthenticationParams();
  };

  return <ModalButton text="閉じる" handleClick={handleClose} />;
};

export default ModalCloseContainer;
