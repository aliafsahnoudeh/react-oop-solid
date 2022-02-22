import TimeSlot from '../types/TimeSlotModel';
import TimeSlotToShow from '../types/TimeSlotToShow';

// TODO in translation files in case of multilingual
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default (timeSlots: Array<TimeSlot>): Array<TimeSlotToShow> => timeSlots.map((timeSlot: TimeSlot):TimeSlotToShow => {
  const startDate = new Date(timeSlot.start_time);
  const endDate = new Date(timeSlot.end_time);

  return {
    start: startDate.toISOString().slice(11, 16),
    end: endDate.toISOString().slice(11, 16),
    disable: false,
    // based on the data considered start and end are in the same day
    day: `${months[startDate.getMonth()]} ${startDate.getDate()} ${days[startDate.getDay()]}`,
    startTimestamp: startDate.getTime(),
    endTimestamp: endDate.getTime(),
  } as unknown as TimeSlotToShow;
});
