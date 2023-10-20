import { FC } from "react";

import { Box, Modal } from "@mui/material";

import ModalHeaderContainer from "../containers/ModalHeaderContainer";
import ModalFooterContainer from "../containers/ModalFooterContainer";
import ModalAuthContent from "./ModalAuthContent";
import ModalTodoContent from "./ModalTodoContent";

/**
 * カスタムモーダルコンポーネントの型定義
 *
 * @property {boolean} isOpen - モーダル開閉フラグ
 * @property {boolean} isRegister - ユーザー登録フラグ
 * @property {boolean} isLogin - ログインフラグ
 * @property {boolean} isCreateTodo - タスク作成フラグ
 */
type CustomModalProps = {
  isOpen: boolean;
  isRegister: boolean;
  isLogin: boolean;
  isCreateTodo: boolean;
};

/**
 * カスタムモーダルコンポーネントです。
 *
 * @param {CustomModalProps} props
 */
const CustomModal: FC<CustomModalProps> = (props: CustomModalProps) => {
  const { isOpen, isRegister, isLogin, isCreateTodo } = props;

  return (
    <Modal open={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          width: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 5,
            p: 2,
            gap: 2,
          }}
        >
          <ModalHeaderContainer />
          {isRegister || isLogin ? <ModalAuthContent /> : null}
          {isCreateTodo ? <ModalTodoContent /> : null}
          <ModalFooterContainer />
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
