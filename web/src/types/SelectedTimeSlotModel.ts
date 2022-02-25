import TimeSlotModel from './TimeSlotModel';

type SelectedTimeSlotModel = {
  companyIndex: number;
  selected: TimeSlotModel | undefined;
};

export default SelectedTimeSlotModel;
