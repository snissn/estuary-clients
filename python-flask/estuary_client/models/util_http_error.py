# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from estuary_client.models.base_model_ import Model
from estuary_client import util


class UtilHttpError(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, code: int=None, details: str=None, reason: str=None):  # noqa: E501
        """UtilHttpError - a model defined in Swagger

        :param code: The code of this UtilHttpError.  # noqa: E501
        :type code: int
        :param details: The details of this UtilHttpError.  # noqa: E501
        :type details: str
        :param reason: The reason of this UtilHttpError.  # noqa: E501
        :type reason: str
        """
        self.swagger_types = {
            'code': int,
            'details': str,
            'reason': str
        }

        self.attribute_map = {
            'code': 'code',
            'details': 'details',
            'reason': 'reason'
        }

        self._code = code
        self._details = details
        self._reason = reason

    @classmethod
    def from_dict(cls, dikt) -> 'UtilHttpError':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The util.HttpError of this UtilHttpError.  # noqa: E501
        :rtype: UtilHttpError
        """
        return util.deserialize_model(dikt, cls)

    @property
    def code(self) -> int:
        """Gets the code of this UtilHttpError.


        :return: The code of this UtilHttpError.
        :rtype: int
        """
        return self._code

    @code.setter
    def code(self, code: int):
        """Sets the code of this UtilHttpError.


        :param code: The code of this UtilHttpError.
        :type code: int
        """

        self._code = code

    @property
    def details(self) -> str:
        """Gets the details of this UtilHttpError.


        :return: The details of this UtilHttpError.
        :rtype: str
        """
        return self._details

    @details.setter
    def details(self, details: str):
        """Sets the details of this UtilHttpError.


        :param details: The details of this UtilHttpError.
        :type details: str
        """

        self._details = details

    @property
    def reason(self) -> str:
        """Gets the reason of this UtilHttpError.


        :return: The reason of this UtilHttpError.
        :rtype: str
        """
        return self._reason

    @reason.setter
    def reason(self, reason: str):
        """Sets the reason of this UtilHttpError.


        :param reason: The reason of this UtilHttpError.
        :type reason: str
        """

        self._reason = reason