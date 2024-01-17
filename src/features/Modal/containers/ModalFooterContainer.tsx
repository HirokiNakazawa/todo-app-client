import { FC } from "react";

import { useRecoilValue } from "recoil";

import { isCreateTodoState, isLoginState, isRegisterState, isUpdateTodoState } from "../../../recoil";
import ModalFooter from "../components/ModalFooter";

/**
 * モーダルフッターコンテナコンポーネントです。
 */
const ModalFooterContainer: FC = () => {
  const isRegister = useRecoilValue<boolean>(isRegisterState);
  const isLogin = useRecoilValue<boolean>(isLoginState);
  const isCreateTodo = useRecoilValue<boolean>(isCreateTodoState);
  const isUpdateTodo = useRecoilValue<boolean>(isUpdateTodoState);

  return (
    <ModalFooter isRegister={isRegister} isLogin={isLogin} isCreateTodo={isCreateTodo} isUpdateTodo={isUpdateTodo} />
  );
};

export default ModalFooterContainer;
