import { FC } from "react";

import { ADD_BUTTON } from "../../../config/config";
import { CreateCategoryFunctions } from "../../../types";
import { useCreateCategory } from "../hooks/useCreateCategory";
import SidebarButton from "../components/SidebarButton";

/**
 * カテゴリ登録ボタンコンテナコンポーネントです。
 */
const CreateCategoryContainer: FC = () => {
  const createCategoryService: CreateCategoryFunctions = useCreateCategory();

  /**
   * クリック時にカテゴリを登録し、状態を更新するコールバック
   *
   * @returns {Promise<void>}
   */
  const handleCreateCategory = async (): Promise<void> => {
    console.log("カテゴリ追加ボタンがクリックされました");
    await createCategoryService.createCategory();
  };

  return <SidebarButton text={ADD_BUTTON} handleClick={handleCreateCategory} />;
};

export default CreateCategoryContainer;
