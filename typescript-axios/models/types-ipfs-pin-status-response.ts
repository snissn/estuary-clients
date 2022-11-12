/* tslint:disable */
/* eslint-disable */
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
import { TypesIpfsPin } from './types-ipfs-pin';
/**
 * 
 * @export
 * @interface TypesIpfsPinStatusResponse
 */
export interface TypesIpfsPinStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof TypesIpfsPinStatusResponse
     */
    created?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypesIpfsPinStatusResponse
     */
    delegates?: Array<string>;
    /**
     * 
     * @type {any}
     * @memberof TypesIpfsPinStatusResponse
     */
    info?: any;
    /**
     * 
     * @type {TypesIpfsPin}
     * @memberof TypesIpfsPinStatusResponse
     */
    pin?: TypesIpfsPin;
    /**
     * 
     * @type {string}
     * @memberof TypesIpfsPinStatusResponse
     */
    requestid?: string;
    /**
     * 
     * @type {string}
     * @memberof TypesIpfsPinStatusResponse
     */
    status?: string;
}