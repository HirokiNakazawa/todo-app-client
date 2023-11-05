import { FC } from "react";

import { RecoilRoot } from "recoil";
import { Box, CssBaseline } from "@mui/material";

import ModalContainer from "./features/Modal/containers/ModalContainer";
import DialogContainer from "./features/Dialog/containers/DialogContainer";
import HeaderContainer from "./features/Header/containers/HeaderContainer";
import BodyContainer from "./features/containers/BodyContainer";

const App: FC = () => {
  return (
    <RecoilRoot>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <ModalContainer />
        <DialogContainer />
        <HeaderContainer />
        <BodyContainer />
      </Box>
    </RecoilRoot>
  );
};

export default App;
