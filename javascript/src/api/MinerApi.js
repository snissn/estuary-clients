/*
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {UtilHttpError} from '../model/UtilHttpError';

/**
* Miner service.
* @module api/MinerApi
* @version 1.0.1
*/
export class MinerApi {

    /**
    * Constructs a new MinerApi. 
    * @alias module:api/MinerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the publicMinersDealsMinerGet operation.
     * @callback moduleapi/MinerApi~publicMinersDealsMinerGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all miners deals
     * This endpoint returns all miners deals
     * @param {String} miner Filter by miner
     * @param {Object} opts Optional parameters
     * @param {String} opts.ignoreFailed Ignore Failed
     * @param {module:api/MinerApi~publicMinersDealsMinerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    publicMinersDealsMinerGet(miner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'miner' is set
      if (miner === undefined || miner === null) {
        throw new Error("Missing the required parameter 'miner' when calling publicMinersDealsMinerGet");
      }

      let pathParams = {
        'miner': miner
      };
      let queryParams = {
        'ignore-failed': opts['ignoreFailed']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/public/miners/deals/{miner}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the publicMinersStatsMinerGet operation.
     * @callback moduleapi/MinerApi~publicMinersStatsMinerGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get miner stats
     * This endpoint returns miner stats
     * @param {String} miner Filter by miner
     * @param {module:api/MinerApi~publicMinersStatsMinerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    publicMinersStatsMinerGet(miner, callback) {
      
      let postBody = null;
      // verify the required parameter 'miner' is set
      if (miner === undefined || miner === null) {
        throw new Error("Missing the required parameter 'miner' when calling publicMinersStatsMinerGet");
      }

      let pathParams = {
        'miner': miner
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/public/miners/stats/{miner}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}