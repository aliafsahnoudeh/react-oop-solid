import RawCompanyModel from '../types/RawCompanyModel';

interface ICompanyService {
  fetch(): Promise<Array<RawCompanyModel>>;
}

export default ICompanyService;
