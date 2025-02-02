# SwaggerClient

This is the API for the Estuary application.

This ObjC package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.0
- Package version: 
- Build package: io.swagger.codegen.languages.ObjcClientCodegen
For more information, please visit [https://docs.estuary.tech/feedback](https://docs.estuary.tech/feedback)

## Requirements

The SDK requires [**ARC (Automatic Reference Counting)**](http://stackoverflow.com/questions/7778356/how-to-enable-disable-automatic-reference-counting) to be enabled in the Xcode project.

## Installation & Usage
### Install from Github using [CocoaPods](https://cocoapods.org/)

Add the following to the Podfile:

```ruby
pod 'SwaggerClient', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'
```

To specify a particular branch, append `, :branch => 'branch-name-here'`

To specify a particular commit, append `, :commit => '11aa22'`

### Install from local path using [CocoaPods](https://cocoapods.org/)

Put the SDK under your project folder (e.g. /path/to/objc_project/Vendor/SwaggerClient) and then add the following to the Podfile:

```ruby
pod 'SwaggerClient', :path => 'Vendor/SwaggerClient'
```

### Usage

Import the following:

```objc
#import <SwaggerClient/SWGApiClient.h>
#import <SwaggerClient/SWGDefaultConfiguration.h>
// load models
#import <SwaggerClient/SWGCollectionsCollection.h>
#import <SwaggerClient/SWGMainChannelIDParam.h>
#import <SwaggerClient/SWGMainCreateCollectionBody.h>
#import <SwaggerClient/SWGMainDeleteContentFromCollectionBody.h>
#import <SwaggerClient/SWGMainEstimateDealBody.h>
#import <SwaggerClient/SWGMainGetApiKeysResp.h>
#import <SwaggerClient/SWGMainImportDealBody.h>
#import <SwaggerClient/SWGTypesIpfsPin.h>
#import <SwaggerClient/SWGUtilContentAddIpfsBody.h>
#import <SwaggerClient/SWGUtilContentAddResponse.h>
#import <SwaggerClient/SWGUtilContentCreateBody.h>
#import <SwaggerClient/SWGUtilHttpError.h>
// load API classes for accessing endpoints
#import <SwaggerClient/SWGAdminApi.h>
#import <SwaggerClient/SWGAutoretrieveApi.h>
#import <SwaggerClient/SWGCollectionsApi.h>
#import <SwaggerClient/SWGContentApi.h>
#import <SwaggerClient/SWGDealsApi.h>
#import <SwaggerClient/SWGMetricsApi.h>
#import <SwaggerClient/SWGMinerApi.h>
#import <SwaggerClient/SWGNetApi.h>
#import <SwaggerClient/SWGPeeringApi.h>
#import <SwaggerClient/SWGPeersApi.h>
#import <SwaggerClient/SWGPinningApi.h>
#import <SwaggerClient/SWGPublicApi.h>
#import <SwaggerClient/SWGUserApi.h>

```

## Recommendation

It's recommended to create an instance of ApiClient per thread in a multi-threaded environment to avoid any potential issues.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```objc

SWGDefaultConfiguration *apiConfig = [SWGDefaultConfiguration sharedConfig];

// Configure API key authorization: (authentication scheme: bearerAuth)
[apiConfig setApiKey:@"YOUR_API_KEY" forApiKeyIdentifier:@"Authorization"];
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
//[apiConfig setApiKeyPrefix:@"Bearer" forApiKeyIdentifier:@"Authorization"];


NSArray<NSNumber*>* *peerIds = @[[[NSArray<NSNumber> alloc] init]]; // Peer ids

SWGAdminApi *apiInstance = [[SWGAdminApi alloc] init];

// Remove peers on Peering Service
[apiInstance adminPeeringPeersDeleteWithPeerIds:peerIds
              completionHandler: ^(NSString* output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];

```

## Documentation for API Endpoints

All URIs are relative to *https://api.estuary.tech*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SWGAdminApi* | [**adminPeeringPeersDelete**](docs/SWGAdminApi.md#adminpeeringpeersdelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
*SWGAdminApi* | [**adminPeeringPeersGet**](docs/SWGAdminApi.md#adminpeeringpeersget) | **GET** /admin/peering/peers | List all Peering peers
*SWGAdminApi* | [**adminPeeringPeersPost**](docs/SWGAdminApi.md#adminpeeringpeerspost) | **POST** /admin/peering/peers | Add peers on Peering Service
*SWGAdminApi* | [**adminPeeringStartPost**](docs/SWGAdminApi.md#adminpeeringstartpost) | **POST** /admin/peering/start | Start Peering
*SWGAdminApi* | [**adminPeeringStatusGet**](docs/SWGAdminApi.md#adminpeeringstatusget) | **GET** /admin/peering/status | Check Peering Status
*SWGAdminApi* | [**adminPeeringStopPost**](docs/SWGAdminApi.md#adminpeeringstoppost) | **POST** /admin/peering/stop | Stop Peering
*SWGAdminApi* | [**adminSystemConfigGet**](docs/SWGAdminApi.md#adminsystemconfigget) | **GET** /admin/system/config | Get systems(estuary/shuttle) config
*SWGAdminApi* | [**adminUsersGet**](docs/SWGAdminApi.md#adminusersget) | **GET** /admin/users | Get all users
*SWGAutoretrieveApi* | [**adminAutoretrieveInitPost**](docs/SWGAutoretrieveApi.md#adminautoretrieveinitpost) | **POST** /admin/autoretrieve/init | Register autoretrieve server
*SWGAutoretrieveApi* | [**adminAutoretrieveListGet**](docs/SWGAutoretrieveApi.md#adminautoretrievelistget) | **GET** /admin/autoretrieve/list | List autoretrieve servers
*SWGAutoretrieveApi* | [**autoretrieveHeartbeatPost**](docs/SWGAutoretrieveApi.md#autoretrieveheartbeatpost) | **POST** /autoretrieve/heartbeat | Marks autoretrieve server as up
*SWGCollectionsApi* | [**collectionsColuuidCommitPost**](docs/SWGCollectionsApi.md#collectionscoluuidcommitpost) | **POST** /collections/{coluuid}/commit | Produce a CID of the collection contents
*SWGCollectionsApi* | [**collectionsColuuidContentsDelete**](docs/SWGCollectionsApi.md#collectionscoluuidcontentsdelete) | **DELETE** /collections/{coluuid}/contents | Deletes a content from a collection
*SWGCollectionsApi* | [**collectionsColuuidDelete**](docs/SWGCollectionsApi.md#collectionscoluuiddelete) | **DELETE** /collections/{coluuid} | Deletes a collection
*SWGCollectionsApi* | [**collectionsColuuidGet**](docs/SWGCollectionsApi.md#collectionscoluuidget) | **GET** /collections/{coluuid} | Get contents in a collection
*SWGCollectionsApi* | [**collectionsColuuidPost**](docs/SWGCollectionsApi.md#collectionscoluuidpost) | **POST** /collections/{coluuid} | Add contents to a collection
*SWGCollectionsApi* | [**collectionsFsAddPost**](docs/SWGCollectionsApi.md#collectionsfsaddpost) | **POST** /collections/fs/add | Add a file to a collection
*SWGCollectionsApi* | [**collectionsGet**](docs/SWGCollectionsApi.md#collectionsget) | **GET** /collections/ | List all collections
*SWGCollectionsApi* | [**collectionsPost**](docs/SWGCollectionsApi.md#collectionspost) | **POST** /collections/ | Create a new collection
*SWGContentApi* | [**contentAddCarPost**](docs/SWGContentApi.md#contentaddcarpost) | **POST** /content/add-car | Add Car object
*SWGContentApi* | [**contentAddIpfsPost**](docs/SWGContentApi.md#contentaddipfspost) | **POST** /content/add-ipfs | Add IPFS object
*SWGContentApi* | [**contentAddPost**](docs/SWGContentApi.md#contentaddpost) | **POST** /content/add | Add new content
*SWGContentApi* | [**contentAggregatedContentGet**](docs/SWGContentApi.md#contentaggregatedcontentget) | **GET** /content/aggregated/{content} | Get aggregated content stats
*SWGContentApi* | [**contentAllDealsGet**](docs/SWGContentApi.md#contentalldealsget) | **GET** /content/all-deals | Get all deals for a user
*SWGContentApi* | [**contentBwUsageContentGet**](docs/SWGContentApi.md#contentbwusagecontentget) | **GET** /content/bw-usage/{content} | Get content bandwidth
*SWGContentApi* | [**contentCreatePost**](docs/SWGContentApi.md#contentcreatepost) | **POST** /content/create | Add a new content
*SWGContentApi* | [**contentDealsGet**](docs/SWGContentApi.md#contentdealsget) | **GET** /content/deals | Content with deals
*SWGContentApi* | [**contentEnsureReplicationDatacidGet**](docs/SWGContentApi.md#contentensurereplicationdatacidget) | **GET** /content/ensure-replication/{datacid} | Ensure Replication
*SWGContentApi* | [**contentFailuresContentGet**](docs/SWGContentApi.md#contentfailurescontentget) | **GET** /content/failures/{content} | List all failures for a content
*SWGContentApi* | [**contentIdGet**](docs/SWGContentApi.md#contentidget) | **GET** /content/{id} | Content
*SWGContentApi* | [**contentImportdealPost**](docs/SWGContentApi.md#contentimportdealpost) | **POST** /content/importdeal | Import a deal
*SWGContentApi* | [**contentListGet**](docs/SWGContentApi.md#contentlistget) | **GET** /content/list | List all pinned content
*SWGContentApi* | [**contentReadContGet**](docs/SWGContentApi.md#contentreadcontget) | **GET** /content/read/{cont} | Read content
*SWGContentApi* | [**contentStagingZonesGet**](docs/SWGContentApi.md#contentstagingzonesget) | **GET** /content/staging-zones | Get staging zone for user
*SWGContentApi* | [**contentStatsGet**](docs/SWGContentApi.md#contentstatsget) | **GET** /content/stats | Get content statistics
*SWGContentApi* | [**contentStatusIdGet**](docs/SWGContentApi.md#contentstatusidget) | **GET** /content/status/{id} | Content Status
*SWGDealsApi* | [**dealEstimatePost**](docs/SWGDealsApi.md#dealestimatepost) | **POST** /deal/estimate | Estimate the cost of a deal
*SWGDealsApi* | [**dealInfoDealidGet**](docs/SWGDealsApi.md#dealinfodealidget) | **GET** /deal/info/{dealid} | Get Deal Info
*SWGDealsApi* | [**dealProposalPropcidGet**](docs/SWGDealsApi.md#dealproposalpropcidget) | **GET** /deal/proposal/{propcid} | Get Proposal
*SWGDealsApi* | [**dealQueryMinerGet**](docs/SWGDealsApi.md#dealqueryminerget) | **GET** /deal/query/{miner} | Query Ask
*SWGDealsApi* | [**dealStatusByProposalPropcidGet**](docs/SWGDealsApi.md#dealstatusbyproposalpropcidget) | **GET** /deal/status-by-proposal/{propcid} | Get Deal Status by PropCid
*SWGDealsApi* | [**dealStatusMinerPropcidGet**](docs/SWGDealsApi.md#dealstatusminerpropcidget) | **GET** /deal/status/{miner}/{propcid} | Deal Status
*SWGDealsApi* | [**dealTransferInProgressGet**](docs/SWGDealsApi.md#dealtransferinprogressget) | **GET** /deal/transfer/in-progress | Transfer In Progress
*SWGDealsApi* | [**dealTransferStatusPost**](docs/SWGDealsApi.md#dealtransferstatuspost) | **POST** /deal/transfer/status | Transfer Status
*SWGDealsApi* | [**dealsFailuresGet**](docs/SWGDealsApi.md#dealsfailuresget) | **GET** /deals/failures | Get storage failures for user
*SWGDealsApi* | [**dealsMakeMinerPost**](docs/SWGDealsApi.md#dealsmakeminerpost) | **POST** /deals/make/{miner} | Make Deal
*SWGDealsApi* | [**dealsStatusDealGet**](docs/SWGDealsApi.md#dealsstatusdealget) | **GET** /deals/status/{deal} | Get Deal Status
*SWGDealsApi* | [**publicDealsFailuresGet**](docs/SWGDealsApi.md#publicdealsfailuresget) | **GET** /public/deals/failures | Get storage failures
*SWGDealsApi* | [**publicMinersStorageQueryMinerGet**](docs/SWGDealsApi.md#publicminersstoragequeryminerget) | **GET** /public/miners/storage/query/{miner} | Query Ask
*SWGMetricsApi* | [**publicMetricsDealsOnChainGet**](docs/SWGMetricsApi.md#publicmetricsdealsonchainget) | **GET** /public/metrics/deals-on-chain | Get deal metrics
*SWGMinerApi* | [**publicMinersDealsMinerGet**](docs/SWGMinerApi.md#publicminersdealsminerget) | **GET** /public/miners/deals/{miner} | Get all miners deals
*SWGMinerApi* | [**publicMinersStatsMinerGet**](docs/SWGMinerApi.md#publicminersstatsminerget) | **GET** /public/miners/stats/{miner} | Get miner stats
*SWGNetApi* | [**netAddrsGet**](docs/SWGNetApi.md#netaddrsget) | **GET** /net/addrs | Net Addrs
*SWGNetApi* | [**publicMinersFailuresMinerGet**](docs/SWGNetApi.md#publicminersfailuresminerget) | **GET** /public/miners/failures/{miner} | Get all miners
*SWGNetApi* | [**publicMinersGet**](docs/SWGNetApi.md#publicminersget) | **GET** /public/miners | Get all miners
*SWGNetApi* | [**publicNetAddrsGet**](docs/SWGNetApi.md#publicnetaddrsget) | **GET** /public/net/addrs | Net Addrs
*SWGNetApi* | [**publicNetPeersGet**](docs/SWGNetApi.md#publicnetpeersget) | **GET** /public/net/peers | Net Peers
*SWGPeeringApi* | [**adminPeeringPeersDelete**](docs/SWGPeeringApi.md#adminpeeringpeersdelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
*SWGPeeringApi* | [**adminPeeringPeersGet**](docs/SWGPeeringApi.md#adminpeeringpeersget) | **GET** /admin/peering/peers | List all Peering peers
*SWGPeeringApi* | [**adminPeeringPeersPost**](docs/SWGPeeringApi.md#adminpeeringpeerspost) | **POST** /admin/peering/peers | Add peers on Peering Service
*SWGPeeringApi* | [**adminPeeringStartPost**](docs/SWGPeeringApi.md#adminpeeringstartpost) | **POST** /admin/peering/start | Start Peering
*SWGPeeringApi* | [**adminPeeringStatusGet**](docs/SWGPeeringApi.md#adminpeeringstatusget) | **GET** /admin/peering/status | Check Peering Status
*SWGPeeringApi* | [**adminPeeringStopPost**](docs/SWGPeeringApi.md#adminpeeringstoppost) | **POST** /admin/peering/stop | Stop Peering
*SWGPeersApi* | [**adminPeeringPeersDelete**](docs/SWGPeersApi.md#adminpeeringpeersdelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
*SWGPeersApi* | [**adminPeeringPeersGet**](docs/SWGPeersApi.md#adminpeeringpeersget) | **GET** /admin/peering/peers | List all Peering peers
*SWGPeersApi* | [**adminPeeringPeersPost**](docs/SWGPeersApi.md#adminpeeringpeerspost) | **POST** /admin/peering/peers | Add peers on Peering Service
*SWGPeersApi* | [**adminPeeringStartPost**](docs/SWGPeersApi.md#adminpeeringstartpost) | **POST** /admin/peering/start | Start Peering
*SWGPeersApi* | [**adminPeeringStatusGet**](docs/SWGPeersApi.md#adminpeeringstatusget) | **GET** /admin/peering/status | Check Peering Status
*SWGPeersApi* | [**adminPeeringStopPost**](docs/SWGPeersApi.md#adminpeeringstoppost) | **POST** /admin/peering/stop | Stop Peering
*SWGPinningApi* | [**pinningPinsGet**](docs/SWGPinningApi.md#pinningpinsget) | **GET** /pinning/pins | List all pin status objects
*SWGPinningApi* | [**pinningPinsPinidDelete**](docs/SWGPinningApi.md#pinningpinspiniddelete) | **DELETE** /pinning/pins/{pinid} | Delete a pinned object
*SWGPinningApi* | [**pinningPinsPinidGet**](docs/SWGPinningApi.md#pinningpinspinidget) | **GET** /pinning/pins/{pinid} | Get a pin status object
*SWGPinningApi* | [**pinningPinsPinidPost**](docs/SWGPinningApi.md#pinningpinspinidpost) | **POST** /pinning/pins/{pinid} | Replace a pinned object
*SWGPinningApi* | [**pinningPinsPost**](docs/SWGPinningApi.md#pinningpinspost) | **POST** /pinning/pins | Add and pin object
*SWGPublicApi* | [**publicByCidCidGet**](docs/SWGPublicApi.md#publicbycidcidget) | **GET** /public/by-cid/{cid} | Get Content by Cid
*SWGPublicApi* | [**publicInfoGet**](docs/SWGPublicApi.md#publicinfoget) | **GET** /public/info | Get public node info
*SWGPublicApi* | [**publicMetricsDealsOnChainGet**](docs/SWGPublicApi.md#publicmetricsdealsonchainget) | **GET** /public/metrics/deals-on-chain | Get deal metrics
*SWGPublicApi* | [**publicMinersDealsMinerGet**](docs/SWGPublicApi.md#publicminersdealsminerget) | **GET** /public/miners/deals/{miner} | Get all miners deals
*SWGPublicApi* | [**publicMinersFailuresMinerGet**](docs/SWGPublicApi.md#publicminersfailuresminerget) | **GET** /public/miners/failures/{miner} | Get all miners
*SWGPublicApi* | [**publicMinersGet**](docs/SWGPublicApi.md#publicminersget) | **GET** /public/miners | Get all miners
*SWGPublicApi* | [**publicMinersStatsMinerGet**](docs/SWGPublicApi.md#publicminersstatsminerget) | **GET** /public/miners/stats/{miner} | Get miner stats
*SWGPublicApi* | [**publicNetAddrsGet**](docs/SWGPublicApi.md#publicnetaddrsget) | **GET** /public/net/addrs | Net Addrs
*SWGPublicApi* | [**publicNetPeersGet**](docs/SWGPublicApi.md#publicnetpeersget) | **GET** /public/net/peers | Net Peers
*SWGPublicApi* | [**publicStatsGet**](docs/SWGPublicApi.md#publicstatsget) | **GET** /public/stats | Public stats
*SWGUserApi* | [**userApiKeysGet**](docs/SWGUserApi.md#userapikeysget) | **GET** /user/api-keys | Get API keys for a user
*SWGUserApi* | [**userApiKeysKeyOrHashDelete**](docs/SWGUserApi.md#userapikeyskeyorhashdelete) | **DELETE** /user/api-keys/{key_or_hash} | Revoke a User API Key.
*SWGUserApi* | [**userApiKeysPost**](docs/SWGUserApi.md#userapikeyspost) | **POST** /user/api-keys | Create API keys for a user
*SWGUserApi* | [**userExportGet**](docs/SWGUserApi.md#userexportget) | **GET** /user/export | Export user data
*SWGUserApi* | [**userStatsGet**](docs/SWGUserApi.md#userstatsget) | **GET** /user/stats | Create API keys for a user


## Documentation For Models

 - [SWGCollectionsCollection](docs/SWGCollectionsCollection.md)
 - [SWGMainChannelIDParam](docs/SWGMainChannelIDParam.md)
 - [SWGMainCreateCollectionBody](docs/SWGMainCreateCollectionBody.md)
 - [SWGMainDeleteContentFromCollectionBody](docs/SWGMainDeleteContentFromCollectionBody.md)
 - [SWGMainEstimateDealBody](docs/SWGMainEstimateDealBody.md)
 - [SWGMainGetApiKeysResp](docs/SWGMainGetApiKeysResp.md)
 - [SWGMainImportDealBody](docs/SWGMainImportDealBody.md)
 - [SWGTypesIpfsPin](docs/SWGTypesIpfsPin.md)
 - [SWGUtilContentAddIpfsBody](docs/SWGUtilContentAddIpfsBody.md)
 - [SWGUtilContentAddResponse](docs/SWGUtilContentAddResponse.md)
 - [SWGUtilContentCreateBody](docs/SWGUtilContentCreateBody.md)
 - [SWGUtilHttpError](docs/SWGUtilHttpError.md)


## Documentation For Authorization


## bearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author




