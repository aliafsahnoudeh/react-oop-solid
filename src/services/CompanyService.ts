import IApiService from './IApiService';
import ICompanyService from './ICompanyService';

import RawCompanyModel from '../types/RawCompanyModel';
import BandServicePathsInterface from './BandServicePaths.interface';

class CompanyService implements ICompanyService {
  private readonly apiService: IApiService;

  private readonly paths: BandServicePathsInterface;

  constructor(apiService: IApiService, bandServicePathsInterface: BandServicePathsInterface) {
    this.apiService = apiService;
    this.paths = bandServicePathsInterface;
  }

  public async fetch(): Promise<Array<RawCompanyModel>> {
    const {
      body,
    } = await this.apiService.request(
      this.paths.fetch.Method,
      this.paths.fetch.Path,
      {},
      {},
    );
    return body;
  }
}

export default CompanyService;
