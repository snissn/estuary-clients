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
    public class DealsApiController : ControllerBase
    { 
        /// <summary>
        /// Estimate the cost of a deal
        /// </summary>
        /// <remarks>This endpoint estimates the cost of a deal</remarks>
        /// <param name="body">The size of the deal in bytes, the replication factor, and the duration of the deal in blocks</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpPost]
        [Route("//deal/estimate")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealEstimatePost")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealEstimatePost([FromBody]MainEstimateDealBody body)
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
        /// Get Deal Info
        /// </summary>
        /// <remarks>This endpoint returns the deal info for a deal</remarks>
        /// <param name="dealid">Deal ID</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deal/info/{dealid}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealInfoDealidGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealInfoDealidGet([FromRoute][Required]int? dealid)
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
        /// Get Proposal
        /// </summary>
        /// <remarks>This endpoint returns the proposal for a deal</remarks>
        /// <param name="propcid">Proposal CID</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deal/proposal/{propcid}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealProposalPropcidGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealProposalPropcidGet([FromRoute][Required]string propcid)
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
        /// Query Ask
        /// </summary>
        /// <remarks>This endpoint returns the ask for a given CID</remarks>
        /// <param name="miner">CID</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deal/query/{miner}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealQueryMinerGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealQueryMinerGet([FromRoute][Required]string miner)
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
        /// Get Deal Status by PropCid
        /// </summary>
        /// <remarks>Get Deal Status by PropCid</remarks>
        /// <param name="propcid">PropCid</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deal/status-by-proposal/{propcid}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealStatusByProposalPropcidGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealStatusByProposalPropcidGet([FromRoute][Required]string propcid)
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
        /// Deal Status
        /// </summary>
        /// <remarks>This endpoint returns the status of a deal</remarks>
        /// <param name="miner">Miner</param>
        /// <param name="propcid">Proposal CID</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deal/status/{miner}/{propcid}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealStatusMinerPropcidGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealStatusMinerPropcidGet([FromRoute][Required]string miner, [FromRoute][Required]string propcid)
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
        /// Transfer In Progress
        /// </summary>
        /// <remarks>This endpoint returns the in-progress transfers</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deal/transfer/in-progress")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealTransferInProgressGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealTransferInProgressGet()
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
        /// Transfer Status
        /// </summary>
        /// <remarks>This endpoint returns the status of a transfer</remarks>
        /// <param name="chanid">Channel ID</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpPost]
        [Route("//deal/transfer/status")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealTransferStatusPost")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealTransferStatusPost([FromBody]MainChannelIDParam chanid)
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
        /// Get storage failures for user
        /// </summary>
        /// <remarks>This endpoint returns a list of storage failures for user</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deals/failures")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealsFailuresGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealsFailuresGet()
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
        /// Make Deal
        /// </summary>
        /// <remarks>This endpoint makes a deal for a given content and miner</remarks>
        /// <param name="miner">Miner</param>
        /// <param name="dealRequest">Deal Request</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpPost]
        [Route("//deals/make/{miner}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealsMakeMinerPost")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealsMakeMinerPost([FromRoute][Required]string miner, [FromBody]string dealRequest)
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
        /// Get Deal Status
        /// </summary>
        /// <remarks>This endpoint returns the status of a deal</remarks>
        /// <param name="deal">Deal ID</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//deals/status/{deal}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("DealsStatusDealGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult DealsStatusDealGet([FromRoute][Required]int? deal)
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
        /// Get storage failures
        /// </summary>
        /// <remarks>This endpoint returns a list of storage failures</remarks>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//public/deals/failures")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("PublicDealsFailuresGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult PublicDealsFailuresGet()
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
        /// Query Ask
        /// </summary>
        /// <remarks>This endpoint returns the ask for a given CID</remarks>
        /// <param name="miner">CID</param>
        /// <response code="200">OK</response>
        /// <response code="400">Bad Request</response>
        /// <response code="500">Internal Server Error</response>
        [HttpGet]
        [Route("//public/miners/storage/query/{miner}")]
        [Authorize(AuthenticationSchemes = ApiKeyAuthenticationHandler.SchemeName)]
        [ValidateModelState]
        [SwaggerOperation("PublicMinersStorageQueryMinerGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "OK")]
        [SwaggerResponse(statusCode: 400, type: typeof(UtilHttpError), description: "Bad Request")]
        [SwaggerResponse(statusCode: 500, type: typeof(UtilHttpError), description: "Internal Server Error")]
        public virtual IActionResult PublicMinersStorageQueryMinerGet([FromRoute][Required]string miner)
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
