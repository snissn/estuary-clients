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
    if (!root.EstuaryClient) {
      root.EstuaryClient = {};
    }
    root.EstuaryClient.MainGetApiKeysResp = factory(root.EstuaryClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MainGetApiKeysResp model module.
   * @module model/MainGetApiKeysResp
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>MainGetApiKeysResp</code>.
   * @alias module:model/MainGetApiKeysResp
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MainGetApiKeysResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MainGetApiKeysResp} obj Optional instance to populate.
   * @return {module:model/MainGetApiKeysResp} The populated <code>MainGetApiKeysResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expiry'))
        obj.expiry = ApiClient.convertToType(data['expiry'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('tokenHash'))
        obj.tokenHash = ApiClient.convertToType(data['tokenHash'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} expiry
   */
  exports.prototype.expiry = undefined;

  /**
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * @member {String} token
   */
  exports.prototype.token = undefined;

  /**
   * @member {String} tokenHash
   */
  exports.prototype.tokenHash = undefined;


  return exports;

}));
