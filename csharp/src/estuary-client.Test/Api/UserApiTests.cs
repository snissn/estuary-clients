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
    ///  Class for testing UserApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class UserApiTests
    {
        private UserApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new UserApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of UserApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' UserApi
            //Assert.IsInstanceOfType(typeof(UserApi), instance, "instance is a UserApi");
        }

        
        /// <summary>
        /// Test UserApiKeysGet
        /// </summary>
        [Test]
        public void UserApiKeysGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.UserApiKeysGet();
            //Assert.IsInstanceOf<List<List<MainGetApiKeysResp>>> (response, "response is List<List<MainGetApiKeysResp>>");
        }
        
        /// <summary>
        /// Test UserApiKeysKeyOrHashDelete
        /// </summary>
        [Test]
        public void UserApiKeysKeyOrHashDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string keyOrHash = null;
            //var response = instance.UserApiKeysKeyOrHashDelete(keyOrHash);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test UserApiKeysPost
        /// </summary>
        [Test]
        public void UserApiKeysPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string expiry = null;
            //string perms = null;
            //var response = instance.UserApiKeysPost(expiry, perms);
            //Assert.IsInstanceOf<MainGetApiKeysResp> (response, "response is MainGetApiKeysResp");
        }
        
        /// <summary>
        /// Test UserExportGet
        /// </summary>
        [Test]
        public void UserExportGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.UserExportGet();
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test UserStatsGet
        /// </summary>
        [Test]
        public void UserStatsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.UserStatsGet();
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
    }

}
