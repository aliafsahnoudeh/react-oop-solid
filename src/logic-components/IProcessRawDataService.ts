import RawCompanyModel from '../types/RawCompanyModel';
import CompanyModel from '../types/CompanyModel';

interface IProcessRawDataService {
  process(rawCompanies: RawCompanyModel[]): CompanyModel[]
}

export default IProcessRawDataService;
