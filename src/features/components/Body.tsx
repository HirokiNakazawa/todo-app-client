import { FC } from "react";

import SidebarContainer from "../Sidebar/containers/SidebarContainer";
import MainContainer from "../Main/containers/MainContainer";

/**
 * ボディコンポーネントの型定義
 *
 * @property {boolean} isLoggedIn - ユーザーログインフラグ
 */
type BodyProps = {
  isLoggedIn: boolean;
};

/**
 * ボディコンポーネントです。
 *
 * @param {BodyProps} props
 */
const Body: FC<BodyProps> = (props: BodyProps) => {
  const { isLoggedIn } = props;

  return (
    <>
      {isLoggedIn ? (
        <>
          <SidebarContainer />
          <MainContainer />
        </>
      ) : null}
    </>
  );
};

export default Body;
