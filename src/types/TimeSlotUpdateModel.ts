import IndicesModel from './IndicesModel';

type TimeSlotUpdateModel = {
  indices: IndicesModel;
  disabled: boolean;
  selected: boolean;
};

export default TimeSlotUpdateModel;
