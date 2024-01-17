import { FC } from "react";

import { useSetRecoilState } from "recoil";
import dayjs from "dayjs";

import { ModalState, UserTodoState } from "../../../types";
import {
  isUpdateTodoState,
  limitDateState,
  mainCategoryState,
  modalState,
  todoIdState,
  todoState,
} from "../../../recoil";
import UpdateTodoButton from "../components/UpdateTodoButton";

/**
 * タスク編集ボタンコンテナコンポーネントの型定義
 *
 * @property {UserTodoState} todo - 更新対象のタスク
 */
type UpdateTodoContainerProps = {
  todo: UserTodoState;
};

/**
 * タスク編集ボタンコンテナコンポーネントです。
 *
 * @param {UpdateTodoContainerProps} props
 */
const UpdateTodoContainer: FC<UpdateTodoContainerProps> = (props: UpdateTodoContainerProps) => {
  const { todo } = props;

  const setTodoId = useSetRecoilState<number>(todoIdState);
  const setCategory = useSetRecoilState<string>(mainCategoryState);
  const setTodo = useSetRecoilState<string>(todoState);
  const setLimitDate = useSetRecoilState<Date | null>(limitDateState);
  const setModal = useSetRecoilState<ModalState>(modalState);
  const setIsUpdateTodo = useSetRecoilState<boolean>(isUpdateTodoState);

  /**
   * クリック時に状態を更新するコールバック
   *
   * @returns {void}
   */
  const handleUpdateTodo = (): void => {
    console.log(todo);
    console.log("タスク編集ボタンがクリックされました");
    setTodoId(todo.id);
    setCategory(todo.category);
    setTodo(todo.todo);
    setLimitDate(todo.limitDate ? dayjs(todo.limitDate).toDate() : null);
    setModal({
      isOpen: true,
      title: "タスク編集",
      buttonText: "更新",
    });
    setIsUpdateTodo(true);
  };

  return <UpdateTodoButton handleClick={handleUpdateTodo} />;
};

export default UpdateTodoContainer;
