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
package io.swagger.client.apis

import io.swagger.client.models.MaingetApiKeysResp
import io.swagger.client.models.UtilHttpError

import estuary-client.infrastructure.*

class UserApi(basePath: kotlin.String = "//api.estuary.tech/") : ApiClient(basePath) {

    /**
     * Get API keys for a user
     * This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.
     * @return kotlin.Array<kotlin.Array<MaingetApiKeysResp>>
     */
    @Suppress("UNCHECKED_CAST")
    fun userApiKeysGet(): kotlin.Array<kotlin.Array<MaingetApiKeysResp>> {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/user/api-keys"
        )
        val response = request<kotlin.Array<kotlin.Array<MaingetApiKeysResp>>>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.Array<kotlin.Array<MaingetApiKeysResp>>
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * Revoke a User API Key.
     * This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that&#x27;s assigned to the user. Revoked API keys are completely deleted and are not recoverable.
     * @param keyOrHash Key or Hash 
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun userApiKeysKeyOrHashDelete(keyOrHash: kotlin.String): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.DELETE,
                "/user/api-keys/{key_or_hash}".replace("{" + "key_or_hash" + "}", "$keyOrHash")
        )
        val response = request<kotlin.String>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.String
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * Create API keys for a user
     * This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.
     * @param expiry Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h (optional)
     * @param perms Permissions -- currently unused (optional)
     * @return MaingetApiKeysResp
     */
    @Suppress("UNCHECKED_CAST")
    fun userApiKeysPost(expiry: kotlin.String? = null, perms: kotlin.String? = null): MaingetApiKeysResp {
        val localVariableQuery: MultiValueMap = mapOf("expiry" to listOf("$expiry"), "perms" to listOf("$perms"))
        val localVariableConfig = RequestConfig(
                RequestMethod.POST,
                "/user/api-keys", query = localVariableQuery
        )
        val response = request<MaingetApiKeysResp>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as MaingetApiKeysResp
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * Export user data
     * This endpoint is used to get API keys for a user.
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun userExportGet(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/user/export"
        )
        val response = request<kotlin.String>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.String
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
    /**
     * Create API keys for a user
     * This endpoint is used to create API keys for a user.
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun userStatsGet(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/user/stats"
        )
        val response = request<kotlin.String>(
                localVariableConfig
        )

        return when (response.responseType) {
            ResponseType.Success -> (response as Success<*>).data as kotlin.String
            ResponseType.Informational -> TODO()
            ResponseType.Redirection -> TODO()
            ResponseType.ClientError -> throw ClientException((response as ClientError<*>).body as? String ?: "Client error")
            ResponseType.ServerError -> throw ServerException((response as ServerError<*>).message ?: "Server error")
        }
    }
}
