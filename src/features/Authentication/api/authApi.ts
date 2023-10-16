import axios from "axios";

import { AuthApiFunctions, AuthFormData, PostAuthResponse } from "../../../types";
import { API_BASE_URL } from "../../../config/config";

/**
 * ユーザー認証に関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {AuthApiFunctions} ユーザー認証関連のAPI関数を含むオブジェクト
 */
const authApi = (): AuthApiFunctions => {
  /**
   * ユーザーを登録するAPI関数
   *
   * @param {AuthFormData} data - ユーザー登録情報
   * @returns {Promise<PostAuthResponse>} ユーザー登録の結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const postRegister = async (data: AuthFormData): Promise<PostAuthResponse> => {
    try {
      const url = `${API_BASE_URL}/register`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * ユーザーログインを行うAPI関数
   *
   * @param {AuthFormData} data - 認証情報
   * @returns {Promise<PostAuthResponse>} ログインの結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const postLogin = async (data: AuthFormData): Promise<PostAuthResponse> => {
    try {
      const url = `${API_BASE_URL}/login`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postRegister, postLogin };
};

export { authApi };
