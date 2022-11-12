# coding: utf-8

"""
    Estuary API

    This is the API for the Estuary application.  # noqa: E501

    OpenAPI spec version: 0.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from estuary_client.api_client import ApiClient


class CollectionsApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def collections_coluuid_commit_post(self, coluuid, **kwargs):  # noqa: E501
        """Produce a CID of the collection contents  # noqa: E501

        This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_commit_post(coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: coluuid (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_coluuid_commit_post_with_http_info(coluuid, **kwargs)  # noqa: E501
        else:
            (data) = self.collections_coluuid_commit_post_with_http_info(coluuid, **kwargs)  # noqa: E501
            return data

    def collections_coluuid_commit_post_with_http_info(self, coluuid, **kwargs):  # noqa: E501
        """Produce a CID of the collection contents  # noqa: E501

        This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_commit_post_with_http_info(coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: coluuid (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['coluuid']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_coluuid_commit_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'coluuid' is set
        if ('coluuid' not in params or
                params['coluuid'] is None):
            raise ValueError("Missing the required parameter `coluuid` when calling `collections_coluuid_commit_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'coluuid' in params:
            path_params['coluuid'] = params['coluuid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/{coluuid}/commit', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='str',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def collections_coluuid_contents_delete(self, body, coluuid, contentid, **kwargs):  # noqa: E501
        """Deletes a content from a collection  # noqa: E501

        This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_contents_delete(body, coluuid, contentid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param MainDeleteContentFromCollectionBody body: Variable to use when filtering for files (must be either 'path' or 'content_id') (required)
        :param str coluuid: Collection ID (required)
        :param str contentid: Content ID (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_coluuid_contents_delete_with_http_info(body, coluuid, contentid, **kwargs)  # noqa: E501
        else:
            (data) = self.collections_coluuid_contents_delete_with_http_info(body, coluuid, contentid, **kwargs)  # noqa: E501
            return data

    def collections_coluuid_contents_delete_with_http_info(self, body, coluuid, contentid, **kwargs):  # noqa: E501
        """Deletes a content from a collection  # noqa: E501

        This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_contents_delete_with_http_info(body, coluuid, contentid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param MainDeleteContentFromCollectionBody body: Variable to use when filtering for files (must be either 'path' or 'content_id') (required)
        :param str coluuid: Collection ID (required)
        :param str contentid: Content ID (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body', 'coluuid', 'contentid']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_coluuid_contents_delete" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'body' is set
        if ('body' not in params or
                params['body'] is None):
            raise ValueError("Missing the required parameter `body` when calling `collections_coluuid_contents_delete`")  # noqa: E501
        # verify the required parameter 'coluuid' is set
        if ('coluuid' not in params or
                params['coluuid'] is None):
            raise ValueError("Missing the required parameter `coluuid` when calling `collections_coluuid_contents_delete`")  # noqa: E501
        # verify the required parameter 'contentid' is set
        if ('contentid' not in params or
                params['contentid'] is None):
            raise ValueError("Missing the required parameter `contentid` when calling `collections_coluuid_contents_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'coluuid' in params:
            path_params['coluuid'] = params['coluuid']  # noqa: E501
        if 'contentid' in params:
            path_params['contentid'] = params['contentid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/{coluuid}/contents', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='str',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def collections_coluuid_delete(self, coluuid, **kwargs):  # noqa: E501
        """Deletes a collection  # noqa: E501

        This endpoint is used to delete an existing collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_delete(coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: Collection ID (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_coluuid_delete_with_http_info(coluuid, **kwargs)  # noqa: E501
        else:
            (data) = self.collections_coluuid_delete_with_http_info(coluuid, **kwargs)  # noqa: E501
            return data

    def collections_coluuid_delete_with_http_info(self, coluuid, **kwargs):  # noqa: E501
        """Deletes a collection  # noqa: E501

        This endpoint is used to delete an existing collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_delete_with_http_info(coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: Collection ID (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['coluuid']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_coluuid_delete" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'coluuid' is set
        if ('coluuid' not in params or
                params['coluuid'] is None):
            raise ValueError("Missing the required parameter `coluuid` when calling `collections_coluuid_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'coluuid' in params:
            path_params['coluuid'] = params['coluuid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/{coluuid}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='str',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def collections_coluuid_get(self, coluuid, **kwargs):  # noqa: E501
        """Get contents in a collection  # noqa: E501

        This endpoint is used to get contents in a collection. If no colpath query param is passed  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_get(coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: coluuid (required)
        :param str dir: Directory
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_coluuid_get_with_http_info(coluuid, **kwargs)  # noqa: E501
        else:
            (data) = self.collections_coluuid_get_with_http_info(coluuid, **kwargs)  # noqa: E501
            return data

    def collections_coluuid_get_with_http_info(self, coluuid, **kwargs):  # noqa: E501
        """Get contents in a collection  # noqa: E501

        This endpoint is used to get contents in a collection. If no colpath query param is passed  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_get_with_http_info(coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: coluuid (required)
        :param str dir: Directory
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['coluuid', 'dir']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_coluuid_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'coluuid' is set
        if ('coluuid' not in params or
                params['coluuid'] is None):
            raise ValueError("Missing the required parameter `coluuid` when calling `collections_coluuid_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'coluuid' in params:
            path_params['coluuid'] = params['coluuid']  # noqa: E501

        query_params = []
        if 'dir' in params:
            query_params.append(('dir', params['dir']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/{coluuid}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='str',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def collections_coluuid_post(self, body, coluuid, **kwargs):  # noqa: E501
        """Add contents to a collection  # noqa: E501

        This endpoint adds already-pinned contents (that have ContentIDs) to a collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_post(body, coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param list[int] body: Content IDs to add to collection (required)
        :param str coluuid: coluuid (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_coluuid_post_with_http_info(body, coluuid, **kwargs)  # noqa: E501
        else:
            (data) = self.collections_coluuid_post_with_http_info(body, coluuid, **kwargs)  # noqa: E501
            return data

    def collections_coluuid_post_with_http_info(self, body, coluuid, **kwargs):  # noqa: E501
        """Add contents to a collection  # noqa: E501

        This endpoint adds already-pinned contents (that have ContentIDs) to a collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_coluuid_post_with_http_info(body, coluuid, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param list[int] body: Content IDs to add to collection (required)
        :param str coluuid: coluuid (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body', 'coluuid']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_coluuid_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'body' is set
        if ('body' not in params or
                params['body'] is None):
            raise ValueError("Missing the required parameter `body` when calling `collections_coluuid_post`")  # noqa: E501
        # verify the required parameter 'coluuid' is set
        if ('coluuid' not in params or
                params['coluuid'] is None):
            raise ValueError("Missing the required parameter `coluuid` when calling `collections_coluuid_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'coluuid' in params:
            path_params['coluuid'] = params['coluuid']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/{coluuid}', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='str',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def collections_fs_add_post(self, coluuid, content, path, **kwargs):  # noqa: E501
        """Add a file to a collection  # noqa: E501

        This endpoint adds a file to a collection  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_fs_add_post(coluuid, content, path, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: Collection ID (required)
        :param str content: Content (required)
        :param str path: Path to file (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_fs_add_post_with_http_info(coluuid, content, path, **kwargs)  # noqa: E501
        else:
            (data) = self.collections_fs_add_post_with_http_info(coluuid, content, path, **kwargs)  # noqa: E501
            return data

    def collections_fs_add_post_with_http_info(self, coluuid, content, path, **kwargs):  # noqa: E501
        """Add a file to a collection  # noqa: E501

        This endpoint adds a file to a collection  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_fs_add_post_with_http_info(coluuid, content, path, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str coluuid: Collection ID (required)
        :param str content: Content (required)
        :param str path: Path to file (required)
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['coluuid', 'content', 'path']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_fs_add_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'coluuid' is set
        if ('coluuid' not in params or
                params['coluuid'] is None):
            raise ValueError("Missing the required parameter `coluuid` when calling `collections_fs_add_post`")  # noqa: E501
        # verify the required parameter 'content' is set
        if ('content' not in params or
                params['content'] is None):
            raise ValueError("Missing the required parameter `content` when calling `collections_fs_add_post`")  # noqa: E501
        # verify the required parameter 'path' is set
        if ('path' not in params or
                params['path'] is None):
            raise ValueError("Missing the required parameter `path` when calling `collections_fs_add_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'coluuid' in params:
            query_params.append(('coluuid', params['coluuid']))  # noqa: E501
        if 'content' in params:
            query_params.append(('content', params['content']))  # noqa: E501
        if 'path' in params:
            query_params.append(('path', params['path']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/fs/add', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='str',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def collections_get(self, **kwargs):  # noqa: E501
        """List all collections  # noqa: E501

        This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: list[list[CollectionsCollection]]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.collections_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def collections_get_with_http_info(self, **kwargs):  # noqa: E501
        """List all collections  # noqa: E501

        This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: list[list[CollectionsCollection]]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = []  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[list[CollectionsCollection]]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def collections_post(self, body, **kwargs):  # noqa: E501
        """Create a new collection  # noqa: E501

        This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_post(body, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param MainCreateCollectionBody body: Collection name and description (required)
        :return: CollectionsCollection
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.collections_post_with_http_info(body, **kwargs)  # noqa: E501
        else:
            (data) = self.collections_post_with_http_info(body, **kwargs)  # noqa: E501
            return data

    def collections_post_with_http_info(self, body, **kwargs):  # noqa: E501
        """Create a new collection  # noqa: E501

        This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.collections_post_with_http_info(body, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param MainCreateCollectionBody body: Collection name and description (required)
        :return: CollectionsCollection
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method collections_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'body' is set
        if ('body' not in params or
                params['body'] is None):
            raise ValueError("Missing the required parameter `body` when calling `collections_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['bearerAuth']  # noqa: E501

        return self.api_client.call_api(
            '/collections/', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='CollectionsCollection',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
