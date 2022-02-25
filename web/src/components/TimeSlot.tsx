import React from 'react';
import useBooking from '../components-logic/useBooking';

import IndicesModel from '../types/IndicesModel';

import TimeSlotModel from '../types/TimeSlotModel';

import styles from './TimeSlot.module.scss';

interface Iprops {
  timeSlot: TimeSlotModel | undefined;
  indices: IndicesModel | undefined;
  disabled: boolean;
  selected: boolean;
  label: string | undefined;
}

function TimeSlot({
  timeSlot, indices, disabled, selected, label,
}:Iprops) {
  const [handleTimeSlotClick] = useBooking();

  return (
    <button type="button" className={`${styles['time-slot']} ${selected ? styles['time-slot-selected'] : ''} ${timeSlot === undefined ? styles['time-slot-empty'] : ''}`} onClick={() => handleTimeSlotClick(indices)} disabled={disabled}>
      {timeSlot ? (
        <div>
          {label !== undefined ? <span>{label}</span> : null}
          {' at '}
          <span className="time-slot-start">{timeSlot.start}</span>
          {' - '}
          <span className="time-slot-end">{timeSlot.end}</span>
        </div>
      ) : null}
    </button>
  );
}

export default TimeSlot;
