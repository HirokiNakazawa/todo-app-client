import { FC } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { mainCategoryState, userCategoryListState } from "../../../recoil";
import { SelectChangeEvent } from "@mui/material";
import { UserCategoryState } from "../../../types";
import SelectCategory from "../components/SelectCategory";

/**
 * カテゴリのセレクトボックスコンテナコンポーネントです。
 */
const SelectCategoryContainer: FC = () => {
  const [category, setCategory] = useRecoilState<string>(mainCategoryState);
  const categoryList = useRecoilValue<UserCategoryState[]>(userCategoryListState);

  /**
   * カテゴリの変更を処理するコールバック
   *
   * @param {SelectChangeEvent<string>} e
   * @returns {void}
   */
  const handleChangeCategory = (e: SelectChangeEvent<string>): void => {
    setCategory(e.target.value);
  };

  return (
    <SelectCategory
      id="select-category"
      labelId="select-category-label"
      labelName="カテゴリ"
      category={category}
      categoryList={categoryList}
      handleChange={handleChangeCategory}
    />
  );
};

export default SelectCategoryContainer;
