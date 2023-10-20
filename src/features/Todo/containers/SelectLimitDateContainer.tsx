import { FC } from "react";

import { useRecoilState } from "recoil";

import { limitDateState } from "../../../recoil";
import SelectLimitDate from "../components/SelectLimitDate";

/**
 * 期限日付のDatePicklerコンテナコンポーネントです。
 */
const SelectLimitDateContainer: FC = () => {
  const [limitDate, setLimitDate] = useRecoilState<Date | null>(limitDateState);

  /**
   * 期限日付の変更を処理するコールバック関数
   *
   * @param {Date | null} date
   * @returns {void}
   */
  const handleChangeDate = (date: Date | null): void => {
    setLimitDate(date);
  };

  return <SelectLimitDate label="期限" date={limitDate} handleChange={handleChangeDate} />;
};

export default SelectLimitDateContainer;
