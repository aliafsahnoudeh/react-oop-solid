import GroupModel from './GroupModel';
import TimeSlotModel from './TimeSlotModel';

type CompanyModel = {
  id: number;
  name: string;
  type: string;
  groups: GroupModel[];
  selectedTimeSlot: TimeSlotModel | undefined;
};

export default CompanyModel;
