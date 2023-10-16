import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState } from "../../../types";
import { isLoginState, isRegisterState, modalState } from "../../../recoil";
import CustomModal from "../components/CustomModal";

/**
 * モーダルコンテナコンポーネントです。
 */
const ModalContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);
  const isRegister = useRecoilValue<boolean>(isRegisterState);
  const isLogin = useRecoilValue<boolean>(isLoginState);

  return <CustomModal isOpen={modal.isOpen} isRegister={isRegister} isLogin={isLogin} />;
};

export default ModalContainer;
