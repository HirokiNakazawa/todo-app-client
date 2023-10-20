import { FC } from "react";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { UserCategoryState } from "../../../types";

/**
 * カテゴリのセレクトボックスコンポーネントの型定義
 *
 * @property {string} id - セレクトボックスの固有ID
 * @property {string} labelId - セレクトボックスのラベルID
 * @property {string} labelName - セレクトボックスのラベル名
 * @property {string} category - カテゴリ名
 * @property {UserCategoryState[]} categoryList - カテゴリ一覧
 * @property {(e: SelectChangeEvent<string>) => void} handleChange - 選択時に発火するコールバック
 */
type SelectCategoryProps = {
  id: string;
  labelId: string;
  labelName: string;
  category: string;
  categoryList: UserCategoryState[];
  handleChange: (e: SelectChangeEvent<string>) => void;
};

/**
 * カテゴリのセレクトボックスコンポーネントです。
 *
 * @param {SelectCategoryProps} props
 */
const SelectCategory: FC<SelectCategoryProps> = (props: SelectCategoryProps) => {
  const { id, labelId, labelName, category, categoryList, handleChange } = props;

  return (
    <FormControl>
      <InputLabel id={labelId}>{labelName}</InputLabel>
      <Select id={id} labelId={labelId} label="カテゴリ" name="category" value={category} onChange={handleChange}>
        {categoryList.map((item) => (
          <MenuItem key={item.id} value={item.category}>
            {item.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
