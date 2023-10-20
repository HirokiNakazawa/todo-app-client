import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { authPasswordState } from "../../../recoil";
import InputAuthPassword from "../components/InputAuthPassword";

/**
 * 認証パスワードの入力フォームコンテナコンポーネントです。
 */
const InputAuthPasswordContainer: FC = () => {
  const [authPassword, setAuthPassword] = useRecoilState<string>(authPasswordState);

  /**
   * パスワードの変更を処理するコールバック
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setAuthPassword(e.target.value);
  };

  return <InputAuthPassword id="auth-password" password={authPassword} handleChange={handleChangePassword} />;
};

export default InputAuthPasswordContainer;
