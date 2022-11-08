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


import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class DefaultService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * 
     
     */
    public dealTransferStatusPost(observe?: 'body', headers?: Headers): Observable<any>;
    public dealTransferStatusPost(observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public dealTransferStatusPost(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.APIConfiguration.basePath}/deal/transfer/status` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}