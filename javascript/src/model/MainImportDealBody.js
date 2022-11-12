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
import {ApiClient} from '../ApiClient';

/**
 * The MainImportDealBody model module.
 * @module model/MainImportDealBody
 * @version 1.0.1
 */
export class MainImportDealBody {
  /**
   * Constructs a new <code>MainImportDealBody</code>.
   * @alias module:model/MainImportDealBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MainImportDealBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MainImportDealBody} obj Optional instance to populate.
   * @return {module:model/MainImportDealBody} The populated <code>MainImportDealBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MainImportDealBody();
      if (data.hasOwnProperty('coluuid'))
        obj.coluuid = ApiClient.convertToType(data['coluuid'], 'String');
      if (data.hasOwnProperty('dealIDs'))
        obj.dealIDs = ApiClient.convertToType(data['dealIDs'], ['Number']);
      if (data.hasOwnProperty('dir'))
        obj.dir = ApiClient.convertToType(data['dir'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} coluuid
 */
MainImportDealBody.prototype.coluuid = undefined;

/**
 * @member {Array.<Number>} dealIDs
 */
MainImportDealBody.prototype.dealIDs = undefined;

/**
 * @member {String} dir
 */
MainImportDealBody.prototype.dir = undefined;

/**
 * @member {String} name
 */
MainImportDealBody.prototype.name = undefined;

