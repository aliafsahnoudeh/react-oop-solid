import React from 'react';

import IocContainer from '../IocContainer';
import ProcessRawDataService from './ProcessRawDataService';
import BookingService from './BookingService';

const iocContainer = new IocContainer();

iocContainer.service(
  'ProcessRawDataService',
  () => new ProcessRawDataService(),
);

iocContainer.service(
  'BookingService',
  () => BookingService,
);

// I'm using context to inject the services, but of course I could use the ioc container instead.
// in more complex application I prefer to inject just global services like the base api and then inject required services for each module separately :)
const LogicContext = React.createContext({
  processRawDataService: iocContainer.get('ProcessRawDataService'),
  BookingService: iocContainer.get('BookingService'),
});

export default LogicContext;
