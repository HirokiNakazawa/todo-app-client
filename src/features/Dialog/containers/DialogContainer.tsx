import { FC } from "react";

import { useRecoilValue } from "recoil";

import { DialogState } from "../../../types";
import { dialogState } from "../../../recoil/dialogState";
import CustomDialog from "../components/CustomDialog";

/**
 * ダイアログコンテナコンポーネントです。
 */
const DialogContainer: FC = () => {
  const dialog = useRecoilValue<DialogState>(dialogState);

  return <CustomDialog isOpen={dialog.isOpen} title={dialog.title} text={dialog.text} />;
};

export default DialogContainer;
