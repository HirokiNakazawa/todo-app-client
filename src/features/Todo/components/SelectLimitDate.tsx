import { FC } from "react";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

/**
 * 期限日付のDatePickerコンポーネントの型定義
 *
 * @property {string} label - DatePickerのラベル名
 * @property {Date | null} date - 日付
 * @property {(date: Date | null) => void} handleChange - 日付選択時に発火するコールバック
 */
type SelectLimistDateProps = {
  label: string;
  date: Date | null;
  handleChange: (date: Date | null) => void;
};

/**
 * 期限日付のDatePickerコンポーネントです。
 *
 * @param {SelectLimistDateProps} props
 */
const SelectLimitDate: FC<SelectLimistDateProps> = (props: SelectLimistDateProps) => {
  const { label, date, handleChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <DatePicker label={label} value={date} onChange={handleChange} />
    </LocalizationProvider>
  );
};

export default SelectLimitDate;
