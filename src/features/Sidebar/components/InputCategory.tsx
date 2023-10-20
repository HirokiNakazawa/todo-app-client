import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

/**
 * カテゴリの入力フォームコンポーネントの型定義
 *
 * @property {string} id - テキストフィールドの固有ID
 * @property {string} category - カテゴリ
 * @property {(e: ChangeEvent<HTMLInputElement> => void)} handleChange - 入力時に発火するコールバック
 */
type InputCategoryProps = {
  id: string;
  category: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * カテゴリの入力フォームコンポーネントです。
 *
 * @param {InputCategoryProps} props
 */
const InputCategory: FC<InputCategoryProps> = (props: InputCategoryProps) => {
  const { id, category, handleChange } = props;

  return (
    <TextField id={id} label="カテゴリ" type="text" name="category" value={category} onChange={handleChange} required />
  );
};

export default InputCategory;
