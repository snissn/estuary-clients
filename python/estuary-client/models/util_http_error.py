# coding: utf-8

"""
    Estuary API

    This is the API for the Estuary application.  # noqa: E501

    OpenAPI spec version: 0.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from estuary-client.configuration import Configuration


class UtilHttpError(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'code': 'int',
        'details': 'str',
        'reason': 'str'
    }

    attribute_map = {
        'code': 'code',
        'details': 'details',
        'reason': 'reason'
    }

    def __init__(self, code=None, details=None, reason=None, _configuration=None):  # noqa: E501
        """UtilHttpError - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._code = None
        self._details = None
        self._reason = None
        self.discriminator = None

        if code is not None:
            self.code = code
        if details is not None:
            self.details = details
        if reason is not None:
            self.reason = reason

    @property
    def code(self):
        """Gets the code of this UtilHttpError.  # noqa: E501


        :return: The code of this UtilHttpError.  # noqa: E501
        :rtype: int
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this UtilHttpError.


        :param code: The code of this UtilHttpError.  # noqa: E501
        :type: int
        """

        self._code = code

    @property
    def details(self):
        """Gets the details of this UtilHttpError.  # noqa: E501


        :return: The details of this UtilHttpError.  # noqa: E501
        :rtype: str
        """
        return self._details

    @details.setter
    def details(self, details):
        """Sets the details of this UtilHttpError.


        :param details: The details of this UtilHttpError.  # noqa: E501
        :type: str
        """

        self._details = details

    @property
    def reason(self):
        """Gets the reason of this UtilHttpError.  # noqa: E501


        :return: The reason of this UtilHttpError.  # noqa: E501
        :rtype: str
        """
        return self._reason

    @reason.setter
    def reason(self, reason):
        """Sets the reason of this UtilHttpError.


        :param reason: The reason of this UtilHttpError.  # noqa: E501
        :type: str
        """

        self._reason = reason

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(UtilHttpError, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, UtilHttpError):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UtilHttpError):
            return True

        return self.to_dict() != other.to_dict()