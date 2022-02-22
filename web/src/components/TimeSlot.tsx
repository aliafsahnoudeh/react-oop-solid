import React from 'react';

import TimeSlotToShow from '../types/TimeSlotToShow';

interface Iprops {
  timeSlot: TimeSlotToShow
}

function TimeSlot({ timeSlot }:Iprops) {
  return (
    <div className="time-slot">
      <div className="time-slot-end">{timeSlot.day}</div>
      <span className="time-slot-start">{timeSlot.start}</span>
      <span className="time-slot-end">{timeSlot.end}</span>
    </div>
  );
}

export default TimeSlot;
