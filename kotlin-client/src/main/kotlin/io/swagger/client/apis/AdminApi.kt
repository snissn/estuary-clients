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

import io.swagger.client.models.UtilHttpError

import estuary-client.infrastructure.*

class AdminApi(basePath: kotlin.String = "//api.estuary.tech/") : ApiClient(basePath) {

    /**
     * Remove peers on Peering Service
     * This endpoint can be used to remove a Peer from the Peering Service
     * @param body Peer ids 
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminPeeringPeersDelete(body: kotlin.Array<kotlin.Boolean>): kotlin.String {
        val localVariableBody: kotlin.Any? = body
        
        val localVariableConfig = RequestConfig(
                RequestMethod.DELETE,
                "/admin/peering/peers"
        )
        val response = request<kotlin.String>(
                localVariableConfig, localVariableBody
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
     * List all Peering peers
     * This endpoint can be used to list all peers on Peering Service
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminPeeringPeersGet(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/admin/peering/peers"
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
     * Add peers on Peering Service
     * This endpoint can be used to add a Peer from the Peering Service
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminPeeringPeersPost(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.POST,
                "/admin/peering/peers"
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
     * Start Peering
     * This endpoint can be used to start the Peering Service
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminPeeringStartPost(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.POST,
                "/admin/peering/start"
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
     * Check Peering Status
     * This endpoint can be used to check the Peering status
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminPeeringStatusGet(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/admin/peering/status"
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
     * Stop Peering
     * This endpoint can be used to stop the Peering Service
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminPeeringStopPost(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.POST,
                "/admin/peering/stop"
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
     * Get systems(estuary/shuttle) config
     * This endpoint is used to get system configs.
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminSystemConfigGet(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/admin/system/config"
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
     * Get all users
     * This endpoint is used to get all users.
     * @return kotlin.String
     */
    @Suppress("UNCHECKED_CAST")
    fun adminUsersGet(): kotlin.String {
        
        val localVariableConfig = RequestConfig(
                RequestMethod.GET,
                "/admin/users"
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