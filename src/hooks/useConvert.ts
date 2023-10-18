import { ConvertFunctions, PostAuthResponse, UserState } from "../types";

/**
 * APIレスポンスをコンバートし、Recoilアトムの方に変換するカスタムフックです。
 *
 * @returns {ConvertFunctions} コンバート関連の関数を含むオブジェクト
 */
const useConvert = (): ConvertFunctions => {
  /**
   * 認証レスポンスをコンバートする関数
   *
   * @param {PostAuthResponse} response - 認証レスポンスデータ
   * @returns {UserState}
   */
  const convertToUserState = (response: PostAuthResponse): UserState => {
    if ("message" in response) {
      return {
        id: 0,
        name: "",
        isLoggedIn: false,
      };
    } else {
      return {
        id: response.id,
        name: response.name,
        isLoggedIn: true,
      };
    }
  };

  return { convertToUserState };
};

export { useConvert };
