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

import { CollectionsCollection } from '../model/collectionsCollection';
import { MainCreateCollectionBody } from '../model/mainCreateCollectionBody';
import { MainDeleteContentFromCollectionBody } from '../model/mainDeleteContentFromCollectionBody';
import { UtilHttpError } from '../model/utilHttpError';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class CollectionsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * Produce a CID of the collection contents
     * This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.
     * @param coluuid coluuid
     
     */
    public collectionsColuuidCommitPost(coluuid: string, observe?: 'body', headers?: Headers): Observable<string>;
    public collectionsColuuidCommitPost(coluuid: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public collectionsColuuidCommitPost(coluuid: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!coluuid){
            throw new Error('Required parameter coluuid was null or undefined when calling collectionsColuuidCommitPost.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.post(`${this.APIConfiguration.basePath}/collections/${encodeURIComponent(String(coluuid))}/commit` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Deletes a content from a collection
     * This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path
     * @param coluuid Collection ID
     * @param contentid Content ID
     * @param body Variable to use when filtering for files (must be either &#39;path&#39; or &#39;content_id&#39;)
     
     */
    public collectionsColuuidContentsDelete(coluuid: string, contentid: string, body: MainDeleteContentFromCollectionBody, observe?: 'body', headers?: Headers): Observable<string>;
    public collectionsColuuidContentsDelete(coluuid: string, contentid: string, body: MainDeleteContentFromCollectionBody, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public collectionsColuuidContentsDelete(coluuid: string, contentid: string, body: MainDeleteContentFromCollectionBody, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!coluuid){
            throw new Error('Required parameter coluuid was null or undefined when calling collectionsColuuidContentsDelete.');
        }

        if (!contentid){
            throw new Error('Required parameter contentid was null or undefined when calling collectionsColuuidContentsDelete.');
        }

        if (!body){
            throw new Error('Required parameter body was null or undefined when calling collectionsColuuidContentsDelete.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.delete(`${this.APIConfiguration.basePath}/collections/${encodeURIComponent(String(coluuid))}/contents`, body as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Deletes a collection
     * This endpoint is used to delete an existing collection.
     * @param coluuid Collection ID
     
     */
    public collectionsColuuidDelete(coluuid: string, observe?: 'body', headers?: Headers): Observable<string>;
    public collectionsColuuidDelete(coluuid: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public collectionsColuuidDelete(coluuid: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!coluuid){
            throw new Error('Required parameter coluuid was null or undefined when calling collectionsColuuidDelete.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.delete(`${this.APIConfiguration.basePath}/collections/${encodeURIComponent(String(coluuid))}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Get contents in a collection
     * This endpoint is used to get contents in a collection. If no colpath query param is passed
     * @param coluuid coluuid
     * @param dir Directory
     
     */
    public collectionsColuuidGet(coluuid: string, dir?: string, observe?: 'body', headers?: Headers): Observable<string>;
    public collectionsColuuidGet(coluuid: string, dir?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public collectionsColuuidGet(coluuid: string, dir?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!coluuid){
            throw new Error('Required parameter coluuid was null or undefined when calling collectionsColuuidGet.');
        }

        let queryParameters: string[] = [];
        if (dir !== undefined) {
            queryParameters.push('dir='+encodeURIComponent(String(dir)));
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.get(`${this.APIConfiguration.basePath}/collections/${encodeURIComponent(String(coluuid))}?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Add contents to a collection
     * This endpoint adds already-pinned contents (that have ContentIDs) to a collection.
     * @param coluuid coluuid
     * @param contentIDs Content IDs to add to collection
     
     */
    public collectionsColuuidPost(coluuid: string, contentIDs: Array<number>, observe?: 'body', headers?: Headers): Observable<string>;
    public collectionsColuuidPost(coluuid: string, contentIDs: Array<number>, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public collectionsColuuidPost(coluuid: string, contentIDs: Array<number>, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!coluuid){
            throw new Error('Required parameter coluuid was null or undefined when calling collectionsColuuidPost.');
        }

        if (!contentIDs){
            throw new Error('Required parameter contentIDs was null or undefined when calling collectionsColuuidPost.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.post(`${this.APIConfiguration.basePath}/collections/${encodeURIComponent(String(coluuid))}`, contentIDs as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Add a file to a collection
     * This endpoint adds a file to a collection
     * @param coluuid Collection ID
     * @param content Content
     * @param path Path to file
     
     */
    public collectionsFsAddPost(coluuid: string, content: string, path: string, observe?: 'body', headers?: Headers): Observable<string>;
    public collectionsFsAddPost(coluuid: string, content: string, path: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<string>>;
    public collectionsFsAddPost(coluuid: string, content: string, path: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!coluuid){
            throw new Error('Required parameter coluuid was null or undefined when calling collectionsFsAddPost.');
        }

        if (!content){
            throw new Error('Required parameter content was null or undefined when calling collectionsFsAddPost.');
        }

        if (!path){
            throw new Error('Required parameter path was null or undefined when calling collectionsFsAddPost.');
        }

        let queryParameters: string[] = [];
        if (coluuid !== undefined) {
            queryParameters.push('coluuid='+encodeURIComponent(String(coluuid)));
        }
        if (content !== undefined) {
            queryParameters.push('content='+encodeURIComponent(String(content)));
        }
        if (path !== undefined) {
            queryParameters.push('path='+encodeURIComponent(String(path)));
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<string>> = this.httpClient.post(`${this.APIConfiguration.basePath}/collections/fs/add?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * List all collections
     * This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.
     
     */
    public collectionsGet(observe?: 'body', headers?: Headers): Observable<Array<Array<CollectionsCollection>>>;
    public collectionsGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Array<CollectionsCollection>>>>;
    public collectionsGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<Array<CollectionsCollection>>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/collections/` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * Create a new collection
     * This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.
     * @param body Collection name and description
     
     */
    public collectionsPost(body: MainCreateCollectionBody, observe?: 'body', headers?: Headers): Observable<CollectionsCollection>;
    public collectionsPost(body: MainCreateCollectionBody, observe?: 'response', headers?: Headers): Observable<HttpResponse<CollectionsCollection>>;
    public collectionsPost(body: MainCreateCollectionBody, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!body){
            throw new Error('Required parameter body was null or undefined when calling collectionsPost.');
        }

        // authentication (bearerAuth) required
        if (this.APIConfiguration.apiKeys['Authorization']) {
            headers['Authorization'] = this.APIConfiguration.apiKeys['Authorization'];
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<CollectionsCollection>> = this.httpClient.post(`${this.APIConfiguration.basePath}/collections/`, body as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
