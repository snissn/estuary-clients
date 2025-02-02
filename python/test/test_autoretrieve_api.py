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
from estuary_client.api.autoretrieve_api import AutoretrieveApi  # noqa: E501
from estuary_client.rest import ApiException


class TestAutoretrieveApi(unittest.TestCase):
    """AutoretrieveApi unit test stubs"""

    def setUp(self):
        self.api = estuary_client.api.autoretrieve_api.AutoretrieveApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_admin_autoretrieve_init_post(self):
        """Test case for admin_autoretrieve_init_post

        Register autoretrieve server  # noqa: E501
        """
        pass

    def test_admin_autoretrieve_list_get(self):
        """Test case for admin_autoretrieve_list_get

        List autoretrieve servers  # noqa: E501
        """
        pass

    def test_autoretrieve_heartbeat_post(self):
        """Test case for autoretrieve_heartbeat_post

        Marks autoretrieve server as up  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
