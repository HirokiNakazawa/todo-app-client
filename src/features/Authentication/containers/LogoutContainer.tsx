import { FC } from "react";

import { useSetRecoilState } from "recoil";

import { LOGOUT_BUTTON } from "../../../config/config";
import { UserState } from "../../../types";
import { userState } from "../../../recoil";
import AuthenticationButton from "../components/AuthenticationButton";

/**
 * 認証領域のログアウトボタンコンテナコンポーネントです。
 */
const LogoutContainer: FC = () => {
  const setUser = useSetRecoilState<UserState>(userState);

  /**
   * クリック時にユーザーの状態を処理するコールバック
   *
   * @returns {void}
   */
  const handleSetState = (): void => {
    console.log("ログアウトがクリックされました");
    setUser({ id: 0, name: "", isLoggedIn: false });
  };

  return <AuthenticationButton text={LOGOUT_BUTTON} handleClick={handleSetState} />;
};

export default LogoutContainer;
