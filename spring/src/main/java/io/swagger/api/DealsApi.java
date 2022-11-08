/**
 * NOTE: This class is auto generated by the swagger code generator program (2.4.28).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

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
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2022-11-07T23:56:04.908Z")

@Validated
@Api(value = "deals", description = "the deals API")
@RequestMapping(value = "")
public interface DealsApi {

    @ApiOperation(value = "Get storage failures for user", nickname = "dealsFailuresGet", notes = "This endpoint returns a list of storage failures for user", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "deals", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/deals/failures",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> dealsFailuresGet();


    @ApiOperation(value = "Make Deal", nickname = "dealsMakeMinerPost", notes = "This endpoint makes a deal for a given content and miner", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "deals", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/deals/make/{miner}",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    ResponseEntity<String> dealsMakeMinerPost(@ApiParam(value = "Miner",required=true) @PathVariable("miner") String miner,@ApiParam(value = "Deal Request" ,required=true )  @Valid @RequestBody String dealRequest);


    @ApiOperation(value = "Get Deal Status", nickname = "dealsStatusDealGet", notes = "This endpoint returns the status of a deal", response = String.class, authorizations = {
        @Authorization(value = "bearerAuth")
    }, tags={ "deals", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = String.class),
        @ApiResponse(code = 400, message = "Bad Request", response = UtilHttpError.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = UtilHttpError.class) })
    @RequestMapping(value = "/deals/status/{deal}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<String> dealsStatusDealGet(@ApiParam(value = "Deal ID",required=true) @PathVariable("deal") Integer deal);

}
