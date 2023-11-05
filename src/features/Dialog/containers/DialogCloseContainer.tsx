import { FC } from "react";

import { ResetFunctions } from "../../../types";
import { useReset } from "../../../hooks/useReset";
import DialogCloseButton from "../components/DialogCloseButton";

/**
 * ダイアログのクローズボタンコンテナコンポーネントです。
 */
const DialogCloseContainer: FC = () => {
  const resetService: ResetFunctions = useReset();

  /**
   * クリック時に状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleClose = (): void => {
    console.log("キャンセルボタンがクリックされました");
    resetService.resetDialogParams();
  };

  return <DialogCloseButton text="キャンセル" handleClick={handleClose} />;
};

export default DialogCloseContainer;
