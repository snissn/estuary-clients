# WWW::SwaggerClient::UserApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::UserApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_api_keys_get**](UserApi.md#user_api_keys_get) | **GET** /user/api-keys | Get API keys for a user
[**user_api_keys_key_or_hash_delete**](UserApi.md#user_api_keys_key_or_hash_delete) | **DELETE** /user/api-keys/{key_or_hash} | Revoke a User API Key.
[**user_api_keys_post**](UserApi.md#user_api_keys_post) | **POST** /user/api-keys | Create API keys for a user
[**user_export_get**](UserApi.md#user_export_get) | **GET** /user/export | Export user data
[**user_stats_get**](UserApi.md#user_stats_get) | **GET** /user/stats | Create API keys for a user


# **user_api_keys_get**
> ARRAY[ARRAY[MainGetApiKeysResp]] user_api_keys_get()

Get API keys for a user

This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::UserApi;
my $api_instance = WWW::SwaggerClient::UserApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->user_api_keys_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling UserApi->user_api_keys_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**ARRAY[ARRAY[MainGetApiKeysResp]]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_api_keys_key_or_hash_delete**
> string user_api_keys_key_or_hash_delete(key_or_hash => $key_or_hash)

Revoke a User API Key.

This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that's assigned to the user. Revoked API keys are completely deleted and are not recoverable.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::UserApi;
my $api_instance = WWW::SwaggerClient::UserApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $key_or_hash = 'key_or_hash_example'; # string | Key or Hash

eval { 
    my $result = $api_instance->user_api_keys_key_or_hash_delete(key_or_hash => $key_or_hash);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling UserApi->user_api_keys_key_or_hash_delete: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_or_hash** | **string**| Key or Hash | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_api_keys_post**
> MainGetApiKeysResp user_api_keys_post(expiry => $expiry, perms => $perms)

Create API keys for a user

This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::UserApi;
my $api_instance = WWW::SwaggerClient::UserApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $expiry = 'expiry_example'; # string | Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h
my $perms = 'perms_example'; # string | Permissions -- currently unused

eval { 
    my $result = $api_instance->user_api_keys_post(expiry => $expiry, perms => $perms);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling UserApi->user_api_keys_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expiry** | **string**| Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h | [optional] 
 **perms** | **string**| Permissions -- currently unused | [optional] 

### Return type

[**MainGetApiKeysResp**](MainGetApiKeysResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_export_get**
> string user_export_get()

Export user data

This endpoint is used to get API keys for a user.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::UserApi;
my $api_instance = WWW::SwaggerClient::UserApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->user_export_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling UserApi->user_export_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_stats_get**
> string user_stats_get()

Create API keys for a user

This endpoint is used to create API keys for a user.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::UserApi;
my $api_instance = WWW::SwaggerClient::UserApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->user_stats_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling UserApi->user_stats_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

