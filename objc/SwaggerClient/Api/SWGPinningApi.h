#import <Foundation/Foundation.h>
#import "SWGTypesIpfsListPinStatusResponse.h"
#import "SWGTypesIpfsPin.h"
#import "SWGTypesIpfsPinStatusResponse.h"
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



@interface SWGPinningApi: NSObject <SWGApi>

extern NSString* kSWGPinningApiErrorDomain;
extern NSInteger kSWGPinningApiMissingParamErrorCode;

-(instancetype) initWithApiClient:(SWGApiClient *)apiClient NS_DESIGNATED_INITIALIZER;

/// List all pin status objects
/// This endpoint lists all pin status objects
///
/// 
///  code:200 message:"OK",
///  code:400 message:"Bad Request",
///  code:500 message:"Internal Server Error"
///
/// @return SWGTypesIpfsListPinStatusResponse*
-(NSURLSessionTask*) pinningPinsGetWithCompletionHandler: 
    (void (^)(SWGTypesIpfsListPinStatusResponse* output, NSError* error)) handler;


/// Delete a pinned object
/// This endpoint deletes a pinned object.
///
/// @param pinid Pin ID
/// 
///  code:202 message:"",
///  code:500 message:"Internal Server Error"
///
/// @return void
-(NSURLSessionTask*) pinningPinsPinidDeleteWithPinid: (NSString*) pinid
    completionHandler: (void (^)(NSError* error)) handler;


/// Get a pin status object
/// This endpoint returns a pin status object.
///
/// @param pinid cid
/// 
///  code:200 message:"OK",
///  code:404 message:"Not Found",
///  code:500 message:"Internal Server Error"
///
/// @return SWGTypesIpfsPinStatusResponse*
-(NSURLSessionTask*) pinningPinsPinidGetWithPinid: (NSString*) pinid
    completionHandler: (void (^)(SWGTypesIpfsPinStatusResponse* output, NSError* error)) handler;


/// Replace a pinned object
/// This endpoint replaces a pinned object.
///
/// @param pinid Pin ID
/// @param cid CID of new pin
/// @param name Name (filename) of new pin (optional)
/// @param origins Origins of new pin (optional)
/// @param meta Meta information of new pin (optional)
/// 
///  code:202 message:"Accepted",
///  code:404 message:"Not Found",
///  code:500 message:"Internal Server Error"
///
/// @return SWGTypesIpfsPinStatusResponse*
-(NSURLSessionTask*) pinningPinsPinidPostWithPinid: (NSString*) pinid
    cid: (NSString*) cid
    name: (NSString*) name
    origins: (NSString*) origins
    meta: (NSString*) meta
    completionHandler: (void (^)(SWGTypesIpfsPinStatusResponse* output, NSError* error)) handler;


/// Add and pin object
/// This endpoint adds a pin to the IPFS daemon.
///
/// @param pin Pin Body {cid:cid, name:name}
/// 
///  code:202 message:"Accepted",
///  code:500 message:"Internal Server Error"
///
/// @return SWGTypesIpfsPinStatusResponse*
-(NSURLSessionTask*) pinningPinsPostWithPin: (SWGTypesIpfsPin*) pin
    completionHandler: (void (^)(SWGTypesIpfsPinStatusResponse* output, NSError* error)) handler;



@end
