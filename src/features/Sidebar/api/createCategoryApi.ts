import axios from "axios";

import { API_BASE_URL } from "../../../config/config";
import { CreateCategoryApiFunctions, CreateCategoryFormData, PostCreateCategoryResponse } from "../../../types";

/**
 * カテゴリ登録に関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {CreateCategoryApiFunctions} カテゴリ登録関連のAPI関数を含むオブジェクト
 */
const createCategoryApi = (): CreateCategoryApiFunctions => {
  /**
   * カテゴリを登録するAPI関数
   *
   * @param {CreateCategoryFormData} data - カテゴリ登録情報
   * @returns {Promise<PostCreateCategoryResponse>} カテゴリ登録の結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const postCreateCategory = async (data: CreateCategoryFormData): Promise<PostCreateCategoryResponse> => {
    try {
      const url = `${API_BASE_URL}/categories/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postCreateCategory };
};

export { createCategoryApi };
