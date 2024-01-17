import { FC } from "react";

import { Box } from "@mui/material";

import ModalLoginContainer from "../containers/ModalLoginContainer";
import ModalRegistrationContainer from "../containers/ModalRegistrationContainer";
import ModalCloseContainer from "../containers/ModalCloseContainer";
import ModalCreateTodoContainer from "../containers/ModalCreateTodoContainer";
import ModalUpdateTodoContainer from "../containers/ModalUpdateTodoContainer";

/**
 * モーダルフッターコンポーネントの型定義
 *
 * @property {boolean} isRegister - ユーザー登録フラグ
 * @property {boolean} isLogin - ログインフラグ
 * @property {boolean} isCreateTodo - タスク作成フラグ
 * @property {boolean} isUpdateTodo - タスク更新フラグ
 */
type ModalFooterProps = {
  isRegister: boolean;
  isLogin: boolean;
  isCreateTodo: boolean;
  isUpdateTodo: boolean;
};

/**
 * モーダルフッターコンポーネントです。
 *
 * @param {ModalFooterProps} props
 */
const ModalFooter: FC<ModalFooterProps> = (props: ModalFooterProps) => {
  const { isRegister, isLogin, isCreateTodo, isUpdateTodo } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", p: 2, gap: 2 }}>
      {isRegister ? <ModalRegistrationContainer /> : null}
      {isLogin ? <ModalLoginContainer /> : null}
      {isCreateTodo ? <ModalCreateTodoContainer /> : null}
      {isUpdateTodo ? <ModalUpdateTodoContainer /> : null}
      <ModalCloseContainer />
    </Box>
  );
};

export default ModalFooter;
