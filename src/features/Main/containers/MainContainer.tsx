import { FC, useEffect, useState } from "react";

import { useRecoilValue } from "recoil";

import { UserTodoState } from "../../../types";
import { userTodoListState } from "../../../recoil";
import Main from "../components/Main";

const MainContainer: FC = () => {
  const userTodoList = useRecoilValue<UserTodoState[]>(userTodoListState);

  const [inCompletedTodoList, setInCompletedTodoList] = useState<UserTodoState[]>([]);
  const [completedTodoList, setCompletedTodoList] = useState<UserTodoState[]>([]);

  useEffect(() => {
    const inCompleted = userTodoList.filter((todo) => !todo.isCompleted);
    const completed = userTodoList.filter((todo) => todo.isCompleted);
    setInCompletedTodoList(inCompleted);
    setCompletedTodoList(completed);
  }, [userTodoList]);

  return <Main completedTodoList={completedTodoList} inCompletedTodoList={inCompletedTodoList} />;
};

export default MainContainer;
