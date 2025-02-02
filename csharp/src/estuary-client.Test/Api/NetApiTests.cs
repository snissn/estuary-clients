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
    ///  Class for testing NetApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class NetApiTests
    {
        private NetApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new NetApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of NetApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' NetApi
            //Assert.IsInstanceOfType(typeof(NetApi), instance, "instance is a NetApi");
        }

        
        /// <summary>
        /// Test NetAddrsGet
        /// </summary>
        [Test]
        public void NetAddrsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.NetAddrsGet();
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test PublicMinersFailuresMinerGet
        /// </summary>
        [Test]
        public void PublicMinersFailuresMinerGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string miner = null;
            //var response = instance.PublicMinersFailuresMinerGet(miner);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test PublicMinersGet
        /// </summary>
        [Test]
        public void PublicMinersGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.PublicMinersGet();
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test PublicNetAddrsGet
        /// </summary>
        [Test]
        public void PublicNetAddrsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.PublicNetAddrsGet();
            //Assert.IsInstanceOf<List<string>> (response, "response is List<string>");
        }
        
        /// <summary>
        /// Test PublicNetPeersGet
        /// </summary>
        [Test]
        public void PublicNetPeersGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.PublicNetPeersGet();
            //Assert.IsInstanceOf<List<string>> (response, "response is List<string>");
        }
        
    }

}
