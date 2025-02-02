/*
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


package io.swagger.client.api;

import io.swagger.client.model.TypesIpfsPin;
import io.swagger.client.model.UtilHttpError;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PinningApi
 */
@Ignore
public class PinningApiTest {

    private final PinningApi api = new PinningApi();

    
    /**
     * List all pin status objects
     *
     * This endpoint lists all pin status objects
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void pinningPinsGetTest() throws Exception {
        String response = api.pinningPinsGet();

        // TODO: test validations
    }
    
    /**
     * Delete a pinned object
     *
     * This endpoint deletes a pinned object.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPinidDeleteTest() throws Exception {
        String pinid = null;
        String response = api.pinningPinsPinidDelete(pinid);

        // TODO: test validations
    }
    
    /**
     * Get a pin status object
     *
     * This endpoint returns a pin status object.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPinidGetTest() throws Exception {
        String pinid = null;
        String response = api.pinningPinsPinidGet(pinid);

        // TODO: test validations
    }
    
    /**
     * Replace a pinned object
     *
     * This endpoint replaces a pinned object.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPinidPostTest() throws Exception {
        String pinid = null;
        String response = api.pinningPinsPinidPost(pinid);

        // TODO: test validations
    }
    
    /**
     * Add and pin object
     *
     * This endpoint adds a pin to the IPFS daemon.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPostTest() throws Exception {
        TypesIpfsPin pin = null;
        String response = api.pinningPinsPost(pin);

        // TODO: test validations
    }
    
}
