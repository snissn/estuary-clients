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
import {TypesIpfsPin} from './TypesIpfsPin';

/**
 * The TypesIpfsPinStatusResponse model module.
 * @module model/TypesIpfsPinStatusResponse
 * @version 1.0.1
 */
export class TypesIpfsPinStatusResponse {
  /**
   * Constructs a new <code>TypesIpfsPinStatusResponse</code>.
   * @alias module:model/TypesIpfsPinStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TypesIpfsPinStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TypesIpfsPinStatusResponse} obj Optional instance to populate.
   * @return {module:model/TypesIpfsPinStatusResponse} The populated <code>TypesIpfsPinStatusResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TypesIpfsPinStatusResponse();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'String');
      if (data.hasOwnProperty('delegates'))
        obj.delegates = ApiClient.convertToType(data['delegates'], ['String']);
      if (data.hasOwnProperty('info'))
        obj.info = ApiClient.convertToType(data['info'], Object);
      if (data.hasOwnProperty('pin'))
        obj.pin = TypesIpfsPin.constructFromObject(data['pin']);
      if (data.hasOwnProperty('requestid'))
        obj.requestid = ApiClient.convertToType(data['requestid'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} created
 */
TypesIpfsPinStatusResponse.prototype.created = undefined;

/**
 * @member {Array.<String>} delegates
 */
TypesIpfsPinStatusResponse.prototype.delegates = undefined;

/**
 * @member {Object} info
 */
TypesIpfsPinStatusResponse.prototype.info = undefined;

/**
 * @member {module:model/TypesIpfsPin} pin
 */
TypesIpfsPinStatusResponse.prototype.pin = undefined;

/**
 * @member {String} requestid
 */
TypesIpfsPinStatusResponse.prototype.requestid = undefined;

/**
 * @member {String} status
 */
TypesIpfsPinStatusResponse.prototype.status = undefined;

