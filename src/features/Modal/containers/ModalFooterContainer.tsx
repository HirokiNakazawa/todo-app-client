import { FC } from "react";

import { useRecoilValue } from "recoil";

import { isLoginState, isRegisterState } from "../../../recoil";
import ModalFooter from "../components/ModalFooter";

/**
 * モーダルフッターコンテナコンポーネントです。
 */
const ModalFooterContainer: FC = () => {
  const isRegister = useRecoilValue<boolean>(isRegisterState);
  const isLogin = useRecoilValue<boolean>(isLoginState);

  return <ModalFooter isRegister={isRegister} isLogin={isLogin} />;
};

export default ModalFooterContainer;
