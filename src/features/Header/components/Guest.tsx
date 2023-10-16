import { FC } from "react";

import RegistrationContainer from "../../Authentication/containers/RegistartionContainer";
import LoginContainer from "../../Authentication/containers/LoginContainer";

/**
 * ログインしていない状態の認証領域コンポーネントです。
 */
const Guest: FC = () => {
  return (
    <>
      <RegistrationContainer />
      <LoginContainer />
    </>
  );
};

export default Guest;
