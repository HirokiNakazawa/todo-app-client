import { Box, FormControl } from "@mui/material";
import { FC } from "react";
import InputTodoContainer from "../../Todo/containers/InputTodoContainer";

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
        <InputTodoContainer />
      </Box>
    </FormControl>
  );
};

export default ModalTodoContent;
