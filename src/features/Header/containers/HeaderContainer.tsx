import { FC } from "react";

import { useRecoilValue } from "recoil";

import { UserState } from "../../../types";
import { userState } from "../../../recoil";
import Header from "../components/Header";

/**
 * ヘッダーコンテナコンポーネントです。
 */
const HeaderContainer: FC = () => {
  const user = useRecoilValue<UserState>(userState);

  return <Header name={user.name} isLoggedIn={user.isLoggedIn} />;
};

export default HeaderContainer;
