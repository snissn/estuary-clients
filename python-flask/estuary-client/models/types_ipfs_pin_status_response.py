# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from estuary-client.models.base_model_ import Model
from estuary-client.models.types_ipfs_pin import TypesIpfsPin  # noqa: F401,E501
from estuary-client import util


class TypesIpfsPinStatusResponse(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, created: str=None, delegates: List[str]=None, info: object=None, pin: TypesIpfsPin=None, requestid: str=None, status: str=None):  # noqa: E501
        """TypesIpfsPinStatusResponse - a model defined in Swagger

        :param created: The created of this TypesIpfsPinStatusResponse.  # noqa: E501
        :type created: str
        :param delegates: The delegates of this TypesIpfsPinStatusResponse.  # noqa: E501
        :type delegates: List[str]
        :param info: The info of this TypesIpfsPinStatusResponse.  # noqa: E501
        :type info: object
        :param pin: The pin of this TypesIpfsPinStatusResponse.  # noqa: E501
        :type pin: TypesIpfsPin
        :param requestid: The requestid of this TypesIpfsPinStatusResponse.  # noqa: E501
        :type requestid: str
        :param status: The status of this TypesIpfsPinStatusResponse.  # noqa: E501
        :type status: str
        """
        self.swagger_types = {
            'created': str,
            'delegates': List[str],
            'info': object,
            'pin': TypesIpfsPin,
            'requestid': str,
            'status': str
        }

        self.attribute_map = {
            'created': 'created',
            'delegates': 'delegates',
            'info': 'info',
            'pin': 'pin',
            'requestid': 'requestid',
            'status': 'status'
        }
        self._created = created
        self._delegates = delegates
        self._info = info
        self._pin = pin
        self._requestid = requestid
        self._status = status

    @classmethod
    def from_dict(cls, dikt) -> 'TypesIpfsPinStatusResponse':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The types.IpfsPinStatusResponse of this TypesIpfsPinStatusResponse.  # noqa: E501
        :rtype: TypesIpfsPinStatusResponse
        """
        return util.deserialize_model(dikt, cls)

    @property
    def created(self) -> str:
        """Gets the created of this TypesIpfsPinStatusResponse.


        :return: The created of this TypesIpfsPinStatusResponse.
        :rtype: str
        """
        return self._created

    @created.setter
    def created(self, created: str):
        """Sets the created of this TypesIpfsPinStatusResponse.


        :param created: The created of this TypesIpfsPinStatusResponse.
        :type created: str
        """

        self._created = created

    @property
    def delegates(self) -> List[str]:
        """Gets the delegates of this TypesIpfsPinStatusResponse.


        :return: The delegates of this TypesIpfsPinStatusResponse.
        :rtype: List[str]
        """
        return self._delegates

    @delegates.setter
    def delegates(self, delegates: List[str]):
        """Sets the delegates of this TypesIpfsPinStatusResponse.


        :param delegates: The delegates of this TypesIpfsPinStatusResponse.
        :type delegates: List[str]
        """

        self._delegates = delegates

    @property
    def info(self) -> object:
        """Gets the info of this TypesIpfsPinStatusResponse.


        :return: The info of this TypesIpfsPinStatusResponse.
        :rtype: object
        """
        return self._info

    @info.setter
    def info(self, info: object):
        """Sets the info of this TypesIpfsPinStatusResponse.


        :param info: The info of this TypesIpfsPinStatusResponse.
        :type info: object
        """

        self._info = info

    @property
    def pin(self) -> TypesIpfsPin:
        """Gets the pin of this TypesIpfsPinStatusResponse.


        :return: The pin of this TypesIpfsPinStatusResponse.
        :rtype: TypesIpfsPin
        """
        return self._pin

    @pin.setter
    def pin(self, pin: TypesIpfsPin):
        """Sets the pin of this TypesIpfsPinStatusResponse.


        :param pin: The pin of this TypesIpfsPinStatusResponse.
        :type pin: TypesIpfsPin
        """

        self._pin = pin

    @property
    def requestid(self) -> str:
        """Gets the requestid of this TypesIpfsPinStatusResponse.


        :return: The requestid of this TypesIpfsPinStatusResponse.
        :rtype: str
        """
        return self._requestid

    @requestid.setter
    def requestid(self, requestid: str):
        """Sets the requestid of this TypesIpfsPinStatusResponse.


        :param requestid: The requestid of this TypesIpfsPinStatusResponse.
        :type requestid: str
        """

        self._requestid = requestid

    @property
    def status(self) -> str:
        """Gets the status of this TypesIpfsPinStatusResponse.


        :return: The status of this TypesIpfsPinStatusResponse.
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status: str):
        """Sets the status of this TypesIpfsPinStatusResponse.


        :param status: The status of this TypesIpfsPinStatusResponse.
        :type status: str
        """

        self._status = status
