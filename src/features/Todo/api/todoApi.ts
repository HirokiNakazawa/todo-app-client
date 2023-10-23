import axios from "axios";

import { API_BASE_URL } from "../../../config/config";
import { PostCreateTodoResponse, PostUpdateTodoResponse, TodoApiFunctions, TodoFormData } from "../../../types";

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

  /**
   * タスクを更新するAPI関数
   *
   * @param {TodoFormData} data - タスク情報
   * @returns {Promise<PostUpdateTodoResponse>} タスク更新の結果を表すPromise
   * @throws {Error} API呼び出し時のエラー
   */
  const postUpdateTodo = async (data: TodoFormData): Promise<PostUpdateTodoResponse> => {
    try {
      const url = `${API_BASE_URL}/todos/update/${data.id}`;
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { postCreateTodo, postUpdateTodo };
};

export { todoApi };
