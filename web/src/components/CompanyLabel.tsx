import React from 'react';

interface Iprops {
  name: String
}

function CompanyLabel({ name }: Iprops) {
  return (
    <div className="title company-label">
      <span className="company-label-text">
        {name}
      </span>
    </div>
  );
}

export default CompanyLabel;
