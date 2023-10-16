import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState } from "../../../types";
import { modalErrorMsgState, modalState } from "../../../recoil";
import ModalHeader from "../components/ModalHeader";

/**
 * モーダルヘッダーコンテナコンポーネントです。
 */
const ModalHeaderContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);
  const modalErrorMsg = useRecoilValue<string>(modalErrorMsgState);

  return <ModalHeader title={modal.title} errorMsg={modalErrorMsg} />;
};

export default ModalHeaderContainer;
