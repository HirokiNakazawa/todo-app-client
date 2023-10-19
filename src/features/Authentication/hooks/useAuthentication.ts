import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  AuthApiFunctions,
  AuthenticationFunctions,
  ConvertFunctions,
  PostAuthResponse,
  ResetFunctions,
  UpdateFunctions,
  UserState,
} from "../../../types";
import { authNameState, authPasswordState, modalErrorMsgState, userState } from "../../../recoil";
import { authApi } from "../api/authApi";
import { useReset } from "../../../hooks/useReset";
import { useConvert } from "../../../hooks/useConvert";
import { useUpdate } from "../../../hooks/useUpdate";

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
  const updateService: UpdateFunctions = useUpdate();
  const resetService: ResetFunctions = useReset();
  const convertService: ConvertFunctions = useConvert();

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
   * @param {PostAuthResponse} response - 認証APIレスポンス
   * @returns {Promise<void>}
   */
  const handleAuthentication = async (response: PostAuthResponse): Promise<void> => {
    const userData = convertService.convertToUserState(response);
    if (userData.id !== 0) {
      setUser(userData);

      resetService.resetModalParams();
      resetService.resetAuthenticationParams();

      await fetchData(userData);
    }
  };

  /**
   * ログインに成功後、アプリで使用する情報をRecoilアトムに格納する関数
   *
   * @param {UserState} user - ユーザー情報
   * @returns {Promise<void>}
   */
  const fetchData = async (user: UserState): Promise<void> => {
    await updateService.updateUserCategoryList(user.id);
  };

  return { register, login };
};

export { useAuthentication };
