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
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.SwaggerGen;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using estuary-client.Attributes;
using estuary-client.Security;
using Microsoft.AspNetCore.Authorization;
using estuary-client.Models;

namespace estuary-client.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    public class PeersApiController : ControllerBase
    { 
        /// <summary>
        /// Remove peers on Peering Service
        /// </summary>
        /// <remarks>This endpoint can be used to remove a Peer from the Peering Service</remarks>
        /// <param name="peerIds">Peer ids</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpDelete]
        [Route("//admin/peering/peers")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("AdminPeeringPeersDelete")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult AdminPeeringPeersDelete([FromBody]List<bool?> peerIds)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(string));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(UtilHttpError));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(UtilHttpError));

            string exampleJson = null;
            exampleJson = "{\n  \"bytes\": [],\n  \"empty\": true\n}";
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// List all Peering peers
        /// </summary>
        /// <remarks>This endpoint can be used to list all peers on Peering Service</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//admin/peering/peers")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("AdminPeeringPeersGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult AdminPeeringPeersGet()
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(string));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(UtilHttpError));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(UtilHttpError));

            string exampleJson = null;
            exampleJson = "{\n  \"bytes\": [],\n  \"empty\": true\n}";
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// Add peers on Peering Service
        /// </summary>
        /// <remarks>This endpoint can be used to add a Peer from the Peering Service</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpPost]
        [Route("//admin/peering/peers")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("AdminPeeringPeersPost")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult AdminPeeringPeersPost()
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(string));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(UtilHttpError));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(UtilHttpError));

            string exampleJson = null;
            exampleJson = "{\n  \"bytes\": [],\n  \"empty\": true\n}";
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// Start Peering
        /// </summary>
        /// <remarks>This endpoint can be used to start the Peering Service</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpPost]
        [Route("//admin/peering/start")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("AdminPeeringStartPost")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult AdminPeeringStartPost()
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(string));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(UtilHttpError));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(UtilHttpError));

            string exampleJson = null;
            exampleJson = "{\n  \"bytes\": [],\n  \"empty\": true\n}";
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// Check Peering Status
        /// </summary>
        /// <remarks>This endpoint can be used to check the Peering status</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//admin/peering/status")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("AdminPeeringStatusGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult AdminPeeringStatusGet()
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(string));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(UtilHttpError));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(UtilHttpError));

            string exampleJson = null;
            exampleJson = "{\n  \"bytes\": [],\n  \"empty\": true\n}";
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// Stop Peering
        /// </summary>
        /// <remarks>This endpoint can be used to stop the Peering Service</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpPost]
        [Route("//admin/peering/stop")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("AdminPeeringStopPost")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult AdminPeeringStopPost()
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(string));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(UtilHttpError));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(UtilHttpError));

            string exampleJson = null;
            exampleJson = "{\n  \"bytes\": [],\n  \"empty\": true\n}";
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            //TODO: Change the data returned
            return new ObjectResult(example);
        }
    }
}
