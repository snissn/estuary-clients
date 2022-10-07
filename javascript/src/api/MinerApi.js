/*
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EstuaryApi) {
      root.EstuaryApi = {};
    }
    root.EstuaryApi.MinerApi = factory(root.EstuaryApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Miner service.
   * @module api/MinerApi
   * @version 0.0.0
   */

  /**
   * Constructs a new MinerApi. 
   * @alias module:api/MinerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the publicMinersDealsMinerGet operation.
     * @callback module:api/MinerApi~publicMinersDealsMinerGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all miners deals
     * This endpoint returns all miners deals
     * @param {String} miner Filter by miner
     * @param {module:api/MinerApi~publicMinersDealsMinerGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.publicMinersDealsMinerGet = function(miner, callback) {
      var postBody = null;

      // verify the required parameter 'miner' is set
      if (miner === undefined || miner === null) {
        throw new Error("Missing the required parameter 'miner' when calling publicMinersDealsMinerGet");
      }


      var pathParams = {
        'miner': miner
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/public/miners/deals/{miner}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the publicMinersStatsMinerGet operation.
     * @callback module:api/MinerApi~publicMinersStatsMinerGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get miner stats
     * This endpoint returns miner stats
     * @param {String} miner Filter by miner
     * @param {module:api/MinerApi~publicMinersStatsMinerGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.publicMinersStatsMinerGet = function(miner, callback) {
      var postBody = null;

      // verify the required parameter 'miner' is set
      if (miner === undefined || miner === null) {
        throw new Error("Missing the required parameter 'miner' when calling publicMinersStatsMinerGet");
      }


      var pathParams = {
        'miner': miner
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/public/miners/stats/{miner}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));