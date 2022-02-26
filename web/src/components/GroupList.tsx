import React from 'react';

import GroupModel from '../types/GroupModel';

import Group from './Group';

interface Iprops {
  groups: GroupModel[];
  companyIndex: number;
}

function GroupList({ groups, companyIndex }:Iprops) {
  return (
    <div>
      {groups.map((group: GroupModel, index: number) => (
        <Group
          group={group}
          key={group.dayLabel}
          indices={{
            company: companyIndex,
            group: index,
          }}
        />
      ))}
    </div>
  );
}

export default GroupList;
