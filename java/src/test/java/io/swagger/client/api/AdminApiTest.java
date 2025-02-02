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

import io.swagger.client.model.UtilHttpError;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AdminApi
 */
@Ignore
public class AdminApiTest {

    private final AdminApi api = new AdminApi();

    
    /**
     * Remove peers on Peering Service
     *
     * This endpoint can be used to remove a Peer from the Peering Service
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminPeeringPeersDeleteTest() throws Exception {
        List<Boolean> peerIds = null;
        String response = api.adminPeeringPeersDelete(peerIds);

        // TODO: test validations
    }
    
    /**
     * List all Peering peers
     *
     * This endpoint can be used to list all peers on Peering Service
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminPeeringPeersGetTest() throws Exception {
        String response = api.adminPeeringPeersGet();

        // TODO: test validations
    }
    
    /**
     * Add peers on Peering Service
     *
     * This endpoint can be used to add a Peer from the Peering Service
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminPeeringPeersPostTest() throws Exception {
        String response = api.adminPeeringPeersPost();

        // TODO: test validations
    }
    
    /**
     * Start Peering
     *
     * This endpoint can be used to start the Peering Service
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminPeeringStartPostTest() throws Exception {
        String response = api.adminPeeringStartPost();

        // TODO: test validations
    }
    
    /**
     * Check Peering Status
     *
     * This endpoint can be used to check the Peering status
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminPeeringStatusGetTest() throws Exception {
        String response = api.adminPeeringStatusGet();

        // TODO: test validations
    }
    
    /**
     * Stop Peering
     *
     * This endpoint can be used to stop the Peering Service
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminPeeringStopPostTest() throws Exception {
        String response = api.adminPeeringStopPost();

        // TODO: test validations
    }
    
    /**
     * Get systems(estuary/shuttle) config
     *
     * This endpoint is used to get system configs.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminSystemConfigGetTest() throws Exception {
        String response = api.adminSystemConfigGet();

        // TODO: test validations
    }
    
    /**
     * Get all users
     *
     * This endpoint is used to get all users.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void adminUsersGetTest() throws Exception {
        String response = api.adminUsersGet();

        // TODO: test validations
    }
    
}
