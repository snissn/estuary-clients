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
#include "SwaggerPinningApi.h"

#include "SwaggerPinningApiOperations.h"
#include "SwaggerModule.h"

#include "HttpModule.h"
#include "Serialization/JsonSerializer.h"

namespace Swagger 
{

SwaggerPinningApi::SwaggerPinningApi() 
: Url(TEXT("https://api.estuary.tech"))
{
}

SwaggerPinningApi::~SwaggerPinningApi() {}

void SwaggerPinningApi::SetURL(const FString& InUrl)
{
	Url = InUrl;
}

void SwaggerPinningApi::AddHeaderParam(const FString& Key, const FString& Value)
{
	AdditionalHeaderParams.Add(Key, Value);
}

void SwaggerPinningApi::ClearHeaderParams()
{
	AdditionalHeaderParams.Reset();
}

bool SwaggerPinningApi::IsValid() const
{
	if (Url.IsEmpty())
	{
		UE_LOG(LogSwagger, Error, TEXT("SwaggerPinningApi: Endpoint Url is not set, request cannot be performed"));
		return false;
	}

	return true;
}

void SwaggerPinningApi::HandleResponse(FHttpResponsePtr HttpResponse, bool bSucceeded, Response& InOutResponse) const
{
	InOutResponse.SetHttpResponse(HttpResponse);
	InOutResponse.SetSuccessful(bSucceeded);

	if (bSucceeded && HttpResponse.IsValid())
	{
		InOutResponse.SetHttpResponseCode((EHttpResponseCodes::Type)HttpResponse->GetResponseCode());
		FString ContentType = HttpResponse->GetContentType();
		FString Content;

		if (ContentType == TEXT("application/json"))
		{
			Content = HttpResponse->GetContentAsString();

			TSharedPtr<FJsonValue> JsonValue;
			auto Reader = TJsonReaderFactory<>::Create(Content);

			if (FJsonSerializer::Deserialize(Reader, JsonValue) && JsonValue.IsValid())
			{
				if (InOutResponse.FromJson(JsonValue))
					return; // Successfully parsed
			}
		}
		else if(ContentType == TEXT("text/plain"))
		{
			Content = HttpResponse->GetContentAsString();
			InOutResponse.SetResponseString(Content);
			return; // Successfully parsed
		}

		// Report the parse error but do not mark the request as unsuccessful. Data could be partial or malformed, but the request succeeded.
		UE_LOG(LogSwagger, Error, TEXT("Failed to deserialize Http response content (type:%s):\n%s"), *ContentType , *Content);
		return;
	}

	// By default, assume we failed to establish connection
	InOutResponse.SetHttpResponseCode(EHttpResponseCodes::RequestTimeout);
}

bool SwaggerPinningApi::PinningPinsGet(const PinningPinsGetRequest& Request, const FPinningPinsGetDelegate& Delegate /*= FPinningPinsGetDelegate()*/) const
{
	if (!IsValid())
		return false;

	TSharedRef<IHttpRequest> HttpRequest = FHttpModule::Get().CreateRequest();
	HttpRequest->SetURL(*(Url + Request.ComputePath()));

	for(const auto& It : AdditionalHeaderParams)
	{
		HttpRequest->SetHeader(It.Key, It.Value);
	}

	Request.SetupHttpRequest(HttpRequest);
	
	HttpRequest->OnProcessRequestComplete().BindRaw(this, &SwaggerPinningApi::OnPinningPinsGetResponse, Delegate);
	return HttpRequest->ProcessRequest();
}

void SwaggerPinningApi::OnPinningPinsGetResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FPinningPinsGetDelegate Delegate) const
{
	PinningPinsGetResponse Response;
	HandleResponse(HttpResponse, bSucceeded, Response);
	Delegate.ExecuteIfBound(Response);
}

bool SwaggerPinningApi::PinningPinsPinidDelete(const PinningPinsPinidDeleteRequest& Request, const FPinningPinsPinidDeleteDelegate& Delegate /*= FPinningPinsPinidDeleteDelegate()*/) const
{
	if (!IsValid())
		return false;

	TSharedRef<IHttpRequest> HttpRequest = FHttpModule::Get().CreateRequest();
	HttpRequest->SetURL(*(Url + Request.ComputePath()));

	for(const auto& It : AdditionalHeaderParams)
	{
		HttpRequest->SetHeader(It.Key, It.Value);
	}

	Request.SetupHttpRequest(HttpRequest);
	
	HttpRequest->OnProcessRequestComplete().BindRaw(this, &SwaggerPinningApi::OnPinningPinsPinidDeleteResponse, Delegate);
	return HttpRequest->ProcessRequest();
}

void SwaggerPinningApi::OnPinningPinsPinidDeleteResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FPinningPinsPinidDeleteDelegate Delegate) const
{
	PinningPinsPinidDeleteResponse Response;
	HandleResponse(HttpResponse, bSucceeded, Response);
	Delegate.ExecuteIfBound(Response);
}

bool SwaggerPinningApi::PinningPinsPinidGet(const PinningPinsPinidGetRequest& Request, const FPinningPinsPinidGetDelegate& Delegate /*= FPinningPinsPinidGetDelegate()*/) const
{
	if (!IsValid())
		return false;

	TSharedRef<IHttpRequest> HttpRequest = FHttpModule::Get().CreateRequest();
	HttpRequest->SetURL(*(Url + Request.ComputePath()));

	for(const auto& It : AdditionalHeaderParams)
	{
		HttpRequest->SetHeader(It.Key, It.Value);
	}

	Request.SetupHttpRequest(HttpRequest);
	
	HttpRequest->OnProcessRequestComplete().BindRaw(this, &SwaggerPinningApi::OnPinningPinsPinidGetResponse, Delegate);
	return HttpRequest->ProcessRequest();
}

void SwaggerPinningApi::OnPinningPinsPinidGetResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FPinningPinsPinidGetDelegate Delegate) const
{
	PinningPinsPinidGetResponse Response;
	HandleResponse(HttpResponse, bSucceeded, Response);
	Delegate.ExecuteIfBound(Response);
}

bool SwaggerPinningApi::PinningPinsPinidPost(const PinningPinsPinidPostRequest& Request, const FPinningPinsPinidPostDelegate& Delegate /*= FPinningPinsPinidPostDelegate()*/) const
{
	if (!IsValid())
		return false;

	TSharedRef<IHttpRequest> HttpRequest = FHttpModule::Get().CreateRequest();
	HttpRequest->SetURL(*(Url + Request.ComputePath()));

	for(const auto& It : AdditionalHeaderParams)
	{
		HttpRequest->SetHeader(It.Key, It.Value);
	}

	Request.SetupHttpRequest(HttpRequest);
	
	HttpRequest->OnProcessRequestComplete().BindRaw(this, &SwaggerPinningApi::OnPinningPinsPinidPostResponse, Delegate);
	return HttpRequest->ProcessRequest();
}

void SwaggerPinningApi::OnPinningPinsPinidPostResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FPinningPinsPinidPostDelegate Delegate) const
{
	PinningPinsPinidPostResponse Response;
	HandleResponse(HttpResponse, bSucceeded, Response);
	Delegate.ExecuteIfBound(Response);
}

bool SwaggerPinningApi::PinningPinsPost(const PinningPinsPostRequest& Request, const FPinningPinsPostDelegate& Delegate /*= FPinningPinsPostDelegate()*/) const
{
	if (!IsValid())
		return false;

	TSharedRef<IHttpRequest> HttpRequest = FHttpModule::Get().CreateRequest();
	HttpRequest->SetURL(*(Url + Request.ComputePath()));

	for(const auto& It : AdditionalHeaderParams)
	{
		HttpRequest->SetHeader(It.Key, It.Value);
	}

	Request.SetupHttpRequest(HttpRequest);
	
	HttpRequest->OnProcessRequestComplete().BindRaw(this, &SwaggerPinningApi::OnPinningPinsPostResponse, Delegate);
	return HttpRequest->ProcessRequest();
}

void SwaggerPinningApi::OnPinningPinsPostResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FPinningPinsPostDelegate Delegate) const
{
	PinningPinsPostResponse Response;
	HandleResponse(HttpResponse, bSucceeded, Response);
	Delegate.ExecuteIfBound(Response);
}

}