import { FC } from "react";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { UserCategoryState } from "../../../types";

/**
 * カテゴリ一覧コンポーネントの型定義
 *
 * @property {UserCategoryState[]} userCategoryList - ユーザー別カテゴリ一覧
 */
type CategoryListProps = {
  userCategoryList: UserCategoryState[];
};

/**
 * カテゴリ一覧コンポーネントです。
 *
 * @param {CategoryListProps} props
 */
const CategoryList: FC<CategoryListProps> = (props: CategoryListProps) => {
  const { userCategoryList } = props;

  return (
    <List>
      <ListItem>
        <ListItemText primary="カテゴリ一覧" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText secondary="全て" />
        </ListItemButton>
      </ListItem>
      {userCategoryList.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton>
            <ListItemText secondary={item.category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
