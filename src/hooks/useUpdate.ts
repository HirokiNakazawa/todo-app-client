import { useSetRecoilState } from "recoil";

import { ApiFunctions, UpdateFunctions, UserCategoryState } from "../types";
import { userCategoryListState } from "../recoil";
import { useApi } from "./useApi";

/**
 * 状態の更新に関するカスタムフックです。
 *
 * @returns {UpdateFunctions} 状態の更新関連の関数を含むオブジェクト
 */
const useUpdate = (): UpdateFunctions => {
  const setUserCategoryList = useSetRecoilState<UserCategoryState[]>(userCategoryListState);

  const apiService: ApiFunctions = useApi();

  /**
   * ユーザー毎のカテゴリ一覧を更新する関数
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

  return { updateUserCategoryList };
};

export { useUpdate };
