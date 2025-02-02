# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from estuary-client.models.base_model_ import Model
from estuary-client import util


class MainDeleteContentFromCollectionBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, by: str=None, value: str=None):  # noqa: E501
        """MainDeleteContentFromCollectionBody - a model defined in Swagger

        :param by: The by of this MainDeleteContentFromCollectionBody.  # noqa: E501
        :type by: str
        :param value: The value of this MainDeleteContentFromCollectionBody.  # noqa: E501
        :type value: str
        """
        self.swagger_types = {
            'by': str,
            'value': str
        }

        self.attribute_map = {
            'by': 'by',
            'value': 'value'
        }

        self._by = by
        self._value = value

    @classmethod
    def from_dict(cls, dikt) -> 'MainDeleteContentFromCollectionBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The main.deleteContentFromCollectionBody of this MainDeleteContentFromCollectionBody.  # noqa: E501
        :rtype: MainDeleteContentFromCollectionBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def by(self) -> str:
        """Gets the by of this MainDeleteContentFromCollectionBody.


        :return: The by of this MainDeleteContentFromCollectionBody.
        :rtype: str
        """
        return self._by

    @by.setter
    def by(self, by: str):
        """Sets the by of this MainDeleteContentFromCollectionBody.


        :param by: The by of this MainDeleteContentFromCollectionBody.
        :type by: str
        """

        self._by = by

    @property
    def value(self) -> str:
        """Gets the value of this MainDeleteContentFromCollectionBody.


        :return: The value of this MainDeleteContentFromCollectionBody.
        :rtype: str
        """
        return self._value

    @value.setter
    def value(self, value: str):
        """Sets the value of this MainDeleteContentFromCollectionBody.


        :param value: The value of this MainDeleteContentFromCollectionBody.
        :type value: str
        """

        self._value = value
