import IApiService from './IApiService';
import ICompanyService from './ICompanyService';

import RawCompanyModel from '../types/RawCompanyModel';

class CompanyService implements ICompanyService {
  private readonly apiService: IApiService;

  constructor(apiService: IApiService) {
    this.apiService = apiService;
  }

  public async fetch(): Promise<Array<RawCompanyModel>> {
    const {
      body,
    } = await this.apiService.request(
      'GET',
      '/companies',
      {},
      {},
    );
    return body;
  }
}

export default CompanyService;
