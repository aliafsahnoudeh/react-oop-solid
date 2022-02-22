import Company from '../../types/CompanyModel';

interface ICompanyService {
  fetch(): Promise<Array<Company>>;
}

export default ICompanyService;
