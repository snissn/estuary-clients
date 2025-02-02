# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from estuary-client.models.base_model_ import Model
from estuary-client import util


class MainGetApiKeysResp(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, expiry: str=None, label: str=None, token: str=None, token_hash: str=None):  # noqa: E501
        """MainGetApiKeysResp - a model defined in Swagger

        :param expiry: The expiry of this MainGetApiKeysResp.  # noqa: E501
        :type expiry: str
        :param label: The label of this MainGetApiKeysResp.  # noqa: E501
        :type label: str
        :param token: The token of this MainGetApiKeysResp.  # noqa: E501
        :type token: str
        :param token_hash: The token_hash of this MainGetApiKeysResp.  # noqa: E501
        :type token_hash: str
        """
        self.swagger_types = {
            'expiry': str,
            'label': str,
            'token': str,
            'token_hash': str
        }

        self.attribute_map = {
            'expiry': 'expiry',
            'label': 'label',
            'token': 'token',
            'token_hash': 'tokenHash'
        }

        self._expiry = expiry
        self._label = label
        self._token = token
        self._token_hash = token_hash

    @classmethod
    def from_dict(cls, dikt) -> 'MainGetApiKeysResp':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The main.getApiKeysResp of this MainGetApiKeysResp.  # noqa: E501
        :rtype: MainGetApiKeysResp
        """
        return util.deserialize_model(dikt, cls)

    @property
    def expiry(self) -> str:
        """Gets the expiry of this MainGetApiKeysResp.


        :return: The expiry of this MainGetApiKeysResp.
        :rtype: str
        """
        return self._expiry

    @expiry.setter
    def expiry(self, expiry: str):
        """Sets the expiry of this MainGetApiKeysResp.


        :param expiry: The expiry of this MainGetApiKeysResp.
        :type expiry: str
        """

        self._expiry = expiry

    @property
    def label(self) -> str:
        """Gets the label of this MainGetApiKeysResp.


        :return: The label of this MainGetApiKeysResp.
        :rtype: str
        """
        return self._label

    @label.setter
    def label(self, label: str):
        """Sets the label of this MainGetApiKeysResp.


        :param label: The label of this MainGetApiKeysResp.
        :type label: str
        """

        self._label = label

    @property
    def token(self) -> str:
        """Gets the token of this MainGetApiKeysResp.


        :return: The token of this MainGetApiKeysResp.
        :rtype: str
        """
        return self._token

    @token.setter
    def token(self, token: str):
        """Sets the token of this MainGetApiKeysResp.


        :param token: The token of this MainGetApiKeysResp.
        :type token: str
        """

        self._token = token

    @property
    def token_hash(self) -> str:
        """Gets the token_hash of this MainGetApiKeysResp.


        :return: The token_hash of this MainGetApiKeysResp.
        :rtype: str
        """
        return self._token_hash

    @token_hash.setter
    def token_hash(self, token_hash: str):
        """Sets the token_hash of this MainGetApiKeysResp.


        :param token_hash: The token_hash of this MainGetApiKeysResp.
        :type token_hash: str
        """

        self._token_hash = token_hash
