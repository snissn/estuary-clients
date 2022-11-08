/**
 * NOTE: This class is auto generated by the swagger code generator program (2.4.28).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import io.swagger.model.MainImportDealBody;
import org.springframework.core.io.Resource;
import io.swagger.model.UtilContentAddIpfsBody;
import io.swagger.model.UtilContentAddResponse;
import io.swagger.model.UtilContentCreateBody;
import io.swagger.model.UtilHttpError;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2022-11-08T02:39:48.174Z")

@Validated
@Api(value = "content", description = "the content API")
@RequestMapping(value = "")
public interface ContentApi {

    @ApiOperation(value = "Add Car object", nickname = "contentAddCarPost", notes = "This endpoint is used to add a car object to the network. The object can be a file or a directory.", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/add-car",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    ResponseEntity<String> contentAddCarPost(@ApiParam(value = "Car" ,required=true )  @Valid @RequestBody String body,@ApiParam(value = "Ignore Dupes") @Valid @RequestParam(value = "ignore-dupes", required = false) String ignoreDupes,@ApiParam(value = "Filename") @Valid @RequestParam(value = "filename", required = false) String filename);


    @ApiOperation(value = "Add IPFS object", nickname = "contentAddIpfsPost", notes = "This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/add-ipfs",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    ResponseEntity<String> contentAddIpfsPost(@ApiParam(value = "IPFS Body" ,required=true )  @Valid @RequestBody UtilContentAddIpfsBody body,@ApiParam(value = "Ignore Dupes") @Valid @RequestParam(value = "ignore-dupes", required = false) String ignoreDupes);


    @ApiOperation(value = "Add new content", nickname = "contentAddPost", notes = "This endpoint is used to upload new content.", response = UtilContentAddResponse.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = UtilContentAddResponse.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/add",
        produces = { "application/json" }, 
        consumes = { "multipart/form-data" },
        method = RequestMethod.POST)
    ResponseEntity<UtilContentAddResponse> contentAddPost(@ApiParam(value = "File to upload") @Valid @RequestPart(value="data", required=true) MultipartFile data,@ApiParam(value = "Filenam to use for upload") @RequestParam(value="filename", required=false)  String filename,@ApiParam(value = "Collection UUID") @Valid @RequestParam(value = "coluuid", required = false) String coluuid,@ApiParam(value = "Replication value") @Valid @RequestParam(value = "replication", required = false) Integer replication,@ApiParam(value = "Ignore Dupes true/false") @Valid @RequestParam(value = "ignore-dupes", required = false) String ignoreDupes,@ApiParam(value = "Lazy Provide true/false") @Valid @RequestParam(value = "lazy-provide", required = false) String lazyProvide,@ApiParam(value = "Directory") @Valid @RequestParam(value = "dir", required = false) String dir);


    @ApiOperation(value = "Get aggregated content stats", nickname = "contentAggregatedContentGet", notes = "This endpoint returns aggregated content stats", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/aggregated/{content}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentAggregatedContentGet(@ApiParam(value = "Content ID",required=true) @PathVariable("content") String content);


    @ApiOperation(value = "Get all deals for a user", nickname = "contentAllDealsGet", notes = "This endpoint is used to get all deals for a user", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/all-deals",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentAllDealsGet(@NotNull @ApiParam(value = "Begin", required = true) @Valid @RequestParam(value = "begin", required = true) String begin,@NotNull @ApiParam(value = "Duration", required = true) @Valid @RequestParam(value = "duration", required = true) String duration,@NotNull @ApiParam(value = "All", required = true) @Valid @RequestParam(value = "all", required = true) String all);


    @ApiOperation(value = "Get content bandwidth", nickname = "contentBwUsageContentGet", notes = "This endpoint returns content bandwidth", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/bw-usage/{content}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentBwUsageContentGet(@ApiParam(value = "Content ID",required=true) @PathVariable("content") String content);


    @ApiOperation(value = "Add a new content", nickname = "contentCreatePost", notes = "This endpoint adds a new content", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/create",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    ResponseEntity<String> contentCreatePost(@ApiParam(value = "Content" ,required=true )  @Valid @RequestBody UtilContentCreateBody req,@ApiParam(value = "Ignore Dupes") @Valid @RequestParam(value = "ignore-dupes", required = false) String ignoreDupes);


    @ApiOperation(value = "Content with deals", nickname = "contentDealsGet", notes = "This endpoint lists all content with deals", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/deals",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentDealsGet(@ApiParam(value = "Limit") @Valid @RequestParam(value = "limit", required = false) Integer limit,@ApiParam(value = "Offset") @Valid @RequestParam(value = "offset", required = false) Integer offset);


    @ApiOperation(value = "Ensure Replication", nickname = "contentEnsureReplicationDatacidGet", notes = "This endpoint ensures that the content is replicated to the specified number of providers", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/ensure-replication/{datacid}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentEnsureReplicationDatacidGet(@ApiParam(value = "Data CID",required=true) @PathVariable("datacid") String datacid);


    @ApiOperation(value = "List all failures for a content", nickname = "contentFailuresContentGet", notes = "This endpoint returns all failures for a content", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/failures/{content}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentFailuresContentGet(@ApiParam(value = "Content ID",required=true) @PathVariable("content") String content);


    @ApiOperation(value = "Content", nickname = "contentIdGet", notes = "This endpoint returns a content by its ID", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentIdGet(@ApiParam(value = "Content ID",required=true) @PathVariable("id") Integer id);


    @ApiOperation(value = "Import a deal", nickname = "contentImportdealPost", notes = "This endpoint imports a deal into the shuttle.", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/importdeal",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    ResponseEntity<String> contentImportdealPost(@ApiParam(value = "Import a deal" ,required=true )  @Valid @RequestBody MainImportDealBody body);


    @ApiOperation(value = "List all pinned content", nickname = "contentListGet", notes = "This endpoint lists all content", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/list",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentListGet();


    @ApiOperation(value = "Read content", nickname = "contentReadContGet", notes = "This endpoint reads content from the blockstore", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/read/{cont}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentReadContGet(@ApiParam(value = "CID",required=true) @PathVariable("cont") String cont);


    @ApiOperation(value = "Get staging zone for user", nickname = "contentStagingZonesGet", notes = "This endpoint is used to get staging zone for user.", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/staging-zones",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentStagingZonesGet();


    @ApiOperation(value = "Get content statistics", nickname = "contentStatsGet", notes = "This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/stats",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentStatsGet(@NotNull @ApiParam(value = "limit", required = true) @Valid @RequestParam(value = "limit", required = true) String limit,@NotNull @ApiParam(value = "offset", required = true) @Valid @RequestParam(value = "offset", required = true) String offset);


    @ApiOperation(value = "Content Status", nickname = "contentStatusIdGet", notes = "This endpoint returns the status of a content", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "content", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/content/status/{id}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> contentStatusIdGet(@ApiParam(value = "Content ID",required=true) @PathVariable("id") Integer id);

}
