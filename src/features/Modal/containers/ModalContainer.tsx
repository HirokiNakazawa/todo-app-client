import { FC } from "react";

import { useRecoilValue } from "recoil";

import { ModalState } from "../../../types";
import { isCreateTodoState, isLoginState, isRegisterState, modalState } from "../../../recoil";
import CustomModal from "../components/CustomModal";

/**
 * モーダルコンテナコンポーネントです。
 */
const ModalContainer: FC = () => {
  const modal = useRecoilValue<ModalState>(modalState);
  const isRegister = useRecoilValue<boolean>(isRegisterState);
  const isLogin = useRecoilValue<boolean>(isLoginState);
  const isCreateTodo = useRecoilValue<boolean>(isCreateTodoState);

  return <CustomModal isOpen={modal.isOpen} isRegister={isRegister} isLogin={isLogin} isCreateTodo={isCreateTodo} />;
};

export default ModalContainer;
