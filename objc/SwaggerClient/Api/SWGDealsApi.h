#import <Foundation/Foundation.h>
#import "SWGMainChannelIDParam.h"
#import "SWGMainEstimateDealBody.h"
#import "SWGUtilHttpError.h"
#import "SWGApi.h"

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



@interface SWGDealsApi: NSObject <SWGApi>

extern NSString* kSWGDealsApiErrorDomain;
extern NSInteger kSWGDealsApiMissingParamErrorCode;

-(instancetype) initWithApiClient:(SWGApiClient *)apiClient NS_DESIGNATED_INITIALIZER;

/// Estimate the cost of a deal
/// This endpoint estimates the cost of a deal
///
/// @param body The size of the deal in bytes, the replication factor, and the duration of the deal in blocks
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealEstimatePostWithBody: (SWGMainEstimateDealBody*) body
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Get Deal Info
/// This endpoint returns the deal info for a deal
///
/// @param dealid Deal ID
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealInfoDealidGetWithDealid: (NSNumber*) dealid
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Get Proposal
/// This endpoint returns the proposal for a deal
///
/// @param propcid Proposal CID
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealProposalPropcidGetWithPropcid: (NSString*) propcid
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Query Ask
/// This endpoint returns the ask for a given CID
///
/// @param miner CID
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealQueryMinerGetWithMiner: (NSString*) miner
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Get Deal Status by PropCid
/// Get Deal Status by PropCid
///
/// @param propcid PropCid
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealStatusByProposalPropcidGetWithPropcid: (NSString*) propcid
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Deal Status
/// This endpoint returns the status of a deal
///
/// @param miner Miner
/// @param propcid Proposal CID
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealStatusMinerPropcidGetWithMiner: (NSString*) miner
    propcid: (NSString*) propcid
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Transfer In Progress
/// This endpoint returns the in-progress transfers
///
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealTransferInProgressGetWithCompletionHandler: 
    (void (^)(NSString* output, NSError* error)) handler;


/// Transfer Status
/// This endpoint returns the status of a transfer
///
/// @param chanid Channel ID
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealTransferStatusPostWithChanid: (SWGMainChannelIDParam*) chanid
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Get storage failures for user
/// This endpoint returns a list of storage failures for user
///
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealsFailuresGetWithCompletionHandler: 
    (void (^)(NSString* output, NSError* error)) handler;


/// Make Deal
/// This endpoint makes a deal for a given content and miner
///
/// @param miner Miner
/// @param dealRequest Deal Request
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealsMakeMinerPostWithMiner: (NSString*) miner
    dealRequest: (NSString*) dealRequest
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Get Deal Status
/// This endpoint returns the status of a deal
///
/// @param deal Deal ID
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) dealsStatusDealGetWithDeal: (NSNumber*) deal
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;


/// Get storage failures
/// This endpoint returns a list of storage failures
///
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) publicDealsFailuresGetWithCompletionHandler: 
    (void (^)(NSString* output, NSError* error)) handler;


/// Query Ask
/// This endpoint returns the ask for a given CID
///
/// @param miner CID
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return NSString*
-(NSURLSessionTask*) publicMinersStorageQueryMinerGetWithMiner: (NSString*) miner
    completionHandler: (void (^)(NSString* output, NSError* error)) handler;



@end
