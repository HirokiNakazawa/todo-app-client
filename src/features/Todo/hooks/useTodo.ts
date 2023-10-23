import { useRecoilValue, useSetRecoilState } from "recoil";
import dayjs from "dayjs";

import {
  ResetFunctions,
  TodoApiFunctions,
  TodoFunctions,
  UpdateFunctions,
  UserCategoryState,
  UserState,
} from "../../../types";
import {
  limitDateState,
  mainCategoryState,
  modalErrorMsgState,
  todoState,
  userCategoryListState,
  userState,
} from "../../../recoil";
import { todoApi } from "../api/todoApi";
import { useReset } from "../../../hooks/useReset";
import { useUpdate } from "../../../hooks/useUpdate";

/**
 * タスクに関するカスタムフックです。
 *
 * @returns {TodoFunctions} タスク関連の関数を含むオブジェクト
 */
const useTodo = (): TodoFunctions => {
  const user = useRecoilValue<UserState>(userState);
  const categoryList = useRecoilValue<UserCategoryState[]>(userCategoryListState);
  const category = useRecoilValue<string>(mainCategoryState);
  const todo = useRecoilValue<string>(todoState);
  const limitDate = useRecoilValue<Date | null>(limitDateState);

  const setModalErrorMsg = useSetRecoilState<string>(modalErrorMsgState);

  const apiService: TodoApiFunctions = todoApi();
  const resetService: ResetFunctions = useReset();
  const updateService: UpdateFunctions = useUpdate();

  /**
   * タスク作成を行う関数
   *
   * @returns {Promise<void>}
   */
  const createTodo = async (): Promise<void> => {
    try {
      const selectedCategory = categoryList.find((item) => item.category === category);
      if (selectedCategory?.id) {
        const data = {
          user_id: user.id,
          category_id: selectedCategory?.id,
          todo: todo,
          limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
          is_completed: false,
        };
        const response = apiService.postCreateTodo(data);
        console.log(response);
        handleTodo();
      } else {
        console.log("カテゴリが存在しません");
      }
    } catch (error) {
      console.log(error);
      setModalErrorMsg("タスク作成に失敗しました");
    }
  };

  /**
   * タスク作成、編集に成功した場合に実行される関数
   *
   * @returns {Promise<void>}
   */
  const handleTodo = async (): Promise<void> => {
    resetService.resetModalParams();
    resetService.resetTodoParams();

    await updateService.updateUserTodoList(user.id);
  };

  return { createTodo };
};

export { useTodo };
