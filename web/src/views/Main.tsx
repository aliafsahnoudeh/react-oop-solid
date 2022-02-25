import React, { useEffect, useState } from 'react';
import ServiceContext from '../services';
import LogicContext from '../components-logic';
import useStore from '../store';
import CompanyModel from '../types/CompanyModel';

import Company from '../components/Company';
import Layout from '../components/Layout';

import styles from './Main.module.scss';

function Main() {
  const { companyService } = React.useContext(ServiceContext);
  const { processRawDataService } = React.useContext(LogicContext);
  const { companies, setCompanies } = useStore();
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setCompanies(processRawDataService.process(await companyService.fetch()));
    } catch (error) {
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <Layout>
      {
        // eslint-disable-next-line no-nested-ternary
      loading ? (<div className={styles.message}> loading </div>)
        : companies && companies.length > 0 ? (
          <div className={styles.main}>
            {companies.map((company: CompanyModel, index: number) => <Company company={company} index={index} key={company.id} />)}
          </div>
        ) : <div className={styles.message}>No Data To Show!</div>
}
    </Layout>
  );
}

export default Main;
