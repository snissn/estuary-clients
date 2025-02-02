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
#pragma once

#include "SwaggerBaseModel.h"
#include "SwaggerPublicApi.h"

#include "SwaggerUtil_HttpError.h"

namespace Swagger 
{

/* Get Content by Cid
 *
 * This endpoint returns the content associated with a CID
*/
class SWAGGER_API SwaggerPublicApi::PublicByCidCidGetRequest : public Request
{
public:
    virtual ~PublicByCidCidGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
	/* Cid */
	FString Cid;
};

class SWAGGER_API SwaggerPublicApi::PublicByCidCidGetResponse : public Response
{
public:
    virtual ~PublicByCidCidGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

/* Get public node info
 *
 * This endpoint returns information about the node
*/
class SWAGGER_API SwaggerPublicApi::PublicInfoGetRequest : public Request
{
public:
    virtual ~PublicInfoGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
};

class SWAGGER_API SwaggerPublicApi::PublicInfoGetResponse : public Response
{
public:
    virtual ~PublicInfoGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

/* Get deal metrics
 *
 * This endpoint is used to get deal metrics
*/
class SWAGGER_API SwaggerPublicApi::PublicMetricsDealsOnChainGetRequest : public Request
{
public:
    virtual ~PublicMetricsDealsOnChainGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
};

class SWAGGER_API SwaggerPublicApi::PublicMetricsDealsOnChainGetResponse : public Response
{
public:
    virtual ~PublicMetricsDealsOnChainGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

/* Get all miners deals
 *
 * This endpoint returns all miners deals
*/
class SWAGGER_API SwaggerPublicApi::PublicMinersDealsMinerGetRequest : public Request
{
public:
    virtual ~PublicMinersDealsMinerGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
	/* Filter by miner */
	FString Miner;
	/* Ignore Failed */
	TOptional<FString> IgnoreFailed;
};

class SWAGGER_API SwaggerPublicApi::PublicMinersDealsMinerGetResponse : public Response
{
public:
    virtual ~PublicMinersDealsMinerGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

/* Get all miners
 *
 * This endpoint returns all miners
*/
class SWAGGER_API SwaggerPublicApi::PublicMinersFailuresMinerGetRequest : public Request
{
public:
    virtual ~PublicMinersFailuresMinerGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
	/* Filter by miner */
	FString Miner;
};

class SWAGGER_API SwaggerPublicApi::PublicMinersFailuresMinerGetResponse : public Response
{
public:
    virtual ~PublicMinersFailuresMinerGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

/* Get all miners
 *
 * This endpoint returns all miners
*/
class SWAGGER_API SwaggerPublicApi::PublicMinersGetRequest : public Request
{
public:
    virtual ~PublicMinersGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
};

class SWAGGER_API SwaggerPublicApi::PublicMinersGetResponse : public Response
{
public:
    virtual ~PublicMinersGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

/* Get miner stats
 *
 * This endpoint returns miner stats
*/
class SWAGGER_API SwaggerPublicApi::PublicMinersStatsMinerGetRequest : public Request
{
public:
    virtual ~PublicMinersStatsMinerGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
	/* Filter by miner */
	FString Miner;
};

class SWAGGER_API SwaggerPublicApi::PublicMinersStatsMinerGetResponse : public Response
{
public:
    virtual ~PublicMinersStatsMinerGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

/* Net Addrs
 *
 * This endpoint is used to get net addrs
*/
class SWAGGER_API SwaggerPublicApi::PublicNetAddrsGetRequest : public Request
{
public:
    virtual ~PublicNetAddrsGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
};

class SWAGGER_API SwaggerPublicApi::PublicNetAddrsGetResponse : public Response
{
public:
    virtual ~PublicNetAddrsGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    TArray<FString> Content;
};

/* Net Peers
 *
 * This endpoint is used to get net peers
*/
class SWAGGER_API SwaggerPublicApi::PublicNetPeersGetRequest : public Request
{
public:
    virtual ~PublicNetPeersGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
};

class SWAGGER_API SwaggerPublicApi::PublicNetPeersGetResponse : public Response
{
public:
    virtual ~PublicNetPeersGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    TArray<FString> Content;
};

/* Public stats
 *
 * This endpoint is used to get public stats.
*/
class SWAGGER_API SwaggerPublicApi::PublicStatsGetRequest : public Request
{
public:
    virtual ~PublicStatsGetRequest() {}
	void SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const final;
	FString ComputePath() const final;
    
};

class SWAGGER_API SwaggerPublicApi::PublicStatsGetResponse : public Response
{
public:
    virtual ~PublicStatsGetResponse() {}
	void SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode) final;
	bool FromJson(const TSharedPtr<FJsonValue>& JsonObject) final;
    
    FString Content;
};

}
