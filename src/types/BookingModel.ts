import SelectedTimeSlotModel from './SelectedTimeSlotModel';
import TimeSlotUpdateModel from './TimeSlotUpdateModel';

type BookingModel = {
  updates: TimeSlotUpdateModel[];
  selected: SelectedTimeSlotModel | undefined;
};

export default BookingModel;
