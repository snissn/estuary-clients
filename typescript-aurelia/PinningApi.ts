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

import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { Api } from './Api';
import { AuthStorage } from './AuthStorage';
import {
  TypesIpfsPin,
} from './models';

/**
 * pinningPinsGet - parameters interface
 */
export interface IPinningPinsGetParams {
}

/**
 * pinningPinsPinidDelete - parameters interface
 */
export interface IPinningPinsPinidDeleteParams {
  pinid: string;
}

/**
 * pinningPinsPinidGet - parameters interface
 */
export interface IPinningPinsPinidGetParams {
  pinid: string;
}

/**
 * pinningPinsPinidPost - parameters interface
 */
export interface IPinningPinsPinidPostParams {
  pinid: string;
}

/**
 * pinningPinsPost - parameters interface
 */
export interface IPinningPinsPostParams {
  pin: TypesIpfsPin;
}

/**
 * PinningApi - API class
 */
@autoinject()
export class PinningApi extends Api {

  /**
   * Creates a new PinningApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * List all pin status objects
   * This endpoint lists all pin status objects
   */
  async pinningPinsGet(): Promise<string> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/pinning/pins`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Authentication 'bearerAuth' required
      .withHeader('Authorization', this.authStorage.getbearerAuth())
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Delete a pinned object
   * This endpoint deletes a pinned object.
   * @param params.pinid Pin ID
   */
  async pinningPinsPinidDelete(params: IPinningPinsPinidDeleteParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('pinningPinsPinidDelete', params, 'pinid');

    // Create URL to call
    const url = `${this.basePath}/pinning/pins/{pinid}`
      .replace(`{${'pinid'}}`, encodeURIComponent(`${params['pinid']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asDelete()

      // Authentication 'bearerAuth' required
      .withHeader('Authorization', this.authStorage.getbearerAuth())
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Get a pin status object
   * This endpoint returns a pin status object.
   * @param params.pinid cid
   */
  async pinningPinsPinidGet(params: IPinningPinsPinidGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('pinningPinsPinidGet', params, 'pinid');

    // Create URL to call
    const url = `${this.basePath}/pinning/pins/{pinid}`
      .replace(`{${'pinid'}}`, encodeURIComponent(`${params['pinid']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Authentication 'bearerAuth' required
      .withHeader('Authorization', this.authStorage.getbearerAuth())
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Replace a pinned object
   * This endpoint replaces a pinned object.
   * @param params.pinid Pin ID
   */
  async pinningPinsPinidPost(params: IPinningPinsPinidPostParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('pinningPinsPinidPost', params, 'pinid');

    // Create URL to call
    const url = `${this.basePath}/pinning/pins/{pinid}`
      .replace(`{${'pinid'}}`, encodeURIComponent(`${params['pinid']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()

      // Authentication 'bearerAuth' required
      .withHeader('Authorization', this.authStorage.getbearerAuth())
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

  /**
   * Add and pin object
   * This endpoint adds a pin to the IPFS daemon.
   * @param params.pin Pin Body {cid:cid, name:name}
   */
  async pinningPinsPost(params: IPinningPinsPostParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('pinningPinsPost', params, 'pin');

    // Create URL to call
    const url = `${this.basePath}/pinning/pins`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['pin'] || {}))

      // Authentication 'bearerAuth' required
      .withHeader('Authorization', this.authStorage.getbearerAuth())
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

}

