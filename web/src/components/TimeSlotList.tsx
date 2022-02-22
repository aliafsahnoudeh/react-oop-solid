import React, { useState, useEffect } from 'react';

import TimeSlotModel from '../types/TimeSlotModel';
import TimeSlotToShow from '../types/TimeSlotToShow';
import TimeSlot from './TimeSlot';
import mapTimeSlot from '../utils/timeMapper';

interface Iprops {
  timeSlots: Array<TimeSlotModel>
}

function TimeSlotList({ timeSlots }:Iprops) {
  const [timeSlotsToShow, setTimeSlots] = useState([] as Array<TimeSlotToShow>);

  useEffect(() => {
    setTimeSlots(mapTimeSlot(timeSlots));
  }, [timeSlots]);

  return (
    <div className="time-slot-list">
      {timeSlotsToShow.map((ts: TimeSlotToShow) => <TimeSlot timeSlot={ts} key={ts.startTimestamp} />)}
    </div>
  );
}

export default TimeSlotList;
