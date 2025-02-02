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
    define(['ApiClient', 'model/TypesIpfsPin', 'model/UtilHttpError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TypesIpfsPin'), require('../model/UtilHttpError'));
  } else {
    // Browser globals (root is window)
    if (!root.EstuaryClient) {
      root.EstuaryClient = {};
    }
    root.EstuaryClient.PinningApi = factory(root.EstuaryClient.ApiClient, root.EstuaryClient.TypesIpfsPin, root.EstuaryClient.UtilHttpError);
  }
}(this, function(ApiClient, TypesIpfsPin, UtilHttpError) {
  'use strict';

  /**
   * Pinning service.
   * @module api/PinningApi
   * @version 1.0.1
   */

  /**
   * Constructs a new PinningApi. 
   * @alias module:api/PinningApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the pinningPinsGet operation.
     * @callback module:api/PinningApi~pinningPinsGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all pin status objects
     * This endpoint lists all pin status objects
     * @param {module:api/PinningApi~pinningPinsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.pinningPinsGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/pinning/pins', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsPinidDelete operation.
     * @callback module:api/PinningApi~pinningPinsPinidDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a pinned object
     * This endpoint deletes a pinned object.
     * @param {String} pinid Pin ID
     * @param {module:api/PinningApi~pinningPinsPinidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.pinningPinsPinidDelete = function(pinid, callback) {
      var postBody = null;

      // verify the required parameter 'pinid' is set
      if (pinid === undefined || pinid === null) {
        throw new Error("Missing the required parameter 'pinid' when calling pinningPinsPinidDelete");
      }


      var pathParams = {
        'pinid': pinid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/pinning/pins/{pinid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsPinidGet operation.
     * @callback module:api/PinningApi~pinningPinsPinidGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a pin status object
     * This endpoint returns a pin status object.
     * @param {String} pinid cid
     * @param {module:api/PinningApi~pinningPinsPinidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.pinningPinsPinidGet = function(pinid, callback) {
      var postBody = null;

      // verify the required parameter 'pinid' is set
      if (pinid === undefined || pinid === null) {
        throw new Error("Missing the required parameter 'pinid' when calling pinningPinsPinidGet");
      }


      var pathParams = {
        'pinid': pinid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/pinning/pins/{pinid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsPinidPost operation.
     * @callback module:api/PinningApi~pinningPinsPinidPostCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a pinned object
     * This endpoint replaces a pinned object.
     * @param {String} pinid Pin ID
     * @param {module:api/PinningApi~pinningPinsPinidPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.pinningPinsPinidPost = function(pinid, callback) {
      var postBody = null;

      // verify the required parameter 'pinid' is set
      if (pinid === undefined || pinid === null) {
        throw new Error("Missing the required parameter 'pinid' when calling pinningPinsPinidPost");
      }


      var pathParams = {
        'pinid': pinid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/pinning/pins/{pinid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pinningPinsPost operation.
     * @callback module:api/PinningApi~pinningPinsPostCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add and pin object
     * This endpoint adds a pin to the IPFS daemon.
     * @param {module:model/TypesIpfsPin} pin Pin Body {cid:cid, name:name}
     * @param {module:api/PinningApi~pinningPinsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.pinningPinsPost = function(pin, callback) {
      var postBody = pin;

      // verify the required parameter 'pin' is set
      if (pin === undefined || pin === null) {
        throw new Error("Missing the required parameter 'pin' when calling pinningPinsPost");
      }


      var pathParams = {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/pinning/pins', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
