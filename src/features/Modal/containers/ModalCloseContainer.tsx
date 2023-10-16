import { FC } from "react";
import ModalButton from "../components/ModalButton";

/**
 * モーダルのクローズボタンコンテナコンポーネントです。
 */
const ModalCloseContainer: FC = () => {
  /**
   * クリック時に状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleClose = (): void => {
    console.log("閉じるボタンがクリックされました");
  };

  return <ModalButton text="閉じる" handleClick={handleClose} />;
};

export default ModalCloseContainer;
