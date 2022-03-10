import React from 'react';

import useCompanies from '../components-logic/useCompnaies';
import CompanyModel from '../types/CompanyModel';

import Company from '../components/Company';
import Layout from '../components/Layout';

import styles from './Main.module.scss';

function Main() {
  const { loading, companies } = useCompanies();

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
