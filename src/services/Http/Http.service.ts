import { environment } from '../../environments/environment';
import { IRequestAPI } from '../../models/IRequestAPI';
import { IHTTPService } from './IHttp.service';

interface IHeaderRequestOptions {
    name: string;
    value: string;
}

export class HTTPService implements IHTTPService {
    private baseUrl?: string;
    private headers: IHeaderRequestOptions[] = [
        { name: 'Content-Type', value: 'application/json' },
    ];

    constructor() {
        this.baseUrl = `${environment.host}:${environment.port}/`;
    }

    public addHeader(name: string, value: string): void {
        const found = this.headers.some((el) => el.name === name);
        if (!found) this.headers.push({ name: name, value: value });
    }

    private setHeader(): HeadersInit {
        const requestHeaders: HeadersInit = new Headers();
        for (const header of this.headers) {
            requestHeaders.set(header.name, header.value);
        }
        return requestHeaders;
    }

    private async fetchingAPI(
        endpoint: string,
        requestOptions: IRequestAPI
    ): Promise<any> {
        return fetch(`${this.baseUrl + endpoint}`, requestOptions);
    }

    private createRequestOption(method: string, data = null) {
        const requestOptions = {
            method,
            body: JSON.stringify(data),
            headers: this.setHeader(),
        };
        if (data === null) requestOptions.body = JSON.stringify(data);
        return requestOptions;
    }

    public async doGet(endpoint: string): Promise<any> {
        const res = await this.fetchingAPI(
            endpoint,
            this.createRequestOption('GET')
        );
        return res.json();
    }

    public async doPost(endpoint: string, data: any): Promise<any> {
        const res = await this.fetchingAPI(
            endpoint,
            this.createRequestOption('POST', data)
        );
        return res.json();
    }

    public async doPut(endpoint: string, data: any): Promise<any> {
        const res = await this.fetchingAPI(
            endpoint,
            this.createRequestOption('PUT', data)
        );
        return res.json();
    }

    public async doDelete(endpoint: string): Promise<any> {
        const res = await this.fetchingAPI(
            endpoint,
            this.createRequestOption('DELETE')
        );
        return res.json();
    }
}
