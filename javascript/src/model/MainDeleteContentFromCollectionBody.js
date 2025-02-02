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
    root.EstuaryClient.MainDeleteContentFromCollectionBody = factory(root.EstuaryClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MainDeleteContentFromCollectionBody model module.
   * @module model/MainDeleteContentFromCollectionBody
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>MainDeleteContentFromCollectionBody</code>.
   * @alias module:model/MainDeleteContentFromCollectionBody
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MainDeleteContentFromCollectionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MainDeleteContentFromCollectionBody} obj Optional instance to populate.
   * @return {module:model/MainDeleteContentFromCollectionBody} The populated <code>MainDeleteContentFromCollectionBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('by'))
        obj.by = ApiClient.convertToType(data['by'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} by
   */
  exports.prototype.by = undefined;

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;


  return exports;

}));
