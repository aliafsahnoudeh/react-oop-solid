import TimeSlotModel from './TimeSlotModel';

type GroupModel = {
  dayLabel: string;
  date: Date;
  timeSlots: TimeSlotModel[];
};

export default GroupModel;
