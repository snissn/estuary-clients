# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from estuary-client.models.base_model_ import Model
from estuary-client import util


class UtilContentCreateBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, coluuid: str=None, dir: str=None, location: str=None, name: str=None, root: str=None, type: int=None):  # noqa: E501
        """UtilContentCreateBody - a model defined in Swagger

        :param coluuid: The coluuid of this UtilContentCreateBody.  # noqa: E501
        :type coluuid: str
        :param dir: The dir of this UtilContentCreateBody.  # noqa: E501
        :type dir: str
        :param location: The location of this UtilContentCreateBody.  # noqa: E501
        :type location: str
        :param name: The name of this UtilContentCreateBody.  # noqa: E501
        :type name: str
        :param root: The root of this UtilContentCreateBody.  # noqa: E501
        :type root: str
        :param type: The type of this UtilContentCreateBody.  # noqa: E501
        :type type: int
        """
        self.swagger_types = {
            'coluuid': str,
            'dir': str,
            'location': str,
            'name': str,
            'root': str,
            'type': int
        }

        self.attribute_map = {
            'coluuid': 'coluuid',
            'dir': 'dir',
            'location': 'location',
            'name': 'name',
            'root': 'root',
            'type': 'type'
        }

        self._coluuid = coluuid
        self._dir = dir
        self._location = location
        self._name = name
        self._root = root
        self._type = type

    @classmethod
    def from_dict(cls, dikt) -> 'UtilContentCreateBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The util.ContentCreateBody of this UtilContentCreateBody.  # noqa: E501
        :rtype: UtilContentCreateBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def coluuid(self) -> str:
        """Gets the coluuid of this UtilContentCreateBody.


        :return: The coluuid of this UtilContentCreateBody.
        :rtype: str
        """
        return self._coluuid

    @coluuid.setter
    def coluuid(self, coluuid: str):
        """Sets the coluuid of this UtilContentCreateBody.


        :param coluuid: The coluuid of this UtilContentCreateBody.
        :type coluuid: str
        """

        self._coluuid = coluuid

    @property
    def dir(self) -> str:
        """Gets the dir of this UtilContentCreateBody.


        :return: The dir of this UtilContentCreateBody.
        :rtype: str
        """
        return self._dir

    @dir.setter
    def dir(self, dir: str):
        """Sets the dir of this UtilContentCreateBody.


        :param dir: The dir of this UtilContentCreateBody.
        :type dir: str
        """

        self._dir = dir

    @property
    def location(self) -> str:
        """Gets the location of this UtilContentCreateBody.


        :return: The location of this UtilContentCreateBody.
        :rtype: str
        """
        return self._location

    @location.setter
    def location(self, location: str):
        """Sets the location of this UtilContentCreateBody.


        :param location: The location of this UtilContentCreateBody.
        :type location: str
        """

        self._location = location

    @property
    def name(self) -> str:
        """Gets the name of this UtilContentCreateBody.


        :return: The name of this UtilContentCreateBody.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this UtilContentCreateBody.


        :param name: The name of this UtilContentCreateBody.
        :type name: str
        """

        self._name = name

    @property
    def root(self) -> str:
        """Gets the root of this UtilContentCreateBody.


        :return: The root of this UtilContentCreateBody.
        :rtype: str
        """
        return self._root

    @root.setter
    def root(self, root: str):
        """Sets the root of this UtilContentCreateBody.


        :param root: The root of this UtilContentCreateBody.
        :type root: str
        """

        self._root = root

    @property
    def type(self) -> int:
        """Gets the type of this UtilContentCreateBody.


        :return: The type of this UtilContentCreateBody.
        :rtype: int
        """
        return self._type

    @type.setter
    def type(self, type: int):
        """Sets the type of this UtilContentCreateBody.


        :param type: The type of this UtilContentCreateBody.
        :type type: int
        """

        self._type = type
