/* 
 * Estuary API
 *
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp;
using estuary-client.Client;
using estuary-client.Model;

namespace estuary-client.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
        public interface IAutoretrieveApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Register autoretrieve server
        /// </summary>
        /// <remarks>
        /// This endpoint registers a new autoretrieve server
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>string</returns>
        string AdminAutoretrieveInitPost (string addresses, string pubKey);

        /// <summary>
        /// Register autoretrieve server
        /// </summary>
        /// <remarks>
        /// This endpoint registers a new autoretrieve server
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>ApiResponse of string</returns>
        ApiResponse<string> AdminAutoretrieveInitPostWithHttpInfo (string addresses, string pubKey);
        /// <summary>
        /// List autoretrieve servers
        /// </summary>
        /// <remarks>
        /// This endpoint lists all registered autoretrieve servers
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>string</returns>
        string AdminAutoretrieveListGet ();

        /// <summary>
        /// List autoretrieve servers
        /// </summary>
        /// <remarks>
        /// This endpoint lists all registered autoretrieve servers
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of string</returns>
        ApiResponse<string> AdminAutoretrieveListGetWithHttpInfo ();
        /// <summary>
        /// Marks autoretrieve server as up
        /// </summary>
        /// <remarks>
        /// This endpoint updates the lastConnection field for autoretrieve
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>string</returns>
        string AutoretrieveHeartbeatPost (string token);

        /// <summary>
        /// Marks autoretrieve server as up
        /// </summary>
        /// <remarks>
        /// This endpoint updates the lastConnection field for autoretrieve
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>ApiResponse of string</returns>
        ApiResponse<string> AutoretrieveHeartbeatPostWithHttpInfo (string token);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Register autoretrieve server
        /// </summary>
        /// <remarks>
        /// This endpoint registers a new autoretrieve server
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>Task of string</returns>
        System.Threading.Tasks.Task<string> AdminAutoretrieveInitPostAsync (string addresses, string pubKey);

        /// <summary>
        /// Register autoretrieve server
        /// </summary>
        /// <remarks>
        /// This endpoint registers a new autoretrieve server
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>Task of ApiResponse (string)</returns>
        System.Threading.Tasks.Task<ApiResponse<string>> AdminAutoretrieveInitPostAsyncWithHttpInfo (string addresses, string pubKey);
        /// <summary>
        /// List autoretrieve servers
        /// </summary>
        /// <remarks>
        /// This endpoint lists all registered autoretrieve servers
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of string</returns>
        System.Threading.Tasks.Task<string> AdminAutoretrieveListGetAsync ();

        /// <summary>
        /// List autoretrieve servers
        /// </summary>
        /// <remarks>
        /// This endpoint lists all registered autoretrieve servers
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (string)</returns>
        System.Threading.Tasks.Task<ApiResponse<string>> AdminAutoretrieveListGetAsyncWithHttpInfo ();
        /// <summary>
        /// Marks autoretrieve server as up
        /// </summary>
        /// <remarks>
        /// This endpoint updates the lastConnection field for autoretrieve
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>Task of string</returns>
        System.Threading.Tasks.Task<string> AutoretrieveHeartbeatPostAsync (string token);

        /// <summary>
        /// Marks autoretrieve server as up
        /// </summary>
        /// <remarks>
        /// This endpoint updates the lastConnection field for autoretrieve
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>Task of ApiResponse (string)</returns>
        System.Threading.Tasks.Task<ApiResponse<string>> AutoretrieveHeartbeatPostAsyncWithHttpInfo (string token);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
        public partial class AutoretrieveApi : IAutoretrieveApi
    {
        private estuary-client.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="AutoretrieveApi"/> class.
        /// </summary>
        /// <returns></returns>
        public AutoretrieveApi(String basePath)
        {
            this.Configuration = new estuary-client.Client.Configuration { BasePath = basePath };

            ExceptionFactory = estuary-client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AutoretrieveApi"/> class
        /// </summary>
        /// <returns></returns>
        public AutoretrieveApi()
        {
            this.Configuration = estuary-client.Client.Configuration.Default;

            ExceptionFactory = estuary-client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AutoretrieveApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public AutoretrieveApi(estuary-client.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = estuary-client.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = estuary-client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public estuary-client.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public estuary-client.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        /// Register autoretrieve server This endpoint registers a new autoretrieve server
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>string</returns>
        public string AdminAutoretrieveInitPost (string addresses, string pubKey)
        {
             ApiResponse<string> localVarResponse = AdminAutoretrieveInitPostWithHttpInfo(addresses, pubKey);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Register autoretrieve server This endpoint registers a new autoretrieve server
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>ApiResponse of string</returns>
        public ApiResponse< string > AdminAutoretrieveInitPostWithHttpInfo (string addresses, string pubKey)
        {
            // verify the required parameter 'addresses' is set
            if (addresses == null)
                throw new ApiException(400, "Missing required parameter 'addresses' when calling AutoretrieveApi->AdminAutoretrieveInitPost");
            // verify the required parameter 'pubKey' is set
            if (pubKey == null)
                throw new ApiException(400, "Missing required parameter 'pubKey' when calling AutoretrieveApi->AdminAutoretrieveInitPost");

            var localVarPath = "/admin/autoretrieve/init";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "multipart/form-data"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (addresses != null) localVarFormParams.Add("addresses", this.Configuration.ApiClient.ParameterToString(addresses)); // form parameter
            if (pubKey != null) localVarFormParams.Add("pubKey", this.Configuration.ApiClient.ParameterToString(pubKey)); // form parameter
            // authentication (bearerAuth) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Authorization")))
            {
                localVarHeaderParams["Authorization"] = this.Configuration.GetApiKeyWithPrefix("Authorization");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AdminAutoretrieveInitPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// Register autoretrieve server This endpoint registers a new autoretrieve server
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>Task of string</returns>
        public async System.Threading.Tasks.Task<string> AdminAutoretrieveInitPostAsync (string addresses, string pubKey)
        {
             ApiResponse<string> localVarResponse = await AdminAutoretrieveInitPostAsyncWithHttpInfo(addresses, pubKey);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Register autoretrieve server This endpoint registers a new autoretrieve server
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="addresses"></param>
        /// <param name="pubKey"></param>
        /// <returns>Task of ApiResponse (string)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<string>> AdminAutoretrieveInitPostAsyncWithHttpInfo (string addresses, string pubKey)
        {
            // verify the required parameter 'addresses' is set
            if (addresses == null)
                throw new ApiException(400, "Missing required parameter 'addresses' when calling AutoretrieveApi->AdminAutoretrieveInitPost");
            // verify the required parameter 'pubKey' is set
            if (pubKey == null)
                throw new ApiException(400, "Missing required parameter 'pubKey' when calling AutoretrieveApi->AdminAutoretrieveInitPost");

            var localVarPath = "/admin/autoretrieve/init";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "multipart/form-data"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (addresses != null) localVarFormParams.Add("addresses", this.Configuration.ApiClient.ParameterToString(addresses)); // form parameter
            if (pubKey != null) localVarFormParams.Add("pubKey", this.Configuration.ApiClient.ParameterToString(pubKey)); // form parameter
            // authentication (bearerAuth) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Authorization")))
            {
                localVarHeaderParams["Authorization"] = this.Configuration.GetApiKeyWithPrefix("Authorization");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AdminAutoretrieveInitPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// List autoretrieve servers This endpoint lists all registered autoretrieve servers
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>string</returns>
        public string AdminAutoretrieveListGet ()
        {
             ApiResponse<string> localVarResponse = AdminAutoretrieveListGetWithHttpInfo();
             return localVarResponse.Data;
        }

        /// <summary>
        /// List autoretrieve servers This endpoint lists all registered autoretrieve servers
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of string</returns>
        public ApiResponse< string > AdminAutoretrieveListGetWithHttpInfo ()
        {

            var localVarPath = "/admin/autoretrieve/list";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            // authentication (bearerAuth) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Authorization")))
            {
                localVarHeaderParams["Authorization"] = this.Configuration.GetApiKeyWithPrefix("Authorization");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AdminAutoretrieveListGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// List autoretrieve servers This endpoint lists all registered autoretrieve servers
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of string</returns>
        public async System.Threading.Tasks.Task<string> AdminAutoretrieveListGetAsync ()
        {
             ApiResponse<string> localVarResponse = await AdminAutoretrieveListGetAsyncWithHttpInfo();
             return localVarResponse.Data;

        }

        /// <summary>
        /// List autoretrieve servers This endpoint lists all registered autoretrieve servers
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>Task of ApiResponse (string)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<string>> AdminAutoretrieveListGetAsyncWithHttpInfo ()
        {

            var localVarPath = "/admin/autoretrieve/list";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            // authentication (bearerAuth) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Authorization")))
            {
                localVarHeaderParams["Authorization"] = this.Configuration.GetApiKeyWithPrefix("Authorization");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AdminAutoretrieveListGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// Marks autoretrieve server as up This endpoint updates the lastConnection field for autoretrieve
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>string</returns>
        public string AutoretrieveHeartbeatPost (string token)
        {
             ApiResponse<string> localVarResponse = AutoretrieveHeartbeatPostWithHttpInfo(token);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Marks autoretrieve server as up This endpoint updates the lastConnection field for autoretrieve
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>ApiResponse of string</returns>
        public ApiResponse< string > AutoretrieveHeartbeatPostWithHttpInfo (string token)
        {
            // verify the required parameter 'token' is set
            if (token == null)
                throw new ApiException(400, "Missing required parameter 'token' when calling AutoretrieveApi->AutoretrieveHeartbeatPost");

            var localVarPath = "/autoretrieve/heartbeat";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (token != null) localVarHeaderParams.Add("token", this.Configuration.ApiClient.ParameterToString(token)); // header parameter
            // authentication (bearerAuth) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Authorization")))
            {
                localVarHeaderParams["Authorization"] = this.Configuration.GetApiKeyWithPrefix("Authorization");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AutoretrieveHeartbeatPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// Marks autoretrieve server as up This endpoint updates the lastConnection field for autoretrieve
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>Task of string</returns>
        public async System.Threading.Tasks.Task<string> AutoretrieveHeartbeatPostAsync (string token)
        {
             ApiResponse<string> localVarResponse = await AutoretrieveHeartbeatPostAsyncWithHttpInfo(token);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Marks autoretrieve server as up This endpoint updates the lastConnection field for autoretrieve
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="token">Autoretrieve&#x27;s auth token</param>
        /// <returns>Task of ApiResponse (string)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<string>> AutoretrieveHeartbeatPostAsyncWithHttpInfo (string token)
        {
            // verify the required parameter 'token' is set
            if (token == null)
                throw new ApiException(400, "Missing required parameter 'token' when calling AutoretrieveApi->AutoretrieveHeartbeatPost");

            var localVarPath = "/autoretrieve/heartbeat";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (token != null) localVarHeaderParams.Add("token", this.Configuration.ApiClient.ParameterToString(token)); // header parameter
            // authentication (bearerAuth) required
            if (!String.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("Authorization")))
            {
                localVarHeaderParams["Authorization"] = this.Configuration.GetApiKeyWithPrefix("Authorization");
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AutoretrieveHeartbeatPost", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

    }
}
