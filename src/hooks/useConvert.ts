import { ConvertFunctions, GetUserTodoListResponse, PostAuthResponse, UserState, UserTodoState } from "../types";

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

  /**
   * ユーザー別タスク一覧レスポンスをコンバートする関数
   *
   * @param {GetUserTodoListResponse[]} response - ユーザー別タスク一覧レスポンスデータ
   * @returns {UserTodoState[]}
   */
  const convertToUserTodoState = (response: GetUserTodoListResponse[]): UserTodoState[] => {
    const userTodoList: UserTodoState[] = [];
    response.map((item) =>
      userTodoList.push({
        id: item.id,
        categoryId: item.category_id,
        todo: item.todo,
        limitDate: item.limit_date,
        isCompleted: item.is_completed,
        category: item.category,
      })
    );
    return userTodoList;
  };

  return { convertToUserState, convertToUserTodoState };
};

export { useConvert };
