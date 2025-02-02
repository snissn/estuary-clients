//
// MetricsAPI.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Alamofire



public class MetricsAPI: APIBase {
    /**
     Get deal metrics
     
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func publicMetricsDealsOnChainGet(completion: ((data: String?, error: ErrorType?) -> Void)) {
        publicMetricsDealsOnChainGetWithRequestBuilder().execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Get deal metrics
     - GET /public/metrics/deals-on-chain
     - This endpoint is used to get deal metrics
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "bytes": [],
  "empty": true
}}]

     - returns: RequestBuilder<String> 
     */
    public class func publicMetricsDealsOnChainGetWithRequestBuilder() -> RequestBuilder<String> {
        let path = "/public/metrics/deals-on-chain"
        let URLString = estuary-clientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [:]
 
        let parameters = APIHelper.rejectNil(nillableParameters)
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<String>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

}
