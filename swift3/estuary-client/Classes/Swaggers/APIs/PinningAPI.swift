//
// PinningAPI.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation
import Alamofire


open class PinningAPI: APIBase {
    /**
     List all pin status objects
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func pinningPinsGet(completion: @escaping ((_ data: TypesIpfsListPinStatusResponse?, _ error: ErrorResponse?) -> Void)) {
        pinningPinsGetWithRequestBuilder().execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     List all pin status objects
     - GET /pinning/pins
     - This endpoint lists all pin status objects
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "count" : 0,
  "results" : [ {
    "pin" : {
      "meta" : { },
      "name" : "name",
      "origins" : [ "origins", "origins" ],
      "cid" : "cid"
    },
    "created" : "created",
    "requestid" : "requestid",
    "delegates" : [ "delegates", "delegates" ],
    "info" : { },
    "status" : "status"
  }, {
    "pin" : {
      "meta" : { },
      "name" : "name",
      "origins" : [ "origins", "origins" ],
      "cid" : "cid"
    },
    "created" : "created",
    "requestid" : "requestid",
    "delegates" : [ "delegates", "delegates" ],
    "info" : { },
    "status" : "status"
  } ]
}}]
     - returns: RequestBuilder<TypesIpfsListPinStatusResponse> 
     */
    open class func pinningPinsGetWithRequestBuilder() -> RequestBuilder<TypesIpfsListPinStatusResponse> {
        let path = "/pinning/pins"
        let URLString = estuary-clientAPI.basePath + path
        let parameters: [String:Any]? = nil

        let url = URLComponents(string: URLString)

        let requestBuilder: RequestBuilder<TypesIpfsListPinStatusResponse>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

    /**
     Delete a pinned object
     - parameter pinid: (path) Pin ID 
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func pinningPinsPinidDelete(pinid: String, completion: @escaping ((_ error: ErrorResponse?) -> Void)) {
        pinningPinsPinidDeleteWithRequestBuilder(pinid: pinid).execute { (response, error) -> Void in
            completion(error)
        }
    }


    /**
     Delete a pinned object
     - DELETE /pinning/pins/{pinid}
     - This endpoint deletes a pinned object.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - parameter pinid: (path) Pin ID 
     - returns: RequestBuilder<Void> 
     */
    open class func pinningPinsPinidDeleteWithRequestBuilder(pinid: String) -> RequestBuilder<Void> {
        var path = "/pinning/pins/{pinid}"
        let pinidPreEscape = "\(pinid)"
        let pinidPostEscape = pinidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{pinid}", with: pinidPostEscape, options: .literal, range: nil)
        let URLString = estuary-clientAPI.basePath + path
        let parameters: [String:Any]? = nil

        let url = URLComponents(string: URLString)

        let requestBuilder: RequestBuilder<Void>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "DELETE", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

    /**
     Get a pin status object
     - parameter pinid: (path) cid 
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func pinningPinsPinidGet(pinid: String, completion: @escaping ((_ data: TypesIpfsPinStatusResponse?, _ error: ErrorResponse?) -> Void)) {
        pinningPinsPinidGetWithRequestBuilder(pinid: pinid).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Get a pin status object
     - GET /pinning/pins/{pinid}
     - This endpoint returns a pin status object.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "pin" : {
    "meta" : { },
    "name" : "name",
    "origins" : [ "origins", "origins" ],
    "cid" : "cid"
  },
  "created" : "created",
  "requestid" : "requestid",
  "delegates" : [ "delegates", "delegates" ],
  "info" : { },
  "status" : "status"
}}]
     - parameter pinid: (path) cid 
     - returns: RequestBuilder<TypesIpfsPinStatusResponse> 
     */
    open class func pinningPinsPinidGetWithRequestBuilder(pinid: String) -> RequestBuilder<TypesIpfsPinStatusResponse> {
        var path = "/pinning/pins/{pinid}"
        let pinidPreEscape = "\(pinid)"
        let pinidPostEscape = pinidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{pinid}", with: pinidPostEscape, options: .literal, range: nil)
        let URLString = estuary-clientAPI.basePath + path
        let parameters: [String:Any]? = nil

        let url = URLComponents(string: URLString)

        let requestBuilder: RequestBuilder<TypesIpfsPinStatusResponse>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

    /**
     Replace a pinned object
     - parameter pinid: (path) Pin ID 
     - parameter body: (body) Meta information of new pin (optional)
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func pinningPinsPinidPost(pinid: String, body: String? = nil, completion: @escaping ((_ data: TypesIpfsPinStatusResponse?, _ error: ErrorResponse?) -> Void)) {
        pinningPinsPinidPostWithRequestBuilder(pinid: pinid, body: body).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Replace a pinned object
     - POST /pinning/pins/{pinid}
     - This endpoint replaces a pinned object.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "pin" : {
    "meta" : { },
    "name" : "name",
    "origins" : [ "origins", "origins" ],
    "cid" : "cid"
  },
  "created" : "created",
  "requestid" : "requestid",
  "delegates" : [ "delegates", "delegates" ],
  "info" : { },
  "status" : "status"
}}]
     - parameter pinid: (path) Pin ID 
     - parameter body: (body) Meta information of new pin (optional)
     - returns: RequestBuilder<TypesIpfsPinStatusResponse> 
     */
    open class func pinningPinsPinidPostWithRequestBuilder(pinid: String, body: String? = nil) -> RequestBuilder<TypesIpfsPinStatusResponse> {
        var path = "/pinning/pins/{pinid}"
        let pinidPreEscape = "\(pinid)"
        let pinidPostEscape = pinidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{pinid}", with: pinidPostEscape, options: .literal, range: nil)
        let URLString = estuary-clientAPI.basePath + path
        let parameters = body?.encodeToJSON()

        let url = URLComponents(string: URLString)

        let requestBuilder: RequestBuilder<TypesIpfsPinStatusResponse>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true)
    }

    /**
     Add and pin object
     - parameter body: (body) Pin Body {cid:cid, name:name} 
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func pinningPinsPost(body: TypesIpfsPin, completion: @escaping ((_ data: TypesIpfsPinStatusResponse?, _ error: ErrorResponse?) -> Void)) {
        pinningPinsPostWithRequestBuilder(body: body).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Add and pin object
     - POST /pinning/pins
     - This endpoint adds a pin to the IPFS daemon.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "pin" : {
    "meta" : { },
    "name" : "name",
    "origins" : [ "origins", "origins" ],
    "cid" : "cid"
  },
  "created" : "created",
  "requestid" : "requestid",
  "delegates" : [ "delegates", "delegates" ],
  "info" : { },
  "status" : "status"
}}]
     - parameter body: (body) Pin Body {cid:cid, name:name} 
     - returns: RequestBuilder<TypesIpfsPinStatusResponse> 
     */
    open class func pinningPinsPostWithRequestBuilder(body: TypesIpfsPin) -> RequestBuilder<TypesIpfsPinStatusResponse> {
        let path = "/pinning/pins"
        let URLString = estuary-clientAPI.basePath + path
        let parameters = body.encodeToJSON()

        let url = URLComponents(string: URLString)

        let requestBuilder: RequestBuilder<TypesIpfsPinStatusResponse>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true)
    }

}
