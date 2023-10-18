import { FC } from "react";

import { useRecoilValue } from "recoil";

import { sidebarErrorMsgState } from "../../../recoil";
import CategoryRegistration from "../components/CategoryRegistration";

/**
 * カテゴリ登録エリアコンテナコンポーネントです。
 */
const CategoryRegistrationContainer: FC = () => {
  const sidebarErrorMsg = useRecoilValue<string>(sidebarErrorMsgState);

  return <CategoryRegistration errorMsg={sidebarErrorMsg} />;
};

export default CategoryRegistrationContainer;
