import React from 'react';

import TimeSlotModel from '../types/TimeSlotModel';
import GroupModel from '../types/GroupModel';

import CardLayout from './CardLayout';
import TimeSlot from './TimeSlot';

interface Iprops {
  group: GroupModel;
  indices: {
    company: number,
    group: number,
  }
}

function Group({ group, indices }:Iprops) {
  return (
    <CardLayout>
      <div className="title">{group.dayLabel}</div>
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
          label={undefined}
        />
      ))}
    </CardLayout>
  );
}

export default Group;
