# estuary-client.Api.PinningApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PinningPinsGet**](PinningApi.md#pinningpinsget) | **GET** /pinning/pins | List all pin status objects
[**PinningPinsPinidDelete**](PinningApi.md#pinningpinspiniddelete) | **DELETE** /pinning/pins/{pinid} | Delete a pinned object
[**PinningPinsPinidGet**](PinningApi.md#pinningpinspinidget) | **GET** /pinning/pins/{pinid} | Get a pin status object
[**PinningPinsPinidPost**](PinningApi.md#pinningpinspinidpost) | **POST** /pinning/pins/{pinid} | Replace a pinned object
[**PinningPinsPost**](PinningApi.md#pinningpinspost) | **POST** /pinning/pins | Add and pin object


<a name="pinningpinsget"></a>
# **PinningPinsGet**
> string PinningPinsGet ()

List all pin status objects

This endpoint lists all pin status objects

### Example
```csharp
using System;
using System.Diagnostics;
using estuary-client.Api;
using estuary-client.Client;
using estuary-client.Model;

namespace Example
{
    public class PinningPinsGetExample
    {
        public void main()
        {
            // Configure API key authorization: bearerAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new PinningApi();

            try
            {
                // List all pin status objects
                string result = apiInstance.PinningPinsGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PinningApi.PinningPinsGet: " + e.Message );
            }
        }
    }
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

<a name="pinningpinspiniddelete"></a>
# **PinningPinsPinidDelete**
> string PinningPinsPinidDelete (string pinid)

Delete a pinned object

This endpoint deletes a pinned object.

### Example
```csharp
using System;
using System.Diagnostics;
using estuary-client.Api;
using estuary-client.Client;
using estuary-client.Model;

namespace Example
{
    public class PinningPinsPinidDeleteExample
    {
        public void main()
        {
            // Configure API key authorization: bearerAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new PinningApi();
            var pinid = pinid_example;  // string | Pin ID

            try
            {
                // Delete a pinned object
                string result = apiInstance.PinningPinsPinidDelete(pinid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PinningApi.PinningPinsPinidDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **string**| Pin ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="pinningpinspinidget"></a>
# **PinningPinsPinidGet**
> string PinningPinsPinidGet (string pinid)

Get a pin status object

This endpoint returns a pin status object.

### Example
```csharp
using System;
using System.Diagnostics;
using estuary-client.Api;
using estuary-client.Client;
using estuary-client.Model;

namespace Example
{
    public class PinningPinsPinidGetExample
    {
        public void main()
        {
            // Configure API key authorization: bearerAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new PinningApi();
            var pinid = pinid_example;  // string | cid

            try
            {
                // Get a pin status object
                string result = apiInstance.PinningPinsPinidGet(pinid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PinningApi.PinningPinsPinidGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **string**| cid | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="pinningpinspinidpost"></a>
# **PinningPinsPinidPost**
> string PinningPinsPinidPost (string pinid)

Replace a pinned object

This endpoint replaces a pinned object.

### Example
```csharp
using System;
using System.Diagnostics;
using estuary-client.Api;
using estuary-client.Client;
using estuary-client.Model;

namespace Example
{
    public class PinningPinsPinidPostExample
    {
        public void main()
        {
            // Configure API key authorization: bearerAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new PinningApi();
            var pinid = pinid_example;  // string | Pin ID

            try
            {
                // Replace a pinned object
                string result = apiInstance.PinningPinsPinidPost(pinid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PinningApi.PinningPinsPinidPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **string**| Pin ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="pinningpinspost"></a>
# **PinningPinsPost**
> string PinningPinsPost (TypesIpfsPin pin)

Add and pin object

This endpoint adds a pin to the IPFS daemon.

### Example
```csharp
using System;
using System.Diagnostics;
using estuary-client.Api;
using estuary-client.Client;
using estuary-client.Model;

namespace Example
{
    public class PinningPinsPostExample
    {
        public void main()
        {
            // Configure API key authorization: bearerAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new PinningApi();
            var pin = new TypesIpfsPin(); // TypesIpfsPin | Pin Body {cid:cid, name:name}

            try
            {
                // Add and pin object
                string result = apiInstance.PinningPinsPost(pin);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PinningApi.PinningPinsPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | [**TypesIpfsPin**](TypesIpfsPin.md)| Pin Body {cid:cid, name:name} | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

