import { FC } from "react";

import { useRecoilValue } from "recoil";

import { UserState } from "../../types";
import { userState } from "../../recoil";
import Body from "../components/Body";

/**
 * ボディコンテナコンポーネントです。
 */
const BodyContainer: FC = () => {
  const user = useRecoilValue<UserState>(userState);

  return <Body isLoggedIn={user.isLoggedIn} />;
};

export default BodyContainer;
