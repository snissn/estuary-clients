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
 * The MainDeleteContentFromCollectionBody model module.
 * @module model/MainDeleteContentFromCollectionBody
 * @version 1.0.1
 */
export class MainDeleteContentFromCollectionBody {
  /**
   * Constructs a new <code>MainDeleteContentFromCollectionBody</code>.
   * @alias module:model/MainDeleteContentFromCollectionBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MainDeleteContentFromCollectionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MainDeleteContentFromCollectionBody} obj Optional instance to populate.
   * @return {module:model/MainDeleteContentFromCollectionBody} The populated <code>MainDeleteContentFromCollectionBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MainDeleteContentFromCollectionBody();
      if (data.hasOwnProperty('by'))
        obj.by = ApiClient.convertToType(data['by'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} by
 */
MainDeleteContentFromCollectionBody.prototype.by = undefined;

/**
 * @member {String} value
 */
MainDeleteContentFromCollectionBody.prototype.value = undefined;

