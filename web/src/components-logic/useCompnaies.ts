import React, { useEffect, useState } from 'react';

import ServiceContext from '../services';
import LogicContext from '.';
import useStore from '../store';

function useCompanies() {
  const { companyService } = React.useContext(ServiceContext);
  const { processRawDataService } = React.useContext(LogicContext);
  const { companies, setCompanies } = useStore();
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async (isMounted: boolean) => {
    try {
      setLoading(true);
      setCompanies(processRawDataService.process(await companyService.fetch()));
    } catch (error) {
      setCompanies([]);
    } finally {
      if (isMounted) { setLoading(false); }
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetchCompanies(isMounted);
    return () => { isMounted = false; };
  }, []);

  return { loading, companies };
}

export default useCompanies;
