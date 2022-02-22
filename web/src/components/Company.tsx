import React from 'react';

import CompanyModel from '../types/CompanyModel';

import CompanyLabel from './CompanyLabel';
import TimeSlotList from './TimeSlotList';

interface Iprops {
  company: CompanyModel
}

function Main({ company }: Iprops) {
  return (
    <div className="company">
      <CompanyLabel name={company.name} key={company.id} />
      <TimeSlotList timeSlots={company.time_slots} />
    </div>
  );
}

export default Main;
