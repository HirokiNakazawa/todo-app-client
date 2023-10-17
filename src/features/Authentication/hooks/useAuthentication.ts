import { useRecoilValue, useSetRecoilState } from "recoil";

import { AuthApiFunctions, AuthenticationFunctions, PostAuthResponse, ResetFunctions, UserState } from "../../../types";
import { authNameState, authPasswordState, modalErrorMsgState, userState } from "../../../recoil";
import { authApi } from "../api/authApi";
import { useReset } from "../../../hooks/useReset";

/**
 * ユーザー認証に関するカスタムフックです。
 *
 * @returns {AuthenticationFunctions} ユーザー認証関連の関数を含むオブジェクト
 */
const useAuthentication = (): AuthenticationFunctions => {
  const authName = useRecoilValue<string>(authNameState);
  const authPassword = useRecoilValue<string>(authPasswordState);
  const setModalErrorMsg = useSetRecoilState<string>(modalErrorMsgState);
  const setUser = useSetRecoilState<UserState>(userState);

  const apiService: AuthApiFunctions = authApi();
  const resetService: ResetFunctions = useReset();

  /**
   * ユーザー登録を行う関数
   *
   * @returns {Promise<void>}
   */
  const register = async (): Promise<void> => {
    const data = { name: authName, password: authPassword };
    try {
      const response = await apiService.postRegister(data);
      console.log(response);
      handleAuthentication(response);
    } catch (error) {
      console.log(error);
      setModalErrorMsg("ユーザー登録に失敗しました");
    }
  };

  /**
   * ユーザーログインを行う関数
   *
   * @returns {Promise<void>}
   */
  const login = async (): Promise<void> => {
    const data = { name: authName, password: authPassword };
    try {
      const response = await apiService.postLogin(data);
      console.log(response);
      handleAuthentication(response);
    } catch (error) {
      console.log(error);
      setModalErrorMsg("ログインに失敗しました");
    }
  };

  /**
   * ユーザー登録・ログインに成功した場合に実行される関数
   *
   * @param {PostAuthResponse} response - ユーザー情報
   * @returns {void}
   */
  const handleAuthentication = (response: PostAuthResponse): void => {
    setUserInfomation(response);

    resetService.resetModalParams();
    resetService.resetAuthenticationParams();
  };

  /**
   * ユーザー情報をRecoilアトムに格納する関数
   *
   * @param {PostAuthResponse} response - ユーザー情報
   * @returns {void}
   */
  const setUserInfomation = (response: PostAuthResponse): void => {
    setUser({
      id: response.id,
      name: response.name,
      isLoggedIn: true,
    });
  };

  return { register, login };
};

export { useAuthentication };
