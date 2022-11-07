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
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package io.swagger.api;

import io.swagger.model.TypesIpfsPin;
import io.swagger.model.UtilHttpError;
import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;

import javax.ws.rs.core.Response;
import org.apache.cxf.jaxrs.client.JAXRSClientFactory;
import org.apache.cxf.jaxrs.client.ClientConfiguration;
import org.apache.cxf.jaxrs.client.WebClient;


import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;




/**
 * Estuary API
 *
 * <p>This is the API for the Estuary application.
 *
 * API tests for PinningApi 
 */
public class PinningApiTest {


    private PinningApi api;
    
    @Before
    public void setup() {
        JacksonJsonProvider provider = new JacksonJsonProvider();
        List providers = new ArrayList();
        providers.add(provider);
        
        api = JAXRSClientFactory.create("https://api.estuary.tech", PinningApi.class, providers);
        org.apache.cxf.jaxrs.client.Client client = WebClient.client(api);
        
        ClientConfiguration config = WebClient.getConfig(client); 
    }

    
    /**
     * List all pin status objects
     *
     * This endpoint lists all pin status objects
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void pinningPinsGetTest() {
        //String response = api.pinningPinsGet();
        //assertNotNull(response);
        // TODO: test validations
        
        
    }
    
    /**
     * Delete a pinned object
     *
     * This endpoint deletes a pinned object.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPinidDeleteTest() {
        String pinid = null;
        //String response = api.pinningPinsPinidDelete(pinid);
        //assertNotNull(response);
        // TODO: test validations
        
        
    }
    
    /**
     * Get a pin status object
     *
     * This endpoint returns a pin status object.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPinidGetTest() {
        String pinid = null;
        //String response = api.pinningPinsPinidGet(pinid);
        //assertNotNull(response);
        // TODO: test validations
        
        
    }
    
    /**
     * Replace a pinned object
     *
     * This endpoint replaces a pinned object.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPinidPostTest() {
        String pinid = null;
        //String response = api.pinningPinsPinidPost(pinid);
        //assertNotNull(response);
        // TODO: test validations
        
        
    }
    
    /**
     * Add and pin object
     *
     * This endpoint adds a pin to the IPFS daemon.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void pinningPinsPostTest() {
        TypesIpfsPin pin = null;
        //String response = api.pinningPinsPost(pin);
        //assertNotNull(response);
        // TODO: test validations
        
        
    }
    
}
