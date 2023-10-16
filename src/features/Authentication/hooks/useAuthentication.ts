import { useRecoilValue, useSetRecoilState } from "recoil";

import { AuthApiFunctions, AuthenticationFunctions } from "../../../types";
import { authNameState, authPasswordState, modalErrorMsgState } from "../../../recoil";
import { authApi } from "../api/authApi";

/**
 * ユーザー認証に関するカスタムフックです。
 *
 * @returns {AuthenticationFunctions} ユーザー認証関連の関数を含むオブジェクト
 */
const useAuthentication = (): AuthenticationFunctions => {
  const authName = useRecoilValue<string>(authNameState);
  const authPassword = useRecoilValue<string>(authPasswordState);
  const setModalErrorMsg = useSetRecoilState<string>(modalErrorMsgState);

  const apiService: AuthApiFunctions = authApi();

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
    } catch (error) {
      console.log(error);
      setModalErrorMsg("ログインに失敗しました");
    }
  };

  return { register, login };
};

export { useAuthentication };
