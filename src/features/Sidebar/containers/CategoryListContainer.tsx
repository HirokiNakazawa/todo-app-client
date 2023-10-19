import { FC } from "react";

import { useRecoilValue } from "recoil";

import { UserCategoryState } from "../../../types";
import { userCategoryListState } from "../../../recoil";
import CategoryList from "../components/CategoryList";

/**
 * カテゴリ一覧コンテナコンポーネントです。
 */
const CategoryListContainer: FC = () => {
  const userCategoryList = useRecoilValue<UserCategoryState[]>(userCategoryListState);

  return <CategoryList userCategoryList={userCategoryList} />;
};

export default CategoryListContainer;
