import { FC } from "react";

import { RecoilRoot } from "recoil";
import ModalContainer from "./features/Modal/containers/ModalContainer";
import HeaderContainer from "./features/Header/containers/HeaderContainer";

const App: FC = () => {
  return (
    <>
      <RecoilRoot>
        <ModalContainer />
        <HeaderContainer />
      </RecoilRoot>
    </>
  );
};

export default App;
