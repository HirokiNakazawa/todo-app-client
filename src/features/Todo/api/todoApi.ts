import axios from "axios";

import { PostCreateTodoResponse, TodoApiFunctions, TodoFormData } from "../../../types";
import { API_BASE_URL } from "../../../config/config";

/**
 * タスクに関するAPIをハンドリングするカスタムフックです。
 *
 * @returns {TodoApiFunctions} タスク関連のAPI関数を含むオブジェクト
 */
const todoApi = (): TodoApiFunctions => {
  /**
   * タスクを作成するAPI関数
   *
   * @param {TodoFormData} data - タスク情報
   * @returns {Promise<PostCreateTodoResponse>} タスク作成の結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const postCreateTodo = async (data: TodoFormData): Promise<PostCreateTodoResponse> => {
    try {
      const url = `${API_BASE_URL}/todos/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postCreateTodo };
};

export { todoApi };
