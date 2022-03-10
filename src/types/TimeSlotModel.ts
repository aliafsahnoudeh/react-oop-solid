type TimeSlotModel = {
  start: string;
  end: string;
  year: number;
  month: number;
  day: number;
  disabled: boolean;
  selected: boolean;
  startTimestamp: number;
  endTimestamp: number;
  date: Date;
  label: string | undefined;
};

export default TimeSlotModel;
