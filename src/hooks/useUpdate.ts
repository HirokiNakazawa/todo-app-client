import { useSetRecoilState } from "recoil";

import { ApiFunctions, ConvertFunctions, UpdateFunctions, UserCategoryState, UserTodoState } from "../types";
import { userCategoryListState, userTodoListState } from "../recoil";
import { useApi } from "./useApi";
import { useConvert } from "./useConvert";

/**
 * 状態の更新に関するカスタムフックです。
 *
 * @returns {UpdateFunctions} 状態の更新関連の関数を含むオブジェクト
 */
const useUpdate = (): UpdateFunctions => {
  const setUserCategoryList = useSetRecoilState<UserCategoryState[]>(userCategoryListState);
  const setUserTodoList = useSetRecoilState<UserTodoState[]>(userTodoListState);

  const apiService: ApiFunctions = useApi();
  const convertService: ConvertFunctions = useConvert();

  /**
   * ユーザー別カテゴリ一覧を更新する関数
   *
   * @param {number} id - ログインユーザーのID
   * @returns {Promise<void>}
   */
  const updateUserCategoryList = async (id: number): Promise<void> => {
    try {
      const response = await apiService.getUserCategoryList(id);
      console.log(response);
      setUserCategoryList(response);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * ユーザー別タスク一覧を更新する関数
   *
   * @param {number} id - ログインユーザーのID
   * @returns {Promise<void>}
   */
  const updateUserTodoList = async (id: number): Promise<void> => {
    try {
      const response = await apiService.getUserTodoList(id);
      console.log(response);
      setUserTodoList(convertService.convertToUserTodoState(response));
    } catch (error) {
      console.log(error);
    }
  };

  return { updateUserCategoryList, updateUserTodoList };
};

export { useUpdate };
