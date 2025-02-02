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

import io.swagger.client.model.MainChannelIDParam;
import io.swagger.client.model.MainEstimateDealBody;
import io.swagger.client.model.UtilHttpError;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for DealsApi
 */
@Ignore
public class DealsApiTest {

    private final DealsApi api = new DealsApi();

    
    /**
     * Estimate the cost of a deal
     *
     * This endpoint estimates the cost of a deal
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealEstimatePostTest() throws Exception {
        MainEstimateDealBody body = null;
        String response = api.dealEstimatePost(body);

        // TODO: test validations
    }
    
    /**
     * Get Deal Info
     *
     * This endpoint returns the deal info for a deal
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealInfoDealidGetTest() throws Exception {
        Integer dealid = null;
        String response = api.dealInfoDealidGet(dealid);

        // TODO: test validations
    }
    
    /**
     * Get Proposal
     *
     * This endpoint returns the proposal for a deal
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealProposalPropcidGetTest() throws Exception {
        String propcid = null;
        String response = api.dealProposalPropcidGet(propcid);

        // TODO: test validations
    }
    
    /**
     * Query Ask
     *
     * This endpoint returns the ask for a given CID
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealQueryMinerGetTest() throws Exception {
        String miner = null;
        String response = api.dealQueryMinerGet(miner);

        // TODO: test validations
    }
    
    /**
     * Get Deal Status by PropCid
     *
     * Get Deal Status by PropCid
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealStatusByProposalPropcidGetTest() throws Exception {
        String propcid = null;
        String response = api.dealStatusByProposalPropcidGet(propcid);

        // TODO: test validations
    }
    
    /**
     * Deal Status
     *
     * This endpoint returns the status of a deal
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealStatusMinerPropcidGetTest() throws Exception {
        String miner = null;
        String propcid = null;
        String response = api.dealStatusMinerPropcidGet(miner, propcid);

        // TODO: test validations
    }
    
    /**
     * Transfer In Progress
     *
     * This endpoint returns the in-progress transfers
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealTransferInProgressGetTest() throws Exception {
        String response = api.dealTransferInProgressGet();

        // TODO: test validations
    }
    
    /**
     * Transfer Status
     *
     * This endpoint returns the status of a transfer
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealTransferStatusPostTest() throws Exception {
        MainChannelIDParam chanid = null;
        String response = api.dealTransferStatusPost(chanid);

        // TODO: test validations
    }
    
    /**
     * Get storage failures for user
     *
     * This endpoint returns a list of storage failures for user
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealsFailuresGetTest() throws Exception {
        String response = api.dealsFailuresGet();

        // TODO: test validations
    }
    
    /**
     * Make Deal
     *
     * This endpoint makes a deal for a given content and miner
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealsMakeMinerPostTest() throws Exception {
        String miner = null;
        String dealRequest = null;
        String response = api.dealsMakeMinerPost(miner, dealRequest);

        // TODO: test validations
    }
    
    /**
     * Get Deal Status
     *
     * This endpoint returns the status of a deal
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void dealsStatusDealGetTest() throws Exception {
        Integer deal = null;
        String response = api.dealsStatusDealGet(deal);

        // TODO: test validations
    }
    
    /**
     * Get storage failures
     *
     * This endpoint returns a list of storage failures
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void publicDealsFailuresGetTest() throws Exception {
        String response = api.publicDealsFailuresGet();

        // TODO: test validations
    }
    
    /**
     * Query Ask
     *
     * This endpoint returns the ask for a given CID
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void publicMinersStorageQueryMinerGetTest() throws Exception {
        String miner = null;
        String response = api.publicMinersStorageQueryMinerGet(miner);

        // TODO: test validations
    }
    
}
