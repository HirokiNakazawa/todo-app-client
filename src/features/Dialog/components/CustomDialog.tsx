import { FC } from "react";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import DialogCloseContainer from "../containers/DialogCloseContainer";

/**
 * カスタムダイアログコンポーネントの型定義
 *
 * @property {boolean} isOpen - ダイアログ開閉フラグ
 * @property {string} title - ダイアログのタイトル
 * @property {string} text - ダイアログのテキスト
 */
type CustomDialogProps = {
  isOpen: boolean;
  title: string;
  text: string;
};

/**
 * カスタムダイアログコンポーネントです。
 *
 * @param {CustomDialogProps} props
 */
const CustomDialog: FC<CustomDialogProps> = (props: CustomDialogProps) => {
  const { isOpen, title, text } = props;

  const handleClick = () => {
    console.log("クリック");
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <DialogCloseContainer />
        <Button onClick={handleClick} color="error">
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
