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

export interface CollectionsCollection {
  cid?: string;
  createdAt?: string;
  description?: string;
  name?: string;
  userId?: number;
  uuid?: string;
}

export interface MainChannelIDParam {
  id?: number;
  initiator?: string;
  responder?: string;
}

export interface MainCreateCollectionBody {
  description?: string;
  name?: string;
}

export interface MainDeleteContentFromCollectionBody {
  by?: string;
  value?: string;
}

export interface MainEstimateDealBody {
  durationBlks?: number;
  replication?: number;
  size?: number;
  verified?: boolean;
}

export interface MainGetApiKeysResp {
  expiry?: string;
  label?: string;
  token?: string;
  tokenHash?: string;
}

export interface MainImportDealBody {
  coluuid?: string;
  dealIDs?: Array<number>;
  dir?: string;
  name?: string;
}

export interface TypesIpfsListPinStatusResponse {
  count?: number;
  results?: Array<TypesIpfsPinStatusResponse>;
}

export interface TypesIpfsPin {
  cid?: string;
  meta?: any;
  name?: string;
  origins?: Array<string>;
}

export interface TypesIpfsPinStatusResponse {
  created?: string;
  delegates?: Array<string>;
  info?: any;
  pin?: TypesIpfsPin;
  requestid?: string;
  status?: string;
}

export interface UtilContentAddIpfsBody {
  coluuid?: string;
  dir?: string;
  filename?: string;
  peers?: Array<string>;
  root?: string;
}

export interface UtilContentAddResponse {
  cid?: string;
  estuaryId?: number;
  providers?: Array<string>;
  retrievalUrl?: string;
}

export interface UtilContentCreateBody {
  coluuid?: string;
  dir?: string;
  location?: string;
  name?: string;
  root?: string;
  type?: number;
}

export interface UtilHttpError {
  code?: number;
  details?: string;
  reason?: string;
}

