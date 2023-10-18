import { FC } from "react";

import { ADD_BUTTON } from "../../../config/config";
import SidebarButton from "../components/SidebarButton";

/**
 * カテゴリ登録ボタンコンテナコンポーネントです。
 */
const CreateCategoryContainer: FC = () => {
  /**
   * クリック時にカテゴリを登録し、状態を更新するコールバック
   *
   * @returns {Promise<void>}
   */
  const handleCreateCategory = async (): Promise<void> => {
    console.log("カテゴリ追加ボタンがクリックされました");
  };

  return <SidebarButton text={ADD_BUTTON} handleClick={handleCreateCategory} />;
};

export default CreateCategoryContainer;
