import { FC } from "react";

import { Box } from "@mui/material";

import ModalLoginContainer from "../containers/ModalLoginContainer";
import ModalRegistrationContainer from "../containers/ModalRegistrationContainer";
import ModalCloseContainer from "../containers/ModalCloseContainer";

/**
 * モーダルフッターコンポーネントの型定義
 *
 * @property {boolean} isRegister - ユーザー登録フラグ
 * @property {boolean} isLogin - ログインフラグ
 */
type ModalFooterProps = {
  isRegister: boolean;
  isLogin: boolean;
};

/**
 * モーダルフッターコンポーネントです。
 *
 * @param {ModalFooterProps} props
 */
const ModalFooter: FC<ModalFooterProps> = (props: ModalFooterProps) => {
  const { isRegister, isLogin } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", p: 2, gap: 2 }}>
      {isRegister ? <ModalRegistrationContainer /> : null}
      {isLogin ? <ModalLoginContainer /> : null}
      <ModalCloseContainer />
    </Box>
  );
};

export default ModalFooter;
