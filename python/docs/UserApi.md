# estuary_client.UserApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_api_keys_get**](UserApi.md#user_api_keys_get) | **GET** /user/api-keys | Get API keys for a user
[**user_api_keys_key_or_hash_delete**](UserApi.md#user_api_keys_key_or_hash_delete) | **DELETE** /user/api-keys/{key_or_hash} | Revoke a User API Key.
[**user_api_keys_post**](UserApi.md#user_api_keys_post) | **POST** /user/api-keys | Create API keys for a user
[**user_export_get**](UserApi.md#user_export_get) | **GET** /user/export | Export user data
[**user_stats_get**](UserApi.md#user_stats_get) | **GET** /user/stats | Create API keys for a user


# **user_api_keys_get**
> list[list[MainGetApiKeysResp]] user_api_keys_get()

Get API keys for a user

This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.

### Example
```python
from __future__ import print_function
import time
import estuary_client
from estuary_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: bearerAuth
configuration = estuary_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = estuary_client.UserApi(estuary_client.ApiClient(configuration))

try:
    # Get API keys for a user
    api_response = api_instance.user_api_keys_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_api_keys_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[list[MainGetApiKeysResp]]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_api_keys_key_or_hash_delete**
> str user_api_keys_key_or_hash_delete(key_or_hash)

Revoke a User API Key.

This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that's assigned to the user. Revoked API keys are completely deleted and are not recoverable.

### Example
```python
from __future__ import print_function
import time
import estuary_client
from estuary_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: bearerAuth
configuration = estuary_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = estuary_client.UserApi(estuary_client.ApiClient(configuration))
key_or_hash = 'key_or_hash_example' # str | Key or Hash

try:
    # Revoke a User API Key.
    api_response = api_instance.user_api_keys_key_or_hash_delete(key_or_hash)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_api_keys_key_or_hash_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key_or_hash** | **str**| Key or Hash | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_api_keys_post**
> MainGetApiKeysResp user_api_keys_post(expiry=expiry, perms=perms)

Create API keys for a user

This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.

### Example
```python
from __future__ import print_function
import time
import estuary_client
from estuary_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: bearerAuth
configuration = estuary_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = estuary_client.UserApi(estuary_client.ApiClient(configuration))
expiry = 'expiry_example' # str | Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h (optional)
perms = 'perms_example' # str | Permissions -- currently unused (optional)

try:
    # Create API keys for a user
    api_response = api_instance.user_api_keys_post(expiry=expiry, perms=perms)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_api_keys_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expiry** | **str**| Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h | [optional] 
 **perms** | **str**| Permissions -- currently unused | [optional] 

### Return type

[**MainGetApiKeysResp**](MainGetApiKeysResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_export_get**
> str user_export_get()

Export user data

This endpoint is used to get API keys for a user.

### Example
```python
from __future__ import print_function
import time
import estuary_client
from estuary_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: bearerAuth
configuration = estuary_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = estuary_client.UserApi(estuary_client.ApiClient(configuration))

try:
    # Export user data
    api_response = api_instance.user_export_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_export_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_stats_get**
> str user_stats_get()

Create API keys for a user

This endpoint is used to create API keys for a user.

### Example
```python
from __future__ import print_function
import time
import estuary_client
from estuary_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: bearerAuth
configuration = estuary_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = estuary_client.UserApi(estuary_client.ApiClient(configuration))

try:
    # Create API keys for a user
    api_response = api_instance.user_stats_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_stats_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

