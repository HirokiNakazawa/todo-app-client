import { FC } from "react";

import { Box, FormControl, Typography } from "@mui/material";

/**
 * カテゴリ登録エリアコンポーネントの型定義
 *
 * @property {string} errorMsg - サイドバーのエラーメッセージ
 */
type CategoryRegistrationProps = {
  errorMsg: string;
};

/**
 * カテゴリ登録エリアコンポーネントです。
 *
 * @param {CategoryRegistrationProps} props
 */
const CategoryRegistration: FC<CategoryRegistrationProps> = (props: CategoryRegistrationProps) => {
  const { errorMsg } = props;

  return (
    <FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderBottom: "1px solid gray",
          p: 2,
          gap: 2,
          width: 298,
        }}
      >
        <Typography variant="h6">カテゴリ追加</Typography>
        <Typography variant="h6" color="red">
          {errorMsg}
        </Typography>
      </Box>
    </FormControl>
  );
};

export default CategoryRegistration;
