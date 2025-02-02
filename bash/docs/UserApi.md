# UserApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**userApiKeysGet**](UserApi.md#userApiKeysGet) | **GET** /user/api-keys | Get API keys for a user
[**userApiKeysKeyOrHashDelete**](UserApi.md#userApiKeysKeyOrHashDelete) | **DELETE** /user/api-keys/{key_or_hash} | Revoke a User API Key.
[**userApiKeysPost**](UserApi.md#userApiKeysPost) | **POST** /user/api-keys | Create API keys for a user
[**userExportGet**](UserApi.md#userExportGet) | **GET** /user/export | Export user data
[**userStatsGet**](UserApi.md#userStatsGet) | **GET** /user/stats | Create API keys for a user


## **userApiKeysGet**

Get API keys for a user

This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.

### Example
```bash
 userApiKeysGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

**array[array[Main.getApiKeysResp]]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **userApiKeysKeyOrHashDelete**

Revoke a User API Key.

This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that's assigned to the user. Revoked API keys are completely deleted and are not recoverable.

### Example
```bash
 userApiKeysKeyOrHashDelete key_or_hash=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyOrHash** | **string** | Key or Hash |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **userApiKeysPost**

Create API keys for a user

This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.

### Example
```bash
 userApiKeysPost  expiry=value  perms=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expiry** | **string** | Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h | [optional]
 **perms** | **string** | Permissions -- currently unused | [optional]

### Return type

[**Main.getApiKeysResp**](Main.getApiKeysResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **userExportGet**

Export user data

This endpoint is used to get API keys for a user.

### Example
```bash
 userExportGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **userStatsGet**

Create API keys for a user

This endpoint is used to create API keys for a user.

### Example
```bash
 userStatsGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

