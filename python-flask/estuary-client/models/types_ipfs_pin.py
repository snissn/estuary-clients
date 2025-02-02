# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from estuary-client.models.base_model_ import Model
from estuary-client import util


class TypesIpfsPin(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, cid: str=None, meta: object=None, name: str=None, origins: List[str]=None):  # noqa: E501
        """TypesIpfsPin - a model defined in Swagger

        :param cid: The cid of this TypesIpfsPin.  # noqa: E501
        :type cid: str
        :param meta: The meta of this TypesIpfsPin.  # noqa: E501
        :type meta: object
        :param name: The name of this TypesIpfsPin.  # noqa: E501
        :type name: str
        :param origins: The origins of this TypesIpfsPin.  # noqa: E501
        :type origins: List[str]
        """
        self.swagger_types = {
            'cid': str,
            'meta': object,
            'name': str,
            'origins': List[str]
        }

        self.attribute_map = {
            'cid': 'cid',
            'meta': 'meta',
            'name': 'name',
            'origins': 'origins'
        }

        self._cid = cid
        self._meta = meta
        self._name = name
        self._origins = origins

    @classmethod
    def from_dict(cls, dikt) -> 'TypesIpfsPin':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The types.IpfsPin of this TypesIpfsPin.  # noqa: E501
        :rtype: TypesIpfsPin
        """
        return util.deserialize_model(dikt, cls)

    @property
    def cid(self) -> str:
        """Gets the cid of this TypesIpfsPin.


        :return: The cid of this TypesIpfsPin.
        :rtype: str
        """
        return self._cid

    @cid.setter
    def cid(self, cid: str):
        """Sets the cid of this TypesIpfsPin.


        :param cid: The cid of this TypesIpfsPin.
        :type cid: str
        """

        self._cid = cid

    @property
    def meta(self) -> object:
        """Gets the meta of this TypesIpfsPin.


        :return: The meta of this TypesIpfsPin.
        :rtype: object
        """
        return self._meta

    @meta.setter
    def meta(self, meta: object):
        """Sets the meta of this TypesIpfsPin.


        :param meta: The meta of this TypesIpfsPin.
        :type meta: object
        """

        self._meta = meta

    @property
    def name(self) -> str:
        """Gets the name of this TypesIpfsPin.


        :return: The name of this TypesIpfsPin.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this TypesIpfsPin.


        :param name: The name of this TypesIpfsPin.
        :type name: str
        """

        self._name = name

    @property
    def origins(self) -> List[str]:
        """Gets the origins of this TypesIpfsPin.


        :return: The origins of this TypesIpfsPin.
        :rtype: List[str]
        """
        return self._origins

    @origins.setter
    def origins(self, origins: List[str]):
        """Sets the origins of this TypesIpfsPin.


        :param origins: The origins of this TypesIpfsPin.
        :type origins: List[str]
        """

        self._origins = origins
