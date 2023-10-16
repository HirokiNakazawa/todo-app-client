import { FC } from "react";

import { RecoilRoot } from "recoil";
import HeaderContainer from "./features/Header/containers/HeaderContainer";

const App: FC = () => {
  return (
    <>
      <RecoilRoot>
        <HeaderContainer />
      </RecoilRoot>
    </>
  );
};

export default App;
