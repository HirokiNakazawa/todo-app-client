import { FC } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { CurrentCategoryState, UserCategoryState } from "../../../types";
import { currentCategoryState, userCategoryListState } from "../../../recoil";
import CategoryList from "../components/CategoryList";

/**
 * カテゴリ一覧コンテナコンポーネントです。
 */
const CategoryListContainer: FC = () => {
  const userCategoryList = useRecoilValue<UserCategoryState[]>(userCategoryListState);
  const setCurrentCategory = useSetRecoilState<CurrentCategoryState>(currentCategoryState);

  /**
   * カテゴリ：全てクリック時に状態を更新するコールバック
   *
   * @returns {void}
   */
  const handleChoseAll = (): void => {
    setCurrentCategory({
      id: 0,
      name: "全て",
    });
  };

  /**
   * カテゴリクリック時に状態を更新するコールバック
   *
   * @returns {void}
   */
  const handleChoseCategory = (item: UserCategoryState): void => {
    setCurrentCategory({
      id: item.id,
      name: item.category,
    });
  };

  return (
    <CategoryList
      userCategoryList={userCategoryList}
      handleChoseAll={handleChoseAll}
      handleChoseCategory={handleChoseCategory}
    />
  );
};

export default CategoryListContainer;
