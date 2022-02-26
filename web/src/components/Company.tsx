import React from 'react';

import CompanyModel from '../types/CompanyModel';

import CompanyLabel from './CompanyLabel';
import GroupList from './GroupList';
import TimeSlot from './TimeSlot';
import CardLayout from './CardLayout';

interface Iprops {
  company: CompanyModel;
  index: number;
}

function Company({ company, index }: Iprops) {
  return (
    <div className="company">
      <CompanyLabel name={company.name} key={company.id} />
      <CardLayout>
        <TimeSlot
          timeSlot={company.selectedTimeSlot}
          disabled={false}
          selected={false}
          indices={undefined}
          label={company.selectedTimeSlot !== undefined ? company.selectedTimeSlot.label : undefined}
        />
      </CardLayout>
      <GroupList
        groups={company.groups}
        companyIndex={index}
      />
    </div>
  );
}

export default Company;
