import { FC } from "react";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { UserCategoryState } from "../../../types";

/**
 * カテゴリ一覧コンポーネントの型定義
 *
 * @property {UserCategoryState[]} userCategoryList - ユーザー別カテゴリ一覧
 * @property {() => void} handleChoseAll - カテゴリ：全てクリック時に状態を更新するコールバック
 * @property {(item: UserCategoryState) => void} handleChoseCategory - カテゴリクリック時に状態を更新するコールバック
 */
type CategoryListProps = {
  userCategoryList: UserCategoryState[];
  handleChoseAll: () => void;
  handleChoseCategory: (item: UserCategoryState) => void;
};

/**
 * カテゴリ一覧コンポーネントです。
 *
 * @param {CategoryListProps} props
 */
const CategoryList: FC<CategoryListProps> = (props: CategoryListProps) => {
  const { userCategoryList, handleChoseAll, handleChoseCategory } = props;

  return (
    <List>
      <ListItem>
        <ListItemText primary="カテゴリ一覧" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={handleChoseAll}>
          <ListItemText secondary="全て" />
        </ListItemButton>
      </ListItem>
      {userCategoryList.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => handleChoseCategory(item)}>
            <ListItemText secondary={item.category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
