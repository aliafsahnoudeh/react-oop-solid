import ProcessRawDataService from './ProcessRawDataService';
import companiesMock from '../mockedData/companiesMock';
import apiMock from '../mockedData/apiMock';

const processRawDataService = new ProcessRawDataService();

describe('ProcessRawDataService', () => {
  test('proccessing raw data should work correctly', () => {
    const companies = processRawDataService.process(apiMock);
    expect(companies).toStrictEqual(companiesMock);
  });
});
