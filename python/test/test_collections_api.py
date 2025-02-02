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
from estuary_client.api.collections_api import CollectionsApi  # noqa: E501
from estuary_client.rest import ApiException


class TestCollectionsApi(unittest.TestCase):
    """CollectionsApi unit test stubs"""

    def setUp(self):
        self.api = estuary_client.api.collections_api.CollectionsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_collections_coluuid_commit_post(self):
        """Test case for collections_coluuid_commit_post

        Produce a CID of the collection contents  # noqa: E501
        """
        pass

    def test_collections_coluuid_contents_delete(self):
        """Test case for collections_coluuid_contents_delete

        Deletes a content from a collection  # noqa: E501
        """
        pass

    def test_collections_coluuid_delete(self):
        """Test case for collections_coluuid_delete

        Deletes a collection  # noqa: E501
        """
        pass

    def test_collections_coluuid_get(self):
        """Test case for collections_coluuid_get

        Get contents in a collection  # noqa: E501
        """
        pass

    def test_collections_coluuid_post(self):
        """Test case for collections_coluuid_post

        Add contents to a collection  # noqa: E501
        """
        pass

    def test_collections_fs_add_post(self):
        """Test case for collections_fs_add_post

        Add a file to a collection  # noqa: E501
        """
        pass

    def test_collections_get(self):
        """Test case for collections_get

        List all collections  # noqa: E501
        """
        pass

    def test_collections_post(self):
        """Test case for collections_post

        Create a new collection  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
