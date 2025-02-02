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
#include "SwaggerNetApiOperations.h"

#include "SwaggerModule.h"
#include "SwaggerHelpers.h"

#include "Dom/JsonObject.h"
#include "Templates/SharedPointer.h"
#include "HttpModule.h"
#include "PlatformHttp.h"

namespace Swagger 
{

FString SwaggerNetApi::NetAddrsGetRequest::ComputePath() const
{
	FString Path(TEXT("/net/addrs"));
	return Path;
}

void SwaggerNetApi::NetAddrsGetRequest::SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const
{
	static const TArray<FString> Consumes = {  };
	//static const TArray<FString> Produces = { TEXT("application/json") };

	HttpRequest->SetVerb(TEXT("GET"));

	// Default to Json Body request
	if (Consumes.Num() == 0 || Consumes.Contains(TEXT("application/json")))
	{
	}
	else if (Consumes.Contains(TEXT("multipart/form-data")))
	{
	}
	else if (Consumes.Contains(TEXT("application/x-www-form-urlencoded")))
	{
	}
	else
	{
		UE_LOG(LogSwagger, Error, TEXT("Request ContentType not supported (%s)"), *FString::Join(Consumes, TEXT(",")));
	}
}

void SwaggerNetApi::NetAddrsGetResponse::SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode)
{
	Response::SetHttpResponseCode(InHttpResponseCode);
	switch ((int)InHttpResponseCode)
	{
	case 200:
	default:
		SetResponseString(TEXT("OK"));
		break;
	case 400:
		SetResponseString(TEXT("Bad Request"));
		break;
	case 500:
		SetResponseString(TEXT("Internal Server Error"));
		break;
	}
}

bool SwaggerNetApi::NetAddrsGetResponse::FromJson(const TSharedPtr<FJsonValue>& JsonValue)
{
	return TryGetJsonValue(JsonValue, Content);
}

FString SwaggerNetApi::PublicMinersFailuresMinerGetRequest::ComputePath() const
{
	TMap<FString, FStringFormatArg> PathParams = { 
	{ TEXT("miner"), ToStringFormatArg(Miner) } };

	FString Path = FString::Format(TEXT("/public/miners/failures/{miner}"), PathParams);
	
	return Path;
}

void SwaggerNetApi::PublicMinersFailuresMinerGetRequest::SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const
{
	static const TArray<FString> Consumes = {  };
	//static const TArray<FString> Produces = { TEXT("application/json") };

	HttpRequest->SetVerb(TEXT("GET"));

	// Default to Json Body request
	if (Consumes.Num() == 0 || Consumes.Contains(TEXT("application/json")))
	{
	}
	else if (Consumes.Contains(TEXT("multipart/form-data")))
	{
	}
	else if (Consumes.Contains(TEXT("application/x-www-form-urlencoded")))
	{
	}
	else
	{
		UE_LOG(LogSwagger, Error, TEXT("Request ContentType not supported (%s)"), *FString::Join(Consumes, TEXT(",")));
	}
}

void SwaggerNetApi::PublicMinersFailuresMinerGetResponse::SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode)
{
	Response::SetHttpResponseCode(InHttpResponseCode);
	switch ((int)InHttpResponseCode)
	{
	case 200:
	default:
		SetResponseString(TEXT("OK"));
		break;
	case 400:
		SetResponseString(TEXT("Bad Request"));
		break;
	case 500:
		SetResponseString(TEXT("Internal Server Error"));
		break;
	}
}

bool SwaggerNetApi::PublicMinersFailuresMinerGetResponse::FromJson(const TSharedPtr<FJsonValue>& JsonValue)
{
	return TryGetJsonValue(JsonValue, Content);
}

FString SwaggerNetApi::PublicMinersGetRequest::ComputePath() const
{
	FString Path(TEXT("/public/miners"));
	return Path;
}

void SwaggerNetApi::PublicMinersGetRequest::SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const
{
	static const TArray<FString> Consumes = {  };
	//static const TArray<FString> Produces = { TEXT("application/json") };

	HttpRequest->SetVerb(TEXT("GET"));

	// Default to Json Body request
	if (Consumes.Num() == 0 || Consumes.Contains(TEXT("application/json")))
	{
	}
	else if (Consumes.Contains(TEXT("multipart/form-data")))
	{
	}
	else if (Consumes.Contains(TEXT("application/x-www-form-urlencoded")))
	{
	}
	else
	{
		UE_LOG(LogSwagger, Error, TEXT("Request ContentType not supported (%s)"), *FString::Join(Consumes, TEXT(",")));
	}
}

void SwaggerNetApi::PublicMinersGetResponse::SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode)
{
	Response::SetHttpResponseCode(InHttpResponseCode);
	switch ((int)InHttpResponseCode)
	{
	case 200:
	default:
		SetResponseString(TEXT("OK"));
		break;
	case 400:
		SetResponseString(TEXT("Bad Request"));
		break;
	case 500:
		SetResponseString(TEXT("Internal Server Error"));
		break;
	}
}

bool SwaggerNetApi::PublicMinersGetResponse::FromJson(const TSharedPtr<FJsonValue>& JsonValue)
{
	return TryGetJsonValue(JsonValue, Content);
}

FString SwaggerNetApi::PublicNetAddrsGetRequest::ComputePath() const
{
	FString Path(TEXT("/public/net/addrs"));
	return Path;
}

void SwaggerNetApi::PublicNetAddrsGetRequest::SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const
{
	static const TArray<FString> Consumes = {  };
	//static const TArray<FString> Produces = { TEXT("application/json") };

	HttpRequest->SetVerb(TEXT("GET"));

	// Default to Json Body request
	if (Consumes.Num() == 0 || Consumes.Contains(TEXT("application/json")))
	{
	}
	else if (Consumes.Contains(TEXT("multipart/form-data")))
	{
	}
	else if (Consumes.Contains(TEXT("application/x-www-form-urlencoded")))
	{
	}
	else
	{
		UE_LOG(LogSwagger, Error, TEXT("Request ContentType not supported (%s)"), *FString::Join(Consumes, TEXT(",")));
	}
}

void SwaggerNetApi::PublicNetAddrsGetResponse::SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode)
{
	Response::SetHttpResponseCode(InHttpResponseCode);
	switch ((int)InHttpResponseCode)
	{
	case 200:
	default:
		SetResponseString(TEXT("OK"));
		break;
	}
}

bool SwaggerNetApi::PublicNetAddrsGetResponse::FromJson(const TSharedPtr<FJsonValue>& JsonValue)
{
	return TryGetJsonValue(JsonValue, Content);
}

FString SwaggerNetApi::PublicNetPeersGetRequest::ComputePath() const
{
	FString Path(TEXT("/public/net/peers"));
	return Path;
}

void SwaggerNetApi::PublicNetPeersGetRequest::SetupHttpRequest(const TSharedRef<IHttpRequest>& HttpRequest) const
{
	static const TArray<FString> Consumes = {  };
	//static const TArray<FString> Produces = { TEXT("application/json") };

	HttpRequest->SetVerb(TEXT("GET"));

	// Default to Json Body request
	if (Consumes.Num() == 0 || Consumes.Contains(TEXT("application/json")))
	{
	}
	else if (Consumes.Contains(TEXT("multipart/form-data")))
	{
	}
	else if (Consumes.Contains(TEXT("application/x-www-form-urlencoded")))
	{
	}
	else
	{
		UE_LOG(LogSwagger, Error, TEXT("Request ContentType not supported (%s)"), *FString::Join(Consumes, TEXT(",")));
	}
}

void SwaggerNetApi::PublicNetPeersGetResponse::SetHttpResponseCode(EHttpResponseCodes::Type InHttpResponseCode)
{
	Response::SetHttpResponseCode(InHttpResponseCode);
	switch ((int)InHttpResponseCode)
	{
	case 200:
	default:
		SetResponseString(TEXT("OK"));
		break;
	case 400:
		SetResponseString(TEXT("Bad Request"));
		break;
	case 500:
		SetResponseString(TEXT("Internal Server Error"));
		break;
	}
}

bool SwaggerNetApi::PublicNetPeersGetResponse::FromJson(const TSharedPtr<FJsonValue>& JsonValue)
{
	return TryGetJsonValue(JsonValue, Content);
}

}
