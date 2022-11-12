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
        public interface IMinerApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get all miners deals
        /// </summary>
        /// <remarks>
        /// This endpoint returns all miners deals
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>string</returns>
        string PublicMinersDealsMinerGet (string miner, string ignoreFailed = null);

        /// <summary>
        /// Get all miners deals
        /// </summary>
        /// <remarks>
        /// This endpoint returns all miners deals
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>ApiResponse of string</returns>
        ApiResponse<string> PublicMinersDealsMinerGetWithHttpInfo (string miner, string ignoreFailed = null);
        /// <summary>
        /// Get miner stats
        /// </summary>
        /// <remarks>
        /// This endpoint returns miner stats
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>string</returns>
        string PublicMinersStatsMinerGet (string miner);

        /// <summary>
        /// Get miner stats
        /// </summary>
        /// <remarks>
        /// This endpoint returns miner stats
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>ApiResponse of string</returns>
        ApiResponse<string> PublicMinersStatsMinerGetWithHttpInfo (string miner);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Get all miners deals
        /// </summary>
        /// <remarks>
        /// This endpoint returns all miners deals
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>Task of string</returns>
        System.Threading.Tasks.Task<string> PublicMinersDealsMinerGetAsync (string miner, string ignoreFailed = null);

        /// <summary>
        /// Get all miners deals
        /// </summary>
        /// <remarks>
        /// This endpoint returns all miners deals
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>Task of ApiResponse (string)</returns>
        System.Threading.Tasks.Task<ApiResponse<string>> PublicMinersDealsMinerGetAsyncWithHttpInfo (string miner, string ignoreFailed = null);
        /// <summary>
        /// Get miner stats
        /// </summary>
        /// <remarks>
        /// This endpoint returns miner stats
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>Task of string</returns>
        System.Threading.Tasks.Task<string> PublicMinersStatsMinerGetAsync (string miner);

        /// <summary>
        /// Get miner stats
        /// </summary>
        /// <remarks>
        /// This endpoint returns miner stats
        /// </remarks>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>Task of ApiResponse (string)</returns>
        System.Threading.Tasks.Task<ApiResponse<string>> PublicMinersStatsMinerGetAsyncWithHttpInfo (string miner);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
        public partial class MinerApi : IMinerApi
    {
        private estuary-client.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="MinerApi"/> class.
        /// </summary>
        /// <returns></returns>
        public MinerApi(String basePath)
        {
            this.Configuration = new estuary-client.Client.Configuration { BasePath = basePath };

            ExceptionFactory = estuary-client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MinerApi"/> class
        /// </summary>
        /// <returns></returns>
        public MinerApi()
        {
            this.Configuration = estuary-client.Client.Configuration.Default;

            ExceptionFactory = estuary-client.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MinerApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public MinerApi(estuary-client.Client.Configuration configuration = null)
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
        /// Get all miners deals This endpoint returns all miners deals
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>string</returns>
        public string PublicMinersDealsMinerGet (string miner, string ignoreFailed = null)
        {
             ApiResponse<string> localVarResponse = PublicMinersDealsMinerGetWithHttpInfo(miner, ignoreFailed);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get all miners deals This endpoint returns all miners deals
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>ApiResponse of string</returns>
        public ApiResponse< string > PublicMinersDealsMinerGetWithHttpInfo (string miner, string ignoreFailed = null)
        {
            // verify the required parameter 'miner' is set
            if (miner == null)
                throw new ApiException(400, "Missing required parameter 'miner' when calling MinerApi->PublicMinersDealsMinerGet");

            var localVarPath = "/public/miners/deals/{miner}";
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

            if (miner != null) localVarPathParams.Add("miner", this.Configuration.ApiClient.ParameterToString(miner)); // path parameter
            if (ignoreFailed != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "ignore-failed", ignoreFailed)); // query parameter
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
                Exception exception = ExceptionFactory("PublicMinersDealsMinerGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// Get all miners deals This endpoint returns all miners deals
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>Task of string</returns>
        public async System.Threading.Tasks.Task<string> PublicMinersDealsMinerGetAsync (string miner, string ignoreFailed = null)
        {
             ApiResponse<string> localVarResponse = await PublicMinersDealsMinerGetAsyncWithHttpInfo(miner, ignoreFailed);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get all miners deals This endpoint returns all miners deals
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <param name="ignoreFailed">Ignore Failed (optional)</param>
        /// <returns>Task of ApiResponse (string)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<string>> PublicMinersDealsMinerGetAsyncWithHttpInfo (string miner, string ignoreFailed = null)
        {
            // verify the required parameter 'miner' is set
            if (miner == null)
                throw new ApiException(400, "Missing required parameter 'miner' when calling MinerApi->PublicMinersDealsMinerGet");

            var localVarPath = "/public/miners/deals/{miner}";
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

            if (miner != null) localVarPathParams.Add("miner", this.Configuration.ApiClient.ParameterToString(miner)); // path parameter
            if (ignoreFailed != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "ignore-failed", ignoreFailed)); // query parameter
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
                Exception exception = ExceptionFactory("PublicMinersDealsMinerGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// Get miner stats This endpoint returns miner stats
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>string</returns>
        public string PublicMinersStatsMinerGet (string miner)
        {
             ApiResponse<string> localVarResponse = PublicMinersStatsMinerGetWithHttpInfo(miner);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get miner stats This endpoint returns miner stats
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>ApiResponse of string</returns>
        public ApiResponse< string > PublicMinersStatsMinerGetWithHttpInfo (string miner)
        {
            // verify the required parameter 'miner' is set
            if (miner == null)
                throw new ApiException(400, "Missing required parameter 'miner' when calling MinerApi->PublicMinersStatsMinerGet");

            var localVarPath = "/public/miners/stats/{miner}";
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

            if (miner != null) localVarPathParams.Add("miner", this.Configuration.ApiClient.ParameterToString(miner)); // path parameter
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
                Exception exception = ExceptionFactory("PublicMinersStatsMinerGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

        /// <summary>
        /// Get miner stats This endpoint returns miner stats
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>Task of string</returns>
        public async System.Threading.Tasks.Task<string> PublicMinersStatsMinerGetAsync (string miner)
        {
             ApiResponse<string> localVarResponse = await PublicMinersStatsMinerGetAsyncWithHttpInfo(miner);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get miner stats This endpoint returns miner stats
        /// </summary>
        /// <exception cref="estuary-client.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="miner">Filter by miner</param>
        /// <returns>Task of ApiResponse (string)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<string>> PublicMinersStatsMinerGetAsyncWithHttpInfo (string miner)
        {
            // verify the required parameter 'miner' is set
            if (miner == null)
                throw new ApiException(400, "Missing required parameter 'miner' when calling MinerApi->PublicMinersStatsMinerGet");

            var localVarPath = "/public/miners/stats/{miner}";
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

            if (miner != null) localVarPathParams.Add("miner", this.Configuration.ApiClient.ParameterToString(miner)); // path parameter
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
                Exception exception = ExceptionFactory("PublicMinersStatsMinerGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<string>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (string) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(string)));
        }

    }
}
