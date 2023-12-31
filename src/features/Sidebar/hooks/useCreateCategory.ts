import { useRecoilValue, useSetRecoilState } from "recoil";

import { CreateCategoryApiFunctions, CreateCategoryFunctions, UserState } from "../../../types";
import { sidebarCategoryState, sidebarErrorMsgState, userState } from "../../../recoil";
import { createCategoryApi } from "../api/createCategoryApi";

/**
 * カテゴリ登録に関するカスタムフックです。
 *
 * @returns {CreateCategoryFunctions} カテゴリ登録関連の関数を含むオブジェクト
 */
const useCreateCategory = (): CreateCategoryFunctions => {
  const user = useRecoilValue<UserState>(userState);
  const category = useRecoilValue<string>(sidebarCategoryState);

  const setSidebarErrorMsg = useSetRecoilState<string>(sidebarErrorMsgState);

  const apiService: CreateCategoryApiFunctions = createCategoryApi();

  /**
   * カテゴリ登録を行う関数
   *
   * @returns {Promise<void>}
   */
  const createCategory = async (): Promise<void> => {
    const data = { user_id: user.id, category: category };
    try {
      const response = await apiService.postCreateCategory(data);
      console.log(response);
    } catch (error) {
      console.log(error);
      setSidebarErrorMsg("カテゴリ追加に失敗しました");
    }
  };

  return { createCategory };
};

export { useCreateCategory };
