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
export class PublicService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * Get Content by Cid
     * This endpoint returns the content associated with a CID
     * @param cid Cid
     
     */
    public publicByCidCidGet(cid: string, observe?: 'body', headers?: Headers): Observable<string>;
    public publicByCidCidGet(cid: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicByCidCidGet(cid: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!cid){
            throw new Error('Required parameter cid was null or undefined when calling publicByCidCidGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/by-cid/${encodeURIComponent(String(cid))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get public node info
     * This endpoint returns information about the node
     
     */
    public publicInfoGet(observe?: 'body', headers?: Headers): Observable<string>;
    public publicInfoGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicInfoGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/info` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get deal metrics
     * This endpoint is used to get deal metrics
     
     */
    public publicMetricsDealsOnChainGet(observe?: 'body', headers?: Headers): Observable<string>;
    public publicMetricsDealsOnChainGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicMetricsDealsOnChainGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/metrics/deals-on-chain` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get all miners deals
     * This endpoint returns all miners deals
     * @param miner Filter by miner
     * @param ignoreFailed Ignore Failed
     
     */
    public publicMinersDealsMinerGet(miner: string, ignoreFailed?: string, observe?: 'body', headers?: Headers): Observable<string>;
    public publicMinersDealsMinerGet(miner: string, ignoreFailed?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicMinersDealsMinerGet(miner: string, ignoreFailed?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!miner){
            throw new Error('Required parameter miner was null or undefined when calling publicMinersDealsMinerGet.');
        }

        let queryParameters: string[] = [];
        if (ignoreFailed !== undefined) {
            queryParameters.push('ignoreFailed='+encodeURIComponent(String(ignoreFailed)));
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/miners/deals/${encodeURIComponent(String(miner))}?${queryParameters.join('&')}` as any, headers);
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
     * Get miner stats
     * This endpoint returns miner stats
     * @param miner Filter by miner
     
     */
    public publicMinersStatsMinerGet(miner: string, observe?: 'body', headers?: Headers): Observable<string>;
    public publicMinersStatsMinerGet(miner: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicMinersStatsMinerGet(miner: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!miner){
            throw new Error('Required parameter miner was null or undefined when calling publicMinersStatsMinerGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/miners/stats/${encodeURIComponent(String(miner))}` as any, headers);
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


    /**
     * Public stats
     * This endpoint is used to get public stats.
     
     */
    public publicStatsGet(observe?: 'body', headers?: Headers): Observable<string>;
    public publicStatsGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicStatsGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/stats` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
