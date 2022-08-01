import { getEnvironmentFromConfigFile } from '../../environments/environment';
import { I_requestAPI } from '../../models/I_requestAPI';
import { I_HTTPService } from './I_http.service';

export class HTTPService implements I_HTTPService {
    private baseUrl?: string;

    constructor() {
        this.baseUrl = getEnvironmentFromConfigFile().base_url;
    }

    private setHeader(typeInput: string): HeadersInit {
        const requestHeaders: HeadersInit = new Headers();
        switch (typeInput) {
            case 'json':
                requestHeaders.set('Content-Type', 'application/json');
                break;

            case 'formData':
                requestHeaders.set('Content-Type', 'multipart/form-data');
                break;

            default:
                throw new Error('Invalid header type');
        }
        return requestHeaders;
    }

    private async fetchingAPI(
        endpoint: string,
        requestOptions: I_requestAPI
    ): Promise<any> {
        return fetch(`${this.baseUrl + endpoint}`, requestOptions);
    }

    public async doGet(endpoint: string): Promise<any> {
        const requestOptions = {
            method: 'GET',
            headers: this.setHeader('json'),
        };
        const res = await this.fetchingAPI(endpoint, requestOptions);
        return await res.json();
    }

    public async doPost(
        endpoint: string,
        data: any,
        headers = 'json'
    ): Promise<any> {
        const requestOptions = {
            method: 'POST',
            body: data,
            headers: this.setHeader(headers),
        };
        const res = await this.fetchingAPI(endpoint, requestOptions);
        return await res.json();
    }

    public async doPut(
        endpoint: string,
        data: any,
        headers = 'json'
    ): Promise<any> {
        const requestOptions = {
            method: 'PUT',
            body: data,
            headers: this.setHeader(headers),
        };
        const res = await this.fetchingAPI(endpoint, requestOptions);
        return await res.json();
    }

    public async doDelete(endpoint: string): Promise<any> {
        const requestOptions = {
            method: 'DELETE',
            headers: this.setHeader('json'),
        };
        const res = await this.fetchingAPI(endpoint, requestOptions);
        return await res.json();
    }
}
