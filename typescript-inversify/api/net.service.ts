/**
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IHttpClient from '../IHttpClient';
import { inject, injectable } from 'inversify';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { Headers } from '../Headers';
import HttpResponse from '../HttpResponse';

import { UtilHttpError } from '../model/utilHttpError';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class NetService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * Net Addrs
     * This endpoint is used to get net addrs
     
     */
    public netAddrsGet(observe?: 'body', headers?: Headers): Observable<string>;
    public netAddrsGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public netAddrsGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/net/addrs` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get all miners
     * This endpoint returns all miners
     * @param miner Filter by miner
     
     */
    public publicMinersFailuresMinerGet(miner: string, observe?: 'body', headers?: Headers): Observable<string>;
    public publicMinersFailuresMinerGet(miner: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicMinersFailuresMinerGet(miner: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!miner){
            throw new Error('Required parameter miner was null or undefined when calling publicMinersFailuresMinerGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/miners/failures/${encodeURIComponent(String(miner))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get all miners
     * This endpoint returns all miners
     
     */
    public publicMinersGet(observe?: 'body', headers?: Headers): Observable<string>;
    public publicMinersGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicMinersGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/miners` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Net Addrs
     * This endpoint is used to get net addrs
     
     */
    public publicNetAddrsGet(observe?: 'body', headers?: Headers): Observable<Array<string>>;
    public publicNetAddrsGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<string>>>;
    public publicNetAddrsGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<string>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/net/addrs` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Net Peers
     * This endpoint is used to get net peers
     
     */
    public publicNetPeersGet(observe?: 'body', headers?: Headers): Observable<Array<string>>;
    public publicNetPeersGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<string>>>;
    public publicNetPeersGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<string>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/net/peers` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
