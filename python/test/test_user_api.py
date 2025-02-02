# coding: utf-8

"""
    Estuary API

    This is the API for the Estuary application.  # noqa: E501

    OpenAPI spec version: 0.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import estuary_client
from estuary_client.api.user_api import UserApi  # noqa: E501
from estuary_client.rest import ApiException


class TestUserApi(unittest.TestCase):
    """UserApi unit test stubs"""

    def setUp(self):
        self.api = estuary_client.api.user_api.UserApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_user_api_keys_get(self):
        """Test case for user_api_keys_get

        Get API keys for a user  # noqa: E501
        """
        pass

    def test_user_api_keys_key_or_hash_delete(self):
        """Test case for user_api_keys_key_or_hash_delete

        Revoke a User API Key.  # noqa: E501
        """
        pass

    def test_user_api_keys_post(self):
        """Test case for user_api_keys_post

        Create API keys for a user  # noqa: E501
        """
        pass

    def test_user_export_get(self):
        """Test case for user_export_get

        Export user data  # noqa: E501
        """
        pass

    def test_user_stats_get(self):
        """Test case for user_stats_get

        Create API keys for a user  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
