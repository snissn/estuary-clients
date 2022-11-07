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
  MainEstimateDealBody,
  MainChannelIDParam,
} from './models';

/**
 * dealEstimatePost - parameters interface
 */
export interface IDealEstimatePostParams {
  body: MainEstimateDealBody;
}

/**
 * dealInfoDealidGet - parameters interface
 */
export interface IDealInfoDealidGetParams {
  dealid: number;
}

/**
 * dealProposalPropcidGet - parameters interface
 */
export interface IDealProposalPropcidGetParams {
  propcid: string;
}

/**
 * dealQueryMinerGet - parameters interface
 */
export interface IDealQueryMinerGetParams {
  miner: string;
}

/**
 * dealStatusByProposalPropcidGet - parameters interface
 */
export interface IDealStatusByProposalPropcidGetParams {
  propcid: string;
}

/**
 * dealStatusMinerPropcidGet - parameters interface
 */
export interface IDealStatusMinerPropcidGetParams {
  miner: string;
  propcid: string;
}

/**
 * dealTransferInProgressGet - parameters interface
 */
export interface IDealTransferInProgressGetParams {
}

/**
 * dealTransferStatusPost - parameters interface
 */
export interface IDealTransferStatusPostParams {
  chanid: MainChannelIDParam;
}

/**
 * dealsFailuresGet - parameters interface
 */
export interface IDealsFailuresGetParams {
}

/**
 * dealsMakeMinerPost - parameters interface
 */
export interface IDealsMakeMinerPostParams {
  miner: string;
  dealRequest: string;
}

/**
 * dealsStatusDealGet - parameters interface
 */
export interface IDealsStatusDealGetParams {
  deal: number;
}

/**
 * publicDealsFailuresGet - parameters interface
 */
export interface IPublicDealsFailuresGetParams {
}

/**
 * publicMinersStorageQueryMinerGet - parameters interface
 */
export interface IPublicMinersStorageQueryMinerGetParams {
  miner: string;
}

/**
 * DealsApi - API class
 */
@autoinject()
export class DealsApi extends Api {

  /**
   * Creates a new DealsApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Estimate the cost of a deal
   * This endpoint estimates the cost of a deal
   * @param params.body The size of the deal in bytes, the replication factor, and the duration of the deal in blocks
   */
  async dealEstimatePost(params: IDealEstimatePostParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealEstimatePost', params, 'body');

    // Create URL to call
    const url = `${this.basePath}/deal/estimate`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['body'] || {}))

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
   * Get Deal Info
   * This endpoint returns the deal info for a deal
   * @param params.dealid Deal ID
   */
  async dealInfoDealidGet(params: IDealInfoDealidGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealInfoDealidGet', params, 'dealid');

    // Create URL to call
    const url = `${this.basePath}/deal/info/{dealid}`
      .replace(`{${'dealid'}}`, encodeURIComponent(`${params['dealid']}`));

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
   * Get Proposal
   * This endpoint returns the proposal for a deal
   * @param params.propcid Proposal CID
   */
  async dealProposalPropcidGet(params: IDealProposalPropcidGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealProposalPropcidGet', params, 'propcid');

    // Create URL to call
    const url = `${this.basePath}/deal/proposal/{propcid}`
      .replace(`{${'propcid'}}`, encodeURIComponent(`${params['propcid']}`));

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
   * Query Ask
   * This endpoint returns the ask for a given CID
   * @param params.miner CID
   */
  async dealQueryMinerGet(params: IDealQueryMinerGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealQueryMinerGet', params, 'miner');

    // Create URL to call
    const url = `${this.basePath}/deal/query/{miner}`
      .replace(`{${'miner'}}`, encodeURIComponent(`${params['miner']}`));

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
   * Get Deal Status by PropCid
   * Get Deal Status by PropCid
   * @param params.propcid PropCid
   */
  async dealStatusByProposalPropcidGet(params: IDealStatusByProposalPropcidGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealStatusByProposalPropcidGet', params, 'propcid');

    // Create URL to call
    const url = `${this.basePath}/deal/status-by-proposal/{propcid}`
      .replace(`{${'propcid'}}`, encodeURIComponent(`${params['propcid']}`));

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
   * Deal Status
   * This endpoint returns the status of a deal
   * @param params.miner Miner
   * @param params.propcid Proposal CID
   */
  async dealStatusMinerPropcidGet(params: IDealStatusMinerPropcidGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealStatusMinerPropcidGet', params, 'miner');
    this.ensureParamIsSet('dealStatusMinerPropcidGet', params, 'propcid');

    // Create URL to call
    const url = `${this.basePath}/deal/status/{miner}/{propcid}`
      .replace(`{${'miner'}}`, encodeURIComponent(`${params['miner']}`))
      .replace(`{${'propcid'}}`, encodeURIComponent(`${params['propcid']}`));

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
   * Transfer In Progress
   * This endpoint returns the in-progress transfers
   */
  async dealTransferInProgressGet(): Promise<string> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/deal/transfer/in-progress`;

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
   * Transfer Status
   * This endpoint returns the status of a transfer
   * @param params.chanid Channel ID
   */
  async dealTransferStatusPost(params: IDealTransferStatusPostParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealTransferStatusPost', params, 'chanid');

    // Create URL to call
    const url = `${this.basePath}/deal/transfer/status`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['chanid'] || {}))

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
   * Get storage failures for user
   * This endpoint returns a list of storage failures for user
   */
  async dealsFailuresGet(): Promise<string> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/deals/failures`;

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
   * Make Deal
   * This endpoint makes a deal for a given content and miner
   * @param params.miner Miner
   * @param params.dealRequest Deal Request
   */
  async dealsMakeMinerPost(params: IDealsMakeMinerPostParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealsMakeMinerPost', params, 'miner');
    this.ensureParamIsSet('dealsMakeMinerPost', params, 'dealRequest');

    // Create URL to call
    const url = `${this.basePath}/deals/make/{miner}`
      .replace(`{${'miner'}}`, encodeURIComponent(`${params['miner']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['dealRequest'] || {}))

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
   * Get Deal Status
   * This endpoint returns the status of a deal
   * @param params.deal Deal ID
   */
  async dealsStatusDealGet(params: IDealsStatusDealGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('dealsStatusDealGet', params, 'deal');

    // Create URL to call
    const url = `${this.basePath}/deals/status/{deal}`
      .replace(`{${'deal'}}`, encodeURIComponent(`${params['deal']}`));

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
   * Get storage failures
   * This endpoint returns a list of storage failures
   */
  async publicDealsFailuresGet(): Promise<string> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/public/deals/failures`;

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
   * Query Ask
   * This endpoint returns the ask for a given CID
   * @param params.miner CID
   */
  async publicMinersStorageQueryMinerGet(params: IPublicMinersStorageQueryMinerGetParams): Promise<string> {
    // Verify required parameters are set
    this.ensureParamIsSet('publicMinersStorageQueryMinerGet', params, 'miner');

    // Create URL to call
    const url = `${this.basePath}/public/miners/storage/query/{miner}`
      .replace(`{${'miner'}}`, encodeURIComponent(`${params['miner']}`));

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

}

