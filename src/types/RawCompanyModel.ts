import RawTimeSlotModel from './RawTimeSlotModel';

type RawCompanyModel = {
  id: number;
  name: string;
  type: string;
  time_slots: Array<RawTimeSlotModel>;
};

export default RawCompanyModel;
