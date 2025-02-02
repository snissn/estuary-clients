//
// CollectionsAPI.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Alamofire



public class CollectionsAPI: APIBase {
    /**
     Produce a CID of the collection contents
     
     - parameter coluuid: (path) coluuid 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsColuuidCommitPost(coluuid coluuid: String, completion: ((data: String?, error: ErrorType?) -> Void)) {
        collectionsColuuidCommitPostWithRequestBuilder(coluuid: coluuid).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Produce a CID of the collection contents
     - POST /collections/{coluuid}/commit
     - This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "bytes": [],
  "empty": true
}}]
     
     - parameter coluuid: (path) coluuid 

     - returns: RequestBuilder<String> 
     */
    public class func collectionsColuuidCommitPostWithRequestBuilder(coluuid coluuid: String) -> RequestBuilder<String> {
        var path = "/collections/{coluuid}/commit"
        path = path.stringByReplacingOccurrencesOfString("{coluuid}", withString: "\(coluuid)", options: .LiteralSearch, range: nil)
        let URLString = estuary-clientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [:]
 
        let parameters = APIHelper.rejectNil(nillableParameters)
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<String>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

    /**
     Deletes a content from a collection
     
     - parameter coluuid: (path) Collection ID 
     - parameter contentid: (path) Content ID 
     - parameter body: (body) Variable to use when filtering for files (must be either &#39;path&#39; or &#39;content_id&#39;) 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsColuuidContentsDelete(coluuid coluuid: String, contentid: String, body: MainDeleteContentFromCollectionBody, completion: ((data: String?, error: ErrorType?) -> Void)) {
        collectionsColuuidContentsDeleteWithRequestBuilder(coluuid: coluuid, contentid: contentid, body: body).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Deletes a content from a collection
     - DELETE /collections/{coluuid}/contents
     - This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "bytes": [],
  "empty": true
}}]
     
     - parameter coluuid: (path) Collection ID 
     - parameter contentid: (path) Content ID 
     - parameter body: (body) Variable to use when filtering for files (must be either &#39;path&#39; or &#39;content_id&#39;) 

     - returns: RequestBuilder<String> 
     */
    public class func collectionsColuuidContentsDeleteWithRequestBuilder(coluuid coluuid: String, contentid: String, body: MainDeleteContentFromCollectionBody) -> RequestBuilder<String> {
        var path = "/collections/{coluuid}/contents"
        path = path.stringByReplacingOccurrencesOfString("{coluuid}", withString: "\(coluuid)", options: .LiteralSearch, range: nil)
        path = path.stringByReplacingOccurrencesOfString("{contentid}", withString: "\(contentid)", options: .LiteralSearch, range: nil)
        let URLString = estuary-clientAPI.basePath + path
        let parameters = body.encodeToJSON() as? [String:AnyObject]
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<String>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "DELETE", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

    /**
     Deletes a collection
     
     - parameter coluuid: (path) Collection ID 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsColuuidDelete(coluuid coluuid: String, completion: ((data: String?, error: ErrorType?) -> Void)) {
        collectionsColuuidDeleteWithRequestBuilder(coluuid: coluuid).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Deletes a collection
     - DELETE /collections/{coluuid}
     - This endpoint is used to delete an existing collection.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "bytes": [],
  "empty": true
}}]
     
     - parameter coluuid: (path) Collection ID 

     - returns: RequestBuilder<String> 
     */
    public class func collectionsColuuidDeleteWithRequestBuilder(coluuid coluuid: String) -> RequestBuilder<String> {
        var path = "/collections/{coluuid}"
        path = path.stringByReplacingOccurrencesOfString("{coluuid}", withString: "\(coluuid)", options: .LiteralSearch, range: nil)
        let URLString = estuary-clientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [:]
 
        let parameters = APIHelper.rejectNil(nillableParameters)
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<String>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "DELETE", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

    /**
     Get contents in a collection
     
     - parameter coluuid: (path) coluuid 
     - parameter dir: (query) Directory (optional)
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsColuuidGet(coluuid coluuid: String, dir: String? = nil, completion: ((data: String?, error: ErrorType?) -> Void)) {
        collectionsColuuidGetWithRequestBuilder(coluuid: coluuid, dir: dir).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Get contents in a collection
     - GET /collections/{coluuid}
     - This endpoint is used to get contents in a collection. If no colpath query param is passed
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "bytes": [],
  "empty": true
}}]
     
     - parameter coluuid: (path) coluuid 
     - parameter dir: (query) Directory (optional)

     - returns: RequestBuilder<String> 
     */
    public class func collectionsColuuidGetWithRequestBuilder(coluuid coluuid: String, dir: String? = nil) -> RequestBuilder<String> {
        var path = "/collections/{coluuid}"
        path = path.stringByReplacingOccurrencesOfString("{coluuid}", withString: "\(coluuid)", options: .LiteralSearch, range: nil)
        let URLString = estuary-clientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [
            "dir": dir
        ]
 
        let parameters = APIHelper.rejectNil(nillableParameters)
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<String>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: URLString, parameters: convertedParameters, isBody: false)
    }

    /**
     Add contents to a collection
     
     - parameter coluuid: (path) coluuid 
     - parameter contentIDs: (body) Content IDs to add to collection 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsColuuidPost(coluuid coluuid: String, contentIDs: [Int32], completion: ((data: String?, error: ErrorType?) -> Void)) {
        collectionsColuuidPostWithRequestBuilder(coluuid: coluuid, contentIDs: contentIDs).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Add contents to a collection
     - POST /collections/{coluuid}
     - This endpoint adds already-pinned contents (that have ContentIDs) to a collection.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "bytes": [],
  "empty": true
}}]
     
     - parameter coluuid: (path) coluuid 
     - parameter contentIDs: (body) Content IDs to add to collection 

     - returns: RequestBuilder<String> 
     */
    public class func collectionsColuuidPostWithRequestBuilder(coluuid coluuid: String, contentIDs: [Int32]) -> RequestBuilder<String> {
        var path = "/collections/{coluuid}"
        path = path.stringByReplacingOccurrencesOfString("{coluuid}", withString: "\(coluuid)", options: .LiteralSearch, range: nil)
        let URLString = estuary-clientAPI.basePath + path
        let parameters = contentIDs.encodeToJSON() as? [String:AnyObject]
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<String>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

    /**
     Add a file to a collection
     
     - parameter coluuid: (query) Collection ID 
     - parameter content: (query) Content 
     - parameter path: (query) Path to file 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsFsAddPost(coluuid coluuid: String, content: String, path: String, completion: ((data: String?, error: ErrorType?) -> Void)) {
        collectionsFsAddPostWithRequestBuilder(coluuid: coluuid, content: content, path: path).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Add a file to a collection
     - POST /collections/fs/add
     - This endpoint adds a file to a collection
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={
  "bytes": [],
  "empty": true
}}]
     
     - parameter coluuid: (query) Collection ID 
     - parameter content: (query) Content 
     - parameter path: (query) Path to file 

     - returns: RequestBuilder<String> 
     */
    public class func collectionsFsAddPostWithRequestBuilder(coluuid coluuid: String, content: String, path: String) -> RequestBuilder<String> {
        let path = "/collections/fs/add"
        let URLString = estuary-clientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [
            "coluuid": coluuid,
            "content": content,
            "path": path
        ]
 
        let parameters = APIHelper.rejectNil(nillableParameters)
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<String>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: URLString, parameters: convertedParameters, isBody: false)
    }

    /**
     List all collections
     
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsGet(completion: ((data: [[CollectionsCollection]]?, error: ErrorType?) -> Void)) {
        collectionsGetWithRequestBuilder().execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     List all collections
     - GET /collections/
     - This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={}}]

     - returns: RequestBuilder<[[CollectionsCollection]]> 
     */
    public class func collectionsGetWithRequestBuilder() -> RequestBuilder<[[CollectionsCollection]]> {
        let path = "/collections/"
        let URLString = estuary-clientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [:]
 
        let parameters = APIHelper.rejectNil(nillableParameters)
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<[[CollectionsCollection]]>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

    /**
     Create a new collection
     
     - parameter body: (body) Collection name and description 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func collectionsPost(body body: MainCreateCollectionBody, completion: ((data: CollectionsCollection?, error: ErrorType?) -> Void)) {
        collectionsPostWithRequestBuilder(body: body).execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     Create a new collection
     - POST /collections/
     - This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.
     - API Key:
       - type: apiKey Authorization 
       - name: bearerAuth
     - examples: [{contentType=application/json, example={"empty": false}}]
     
     - parameter body: (body) Collection name and description 

     - returns: RequestBuilder<CollectionsCollection> 
     */
    public class func collectionsPostWithRequestBuilder(body body: MainCreateCollectionBody) -> RequestBuilder<CollectionsCollection> {
        let path = "/collections/"
        let URLString = estuary-clientAPI.basePath + path
        let parameters = body.encodeToJSON() as? [String:AnyObject]
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<CollectionsCollection>.Type = estuary-clientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

}
