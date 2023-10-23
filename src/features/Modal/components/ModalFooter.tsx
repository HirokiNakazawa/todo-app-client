import { FC } from "react";

import { Box } from "@mui/material";

import ModalLoginContainer from "../containers/ModalLoginContainer";
import ModalRegistrationContainer from "../containers/ModalRegistrationContainer";
import ModalCloseContainer from "../containers/ModalCloseContainer";
import ModalCreateTodoContainer from "../containers/ModalCreateTodoContainer";

/**
 * モーダルフッターコンポーネントの型定義
 *
 * @property {boolean} isRegister - ユーザー登録フラグ
 * @property {boolean} isLogin - ログインフラグ
 * @property {boolean} isCreateTodo - タスク作成フラグ
 */
type ModalFooterProps = {
  isRegister: boolean;
  isLogin: boolean;
  isCreateTodo: boolean;
};

/**
 * モーダルフッターコンポーネントです。
 *
 * @param {ModalFooterProps} props
 */
const ModalFooter: FC<ModalFooterProps> = (props: ModalFooterProps) => {
  const { isRegister, isLogin, isCreateTodo } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", p: 2, gap: 2 }}>
      {isRegister ? <ModalRegistrationContainer /> : null}
      {isLogin ? <ModalLoginContainer /> : null}
      {isCreateTodo ? <ModalCreateTodoContainer /> : null}
      <ModalCloseContainer />
    </Box>
  );
};

export default ModalFooter;
