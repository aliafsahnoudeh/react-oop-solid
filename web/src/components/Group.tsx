import React from 'react';

import TimeSlotModel from '../types/TimeSlotModel';
import TimeSlot from './TimeSlot';
import GroupModel from '../types/GroupModel';

import styles from './Group.module.scss';

interface Iprops {
  group: GroupModel;
  indices: {
    company: number,
    group: number,
  }
}

function Group({ group, indices }:Iprops) {
  return (
    <div className={styles['time-slot-list']}>
      <div>{group.dayLabel}</div>
      {group.timeSlots.map((ts: TimeSlotModel, index: number) => (
        <TimeSlot
          timeSlot={ts}
          key={ts.startTimestamp}
          indices={{
            company: indices.company,
            group: indices.group,
            timeSlot: index,
          }}
          disabled={ts.disabled}
          selected={ts.selected}
        />
      ))}
    </div>
  );
}

export default Group;
