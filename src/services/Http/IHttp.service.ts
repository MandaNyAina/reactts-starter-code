export interface IHTTPService {
    doGet: (endpoint: string) => Promise<any>;
    doPost: (endpoint: string, data: any, headers: string) => Promise<any>;
    doPut: (endpoint: string, data: any, headers: string) => Promise<any>;
    doDelete: (endpoint: string) => Promise<any>;
}
