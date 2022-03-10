import React from 'react';

import IocContainer from '../IocContainer';
import ApiService from './ApiService';
import CompanyService from './CompanyService';

const iocContainer = new IocContainer();

iocContainer.service(
  'ApiService',
  () => new ApiService(process.env.REACT_APP_BACKEND_URL),
);

iocContainer.service(
  'CompanyService',
  (c:any) => new CompanyService(c.ApiService),
);

// I'm using context to inject the services, but of course I could use the ioc container instead.
// in more complex application I prefer to inject just global services like the base api and then inject required services for each module separately :)
const ServiceContext = React.createContext({
  companyService: iocContainer.get('CompanyService'),
});

export const container = iocContainer;

export default ServiceContext;
