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

import { MainChannelIDParam } from '../model/mainChannelIDParam';
import { MainEstimateDealBody } from '../model/mainEstimateDealBody';
import { UtilHttpError } from '../model/utilHttpError';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class DealsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * Estimate the cost of a deal
     * This endpoint estimates the cost of a deal
     * @param body The size of the deal in bytes, the replication factor, and the duration of the deal in blocks
     
     */
    public dealEstimatePost(body: MainEstimateDealBody, observe?: 'body', headers?: Headers): Observable<string>;
    public dealEstimatePost(body: MainEstimateDealBody, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealEstimatePost(body: MainEstimateDealBody, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!body){
            throw new Error('Required parameter body was null or undefined when calling dealEstimatePost.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.post(`${this.APIConfiguration.basePath}/deal/estimate`, body as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get Deal Info
     * This endpoint returns the deal info for a deal
     * @param dealid Deal ID
     
     */
    public dealInfoDealidGet(dealid: number, observe?: 'body', headers?: Headers): Observable<string>;
    public dealInfoDealidGet(dealid: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealInfoDealidGet(dealid: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!dealid){
            throw new Error('Required parameter dealid was null or undefined when calling dealInfoDealidGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deal/info/${encodeURIComponent(String(dealid))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get Proposal
     * This endpoint returns the proposal for a deal
     * @param propcid Proposal CID
     
     */
    public dealProposalPropcidGet(propcid: string, observe?: 'body', headers?: Headers): Observable<string>;
    public dealProposalPropcidGet(propcid: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealProposalPropcidGet(propcid: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!propcid){
            throw new Error('Required parameter propcid was null or undefined when calling dealProposalPropcidGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deal/proposal/${encodeURIComponent(String(propcid))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Query Ask
     * This endpoint returns the ask for a given CID
     * @param miner CID
     
     */
    public dealQueryMinerGet(miner: string, observe?: 'body', headers?: Headers): Observable<string>;
    public dealQueryMinerGet(miner: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealQueryMinerGet(miner: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!miner){
            throw new Error('Required parameter miner was null or undefined when calling dealQueryMinerGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deal/query/${encodeURIComponent(String(miner))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get Deal Status by PropCid
     * Get Deal Status by PropCid
     * @param propcid PropCid
     
     */
    public dealStatusByProposalPropcidGet(propcid: string, observe?: 'body', headers?: Headers): Observable<string>;
    public dealStatusByProposalPropcidGet(propcid: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealStatusByProposalPropcidGet(propcid: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!propcid){
            throw new Error('Required parameter propcid was null or undefined when calling dealStatusByProposalPropcidGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deal/status-by-proposal/${encodeURIComponent(String(propcid))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Deal Status
     * This endpoint returns the status of a deal
     * @param miner Miner
     * @param propcid Proposal CID
     
     */
    public dealStatusMinerPropcidGet(miner: string, propcid: string, observe?: 'body', headers?: Headers): Observable<string>;
    public dealStatusMinerPropcidGet(miner: string, propcid: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealStatusMinerPropcidGet(miner: string, propcid: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!miner){
            throw new Error('Required parameter miner was null or undefined when calling dealStatusMinerPropcidGet.');
        }

        if (!propcid){
            throw new Error('Required parameter propcid was null or undefined when calling dealStatusMinerPropcidGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deal/status/${encodeURIComponent(String(miner))}/${encodeURIComponent(String(propcid))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Transfer In Progress
     * This endpoint returns the in-progress transfers
     
     */
    public dealTransferInProgressGet(observe?: 'body', headers?: Headers): Observable<string>;
    public dealTransferInProgressGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealTransferInProgressGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deal/transfer/in-progress` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Transfer Status
     * This endpoint returns the status of a transfer
     * @param chanid Channel ID
     
     */
    public dealTransferStatusPost(chanid: MainChannelIDParam, observe?: 'body', headers?: Headers): Observable<string>;
    public dealTransferStatusPost(chanid: MainChannelIDParam, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealTransferStatusPost(chanid: MainChannelIDParam, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!chanid){
            throw new Error('Required parameter chanid was null or undefined when calling dealTransferStatusPost.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.post(`${this.APIConfiguration.basePath}/deal/transfer/status`, chanid as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get storage failures for user
     * This endpoint returns a list of storage failures for user
     
     */
    public dealsFailuresGet(observe?: 'body', headers?: Headers): Observable<string>;
    public dealsFailuresGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealsFailuresGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deals/failures` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Make Deal
     * This endpoint makes a deal for a given content and miner
     * @param miner Miner
     * @param dealRequest Deal Request
     
     */
    public dealsMakeMinerPost(miner: string, dealRequest: string, observe?: 'body', headers?: Headers): Observable<string>;
    public dealsMakeMinerPost(miner: string, dealRequest: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealsMakeMinerPost(miner: string, dealRequest: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!miner){
            throw new Error('Required parameter miner was null or undefined when calling dealsMakeMinerPost.');
        }

        if (!dealRequest){
            throw new Error('Required parameter dealRequest was null or undefined when calling dealsMakeMinerPost.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.post(`${this.APIConfiguration.basePath}/deals/make/${encodeURIComponent(String(miner))}`, dealRequest as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get Deal Status
     * This endpoint returns the status of a deal
     * @param deal Deal ID
     
     */
    public dealsStatusDealGet(deal: number, observe?: 'body', headers?: Headers): Observable<string>;
    public dealsStatusDealGet(deal: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public dealsStatusDealGet(deal: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!deal){
            throw new Error('Required parameter deal was null or undefined when calling dealsStatusDealGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/deals/status/${encodeURIComponent(String(deal))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get storage failures
     * This endpoint returns a list of storage failures
     
     */
    public publicDealsFailuresGet(observe?: 'body', headers?: Headers): Observable<string>;
    public publicDealsFailuresGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicDealsFailuresGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/deals/failures` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Query Ask
     * This endpoint returns the ask for a given CID
     * @param miner CID
     
     */
    public publicMinersStorageQueryMinerGet(miner: string, observe?: 'body', headers?: Headers): Observable<string>;
    public publicMinersStorageQueryMinerGet(miner: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public publicMinersStorageQueryMinerGet(miner: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!miner){
            throw new Error('Required parameter miner was null or undefined when calling publicMinersStorageQueryMinerGet.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/public/miners/storage/query/${encodeURIComponent(String(miner))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
