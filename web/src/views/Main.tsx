import React, { useEffect, useState } from 'react';
import ServiceContext from '../services';

import Company from '../components/Company';
import CompanyModel from '../types/CompanyModel';

function Main() {
  const { companyService } = React.useContext(ServiceContext);
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    setCompanies(await companyService.fetch());
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className="main">
      {companies.map((company: CompanyModel) => <Company company={company} key={company.id} />)}
    </div>
  );
}

export default Main;
