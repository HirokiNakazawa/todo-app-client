import { ChangeEvent, FC } from "react";

import { useRecoilState } from "recoil";

import { sidebarCategoryState } from "../../../recoil";
import InputCategory from "../components/InputCategory";

/**
 * カテゴリの入力フォームコンテナコンポーネントです。
 */
const InputCategoryContainer: FC = () => {
  const [category, setCategory] = useRecoilState<string>(sidebarCategoryState);

  /**
   * カテゴリの変更を処理するコールバック
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>): void => {
    setCategory(e.target.value);
  };

  return <InputCategory id="sidebar-category" category={category} handleChange={handleChangeCategory} />;
};

export default InputCategoryContainer;
