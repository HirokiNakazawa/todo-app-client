import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { authNameState } from "../../../recoil";
import InputAuthName from "../components/InputAuthName";

/**
 * 認証ユーザー名の入力フォームコンテナコンポーネントです。
 */
const InputAuthNameContainer: FC = () => {
  const [authName, setAuthName] = useRecoilState<string>(authNameState);

  /**
   * ユーザー名の変更を処理するコールバック
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setAuthName(e.target.value);
  };

  return <InputAuthName id="auth-name" name={authName} handleChange={handleChangeName} />;
};

export default InputAuthNameContainer;
