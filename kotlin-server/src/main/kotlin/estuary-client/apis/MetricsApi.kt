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
package estuary-client.apis

import com.google.gson.Gson
import io.ktor.application.call
import io.ktor.auth.UserIdPrincipal
import io.ktor.auth.authentication
import io.ktor.auth.basicAuthentication
import io.ktor.auth.oauth
import io.ktor.auth.OAuthAccessTokenResponse
import io.ktor.auth.OAuthServerSettings
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.locations.*
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.*

import kotlinx.coroutines.experimental.asCoroutineDispatcher

import estuary-client.ApplicationAuthProviders
import estuary-client.Paths
import estuary-client.ApplicationExecutors
import estuary-client.HTTP.client
import estuary-client.infrastructure.ApiPrincipal
import estuary-client.infrastructure.apiKeyAuth

// ktor 0.9.x is missing io.ktor.locations.DELETE, this adds it.
// see https://github.com/ktorio/ktor/issues/288
import estuary-client.delete

import estuary-client.models.UtilHttpError

fun Route.MetricsApi() {
    val gson = Gson()
    val empty = mutableMapOf<String, Any?>()

    get<Paths.publicMetricsDealsOnChainGet> {  it: Paths.publicMetricsDealsOnChainGet ->
        val principal = call.authentication.principal<ApiPrincipal>()
        
        if (principal == null) {
            call.respond(HttpStatusCode.Unauthorized)
        } else {
            val exampleContentType = "application/json"
            val exampleContentString = """{
              "bytes": [],
              "empty": true
            }"""
            
            when(exampleContentType) {
                "application/json" -> call.respond(gson.fromJson(exampleContentString, empty::class.java))
                "application/xml" -> call.respondText(exampleContentString, ContentType.Text.Xml)
                else -> call.respondText(exampleContentString)
            }
        }
    }
    .apply {
      // TODO: ktor doesn't allow different authentication registrations for endpoints sharing the same path but different methods.
      //       It could be the authentication block is being abused here. Until this is resolved, swallow duplicate exceptions.

        try {
            authentication {
                // "Implement API key auth (bearerAuth) for parameter name 'Authorization'."
                apiKeyAuth("Authorization", "header") {
                    // TODO: "Verify key here , accessible as it.value"
                    if (it.value == "keyboardcat") {
                         ApiPrincipal(it)
                    } else {
                        null
                    }
                }
            }
        } catch(e: io.ktor.application.DuplicateApplicationFeatureException){
            application.environment.log.warn("authentication block for '/public/metrics/deals-on-chain' is duplicated in code. " +
            "Generated endpoints may need to be merged under a 'route' entry.")
        }
    }
}
