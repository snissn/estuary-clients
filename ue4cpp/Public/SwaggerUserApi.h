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

#include "CoreMinimal.h"
#include "SwaggerBaseModel.h"

namespace Swagger 
{

class SWAGGER_API SwaggerUserApi
{
public:
	SwaggerUserApi();
	~SwaggerUserApi();

	void SetURL(const FString& Url);
	void AddHeaderParam(const FString& Key, const FString& Value);
	void ClearHeaderParams();

	class UserApiKeysGetRequest;
	class UserApiKeysGetResponse;
	class UserApiKeysKeyOrHashDeleteRequest;
	class UserApiKeysKeyOrHashDeleteResponse;
	class UserApiKeysPostRequest;
	class UserApiKeysPostResponse;
	class UserExportGetRequest;
	class UserExportGetResponse;
	class UserStatsGetRequest;
	class UserStatsGetResponse;
	
    DECLARE_DELEGATE_OneParam(FUserApiKeysGetDelegate, const UserApiKeysGetResponse&);
    DECLARE_DELEGATE_OneParam(FUserApiKeysKeyOrHashDeleteDelegate, const UserApiKeysKeyOrHashDeleteResponse&);
    DECLARE_DELEGATE_OneParam(FUserApiKeysPostDelegate, const UserApiKeysPostResponse&);
    DECLARE_DELEGATE_OneParam(FUserExportGetDelegate, const UserExportGetResponse&);
    DECLARE_DELEGATE_OneParam(FUserStatsGetDelegate, const UserStatsGetResponse&);
    
    bool UserApiKeysGet(const UserApiKeysGetRequest& Request, const FUserApiKeysGetDelegate& Delegate = FUserApiKeysGetDelegate()) const;
    bool UserApiKeysKeyOrHashDelete(const UserApiKeysKeyOrHashDeleteRequest& Request, const FUserApiKeysKeyOrHashDeleteDelegate& Delegate = FUserApiKeysKeyOrHashDeleteDelegate()) const;
    bool UserApiKeysPost(const UserApiKeysPostRequest& Request, const FUserApiKeysPostDelegate& Delegate = FUserApiKeysPostDelegate()) const;
    bool UserExportGet(const UserExportGetRequest& Request, const FUserExportGetDelegate& Delegate = FUserExportGetDelegate()) const;
    bool UserStatsGet(const UserStatsGetRequest& Request, const FUserStatsGetDelegate& Delegate = FUserStatsGetDelegate()) const;
    
private:
    void OnUserApiKeysGetResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FUserApiKeysGetDelegate Delegate) const;
    void OnUserApiKeysKeyOrHashDeleteResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FUserApiKeysKeyOrHashDeleteDelegate Delegate) const;
    void OnUserApiKeysPostResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FUserApiKeysPostDelegate Delegate) const;
    void OnUserExportGetResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FUserExportGetDelegate Delegate) const;
    void OnUserStatsGetResponse(FHttpRequestPtr HttpRequest, FHttpResponsePtr HttpResponse, bool bSucceeded, FUserStatsGetDelegate Delegate) const;
    
	bool IsValid() const;
	void HandleResponse(FHttpResponsePtr HttpResponse, bool bSucceeded, Response& InOutResponse) const;

	FString Url;
	TMap<FString,FString> AdditionalHeaderParams;
};
	
}
