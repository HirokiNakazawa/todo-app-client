import { FC } from "react";

import { Box, FormControl } from "@mui/material";

import InputAuthNameContainer from "../../Authentication/containers/InputAuthNameContainer";
import InputAuthPasswordContainer from "../../Authentication/containers/InputAuthPasswordContainer";

/**
 * 認証用のモーダルコンポーネントです。
 */
const ModalAuthContent: FC = () => {
  return (
    <FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <InputAuthNameContainer />
        <InputAuthPasswordContainer />
      </Box>
    </FormControl>
  );
};

export default ModalAuthContent;
