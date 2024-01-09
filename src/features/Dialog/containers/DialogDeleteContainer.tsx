import { FC } from "react";

import { ResetFunctions, TodoFunctions } from "../../../types";
import { useTodo } from "../../Todo/hooks/useTodo";
import { useReset } from "../../../hooks/useReset";
import DialogDeleteButton from "../components/DialogDeleteButton";

/**
 * ダイアログのタスク削除ボタンコンテナコンポーネントです。
 */
const DialogDeleteContainer: FC = () => {
  const todoService: TodoFunctions = useTodo();
  const resetService: ResetFunctions = useReset();

  /**
   * クリック時に状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleClick = (): void => {
    console.log("削除ボタンがクリックされました");
    todoService.deleteTodo();
    resetService.resetDialogParams();
  };

  return <DialogDeleteButton text="削除" handleClick={handleClick} />;
};

export default DialogDeleteContainer;
