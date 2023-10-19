import axios from "axios";

import { API_BASE_URL } from "../config/config";
import { ApiFunctions, GetUserCategoryListResponse } from "../types";

/**
 * 汎用API関数をハンドリングするカスタムフックです。
 *
 * @returns {ApiFunctions} 汎用API関数を含むオブジェクト
 */
const useApi = (): ApiFunctions => {
  /**
   * ユーザー別カテゴリ一覧を取得する関数
   *
   * @param {number} id - ユーザーID
   * @returns {Promise<GetUserCategoryListResponse[]>} カテゴリ一覧取得の結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const getUserCategoryList = async (id: number): Promise<GetUserCategoryListResponse[]> => {
    try {
      const url = `${API_BASE_URL}/categories/${id}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { getUserCategoryList };
};

export { useApi };
