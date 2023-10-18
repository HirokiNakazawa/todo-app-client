import { FC } from "react";

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

  return <>{isLoggedIn ? <>Hello world</> : null}</>;
};

export default Body;
