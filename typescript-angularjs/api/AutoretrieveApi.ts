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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class AutoretrieveApi {
    protected basePath = 'https://api.estuary.tech';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * This endpoint registers a new autoretrieve server
     * @summary Register autoretrieve server
     * @param addresses Autoretrieve&#39;s comma-separated list of addresses
     * @param pubKey Autoretrieve&#39;s public key
     */
    public adminAutoretrieveInitPost (addresses: string, pubKey: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/admin/autoretrieve/init';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};

        // verify required parameter 'addresses' is not null or undefined
        if (addresses === null || addresses === undefined) {
            throw new Error('Required parameter addresses was null or undefined when calling adminAutoretrieveInitPost.');
        }

        // verify required parameter 'pubKey' is not null or undefined
        if (pubKey === null || pubKey === undefined) {
            throw new Error('Required parameter pubKey was null or undefined when calling adminAutoretrieveInitPost.');
        }

        headerParams['Content-Type'] = 'application/x-www-form-urlencoded';

        formParams['addresses'] = addresses;

        formParams['pubKey'] = pubKey;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: this.$httpParamSerializer(formParams),
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * This endpoint lists all registered autoretrieve servers
     * @summary List autoretrieve servers
     */
    public adminAutoretrieveListGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/admin/autoretrieve/list';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * This endpoint updates the lastConnection field for autoretrieve
     * @summary Marks autoretrieve server as up
     * @param token Autoretrieve&#39;s auth token
     */
    public autoretrieveHeartbeatPost (token: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/autoretrieve/heartbeat';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling autoretrieveHeartbeatPost.');
        }

        headerParams['token'] = token;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
