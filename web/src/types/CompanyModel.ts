import TimeSlotModel from './TimeSlotModel';

type Company = {
  id: number;
  name: String;
  type: String;
  time_slots: Array<TimeSlotModel>;
};

export default Company;
