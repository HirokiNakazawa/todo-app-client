import { FC } from "react";

import { Box, FormControl } from "@mui/material";

import SelectCategoryContainer from "../../Todo/containers/SelectCategoryContainer";
import InputTodoContainer from "../../Todo/containers/InputTodoContainer";
import SelectLimitDateContainer from "../../Todo/containers/SelectLimitDateContainer";

/**
 * タスク用のモーダルコンポーネントです。
 */
const ModalTodoContent: FC = () => {
  return (
    <FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: 2,
        }}
      >
        <SelectCategoryContainer />
        <InputTodoContainer />
        <SelectLimitDateContainer />
      </Box>
    </FormControl>
  );
};

export default ModalTodoContent;
