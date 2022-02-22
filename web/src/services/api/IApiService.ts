interface IApiService {
  request(
    method: string,
    url: string,
    query: any | null,
    options: any
  ): Promise<any>;
}

export default IApiService;
