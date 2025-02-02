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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using estuary-client.Client;
using estuary-client.Api;
using estuary-client.Model;

namespace estuary-client.Test
{
    /// <summary>
    ///  Class for testing DealsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class DealsApiTests
    {
        private DealsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new DealsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of DealsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' DealsApi
            //Assert.IsInstanceOfType(typeof(DealsApi), instance, "instance is a DealsApi");
        }

        
        /// <summary>
        /// Test DealEstimatePost
        /// </summary>
        [Test]
        public void DealEstimatePostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //MainEstimateDealBody body = null;
            //var response = instance.DealEstimatePost(body);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealInfoDealidGet
        /// </summary>
        [Test]
        public void DealInfoDealidGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int? dealid = null;
            //var response = instance.DealInfoDealidGet(dealid);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealProposalPropcidGet
        /// </summary>
        [Test]
        public void DealProposalPropcidGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string propcid = null;
            //var response = instance.DealProposalPropcidGet(propcid);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealQueryMinerGet
        /// </summary>
        [Test]
        public void DealQueryMinerGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string miner = null;
            //var response = instance.DealQueryMinerGet(miner);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealStatusByProposalPropcidGet
        /// </summary>
        [Test]
        public void DealStatusByProposalPropcidGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string propcid = null;
            //var response = instance.DealStatusByProposalPropcidGet(propcid);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealStatusMinerPropcidGet
        /// </summary>
        [Test]
        public void DealStatusMinerPropcidGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string miner = null;
            //string propcid = null;
            //var response = instance.DealStatusMinerPropcidGet(miner, propcid);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealTransferInProgressGet
        /// </summary>
        [Test]
        public void DealTransferInProgressGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.DealTransferInProgressGet();
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealTransferStatusPost
        /// </summary>
        [Test]
        public void DealTransferStatusPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //MainChannelIDParam chanid = null;
            //var response = instance.DealTransferStatusPost(chanid);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealsFailuresGet
        /// </summary>
        [Test]
        public void DealsFailuresGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.DealsFailuresGet();
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealsMakeMinerPost
        /// </summary>
        [Test]
        public void DealsMakeMinerPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string miner = null;
            //string dealRequest = null;
            //var response = instance.DealsMakeMinerPost(miner, dealRequest);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test DealsStatusDealGet
        /// </summary>
        [Test]
        public void DealsStatusDealGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int? deal = null;
            //var response = instance.DealsStatusDealGet(deal);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test PublicDealsFailuresGet
        /// </summary>
        [Test]
        public void PublicDealsFailuresGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.PublicDealsFailuresGet();
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test PublicMinersStorageQueryMinerGet
        /// </summary>
        [Test]
        public void PublicMinersStorageQueryMinerGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string miner = null;
            //var response = instance.PublicMinersStorageQueryMinerGet(miner);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
    }

}
