=begin
#Estuary API

#This is the API for the Estuary application.

OpenAPI spec version: 0.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.28

=end

require 'uri'

module SwaggerClient
  class UserApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Get API keys for a user
    # This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.
    # @param [Hash] opts the optional parameters
    # @return [Array<Array<MainGetApiKeysResp>>]
    def user_api_keys_get(opts = {})
      data, _status_code, _headers = user_api_keys_get_with_http_info(opts)
      data
    end

    # Get API keys for a user
    # This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<Array<MainGetApiKeysResp>>, Fixnum, Hash)>] Array<Array<MainGetApiKeysResp>> data, response status code and response headers
    def user_api_keys_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UserApi.user_api_keys_get ...'
      end
      # resource path
      local_var_path = '/user/api-keys'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['bearerAuth']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Array<Array<MainGetApiKeysResp>>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UserApi#user_api_keys_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Revoke a User API Key.
    # This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that's assigned to the user. Revoked API keys are completely deleted and are not recoverable.
    # @param key_or_hash Key or Hash
    # @param [Hash] opts the optional parameters
    # @return [String]
    def user_api_keys_key_or_hash_delete(key_or_hash, opts = {})
      data, _status_code, _headers = user_api_keys_key_or_hash_delete_with_http_info(key_or_hash, opts)
      data
    end

    # Revoke a User API Key.
    # This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that&#39;s assigned to the user. Revoked API keys are completely deleted and are not recoverable.
    # @param key_or_hash Key or Hash
    # @param [Hash] opts the optional parameters
    # @return [Array<(String, Fixnum, Hash)>] String data, response status code and response headers
    def user_api_keys_key_or_hash_delete_with_http_info(key_or_hash, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UserApi.user_api_keys_key_or_hash_delete ...'
      end
      # verify the required parameter 'key_or_hash' is set
      if @api_client.config.client_side_validation && key_or_hash.nil?
        fail ArgumentError, "Missing the required parameter 'key_or_hash' when calling UserApi.user_api_keys_key_or_hash_delete"
      end
      # resource path
      local_var_path = '/user/api-keys/{key_or_hash}'.sub('{' + 'key_or_hash' + '}', key_or_hash.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['bearerAuth']
      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'String')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UserApi#user_api_keys_key_or_hash_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Create API keys for a user
    # This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :expiry Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h
    # @option opts [String] :perms Permissions -- currently unused
    # @return [MainGetApiKeysResp]
    def user_api_keys_post(opts = {})
      data, _status_code, _headers = user_api_keys_post_with_http_info(opts)
      data
    end

    # Create API keys for a user
    # This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :expiry Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h
    # @option opts [String] :perms Permissions -- currently unused
    # @return [Array<(MainGetApiKeysResp, Fixnum, Hash)>] MainGetApiKeysResp data, response status code and response headers
    def user_api_keys_post_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UserApi.user_api_keys_post ...'
      end
      # resource path
      local_var_path = '/user/api-keys'

      # query parameters
      query_params = {}
      query_params[:'expiry'] = opts[:'expiry'] if !opts[:'expiry'].nil?
      query_params[:'perms'] = opts[:'perms'] if !opts[:'perms'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['bearerAuth']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'MainGetApiKeysResp')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UserApi#user_api_keys_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Export user data
    # This endpoint is used to get API keys for a user.
    # @param [Hash] opts the optional parameters
    # @return [String]
    def user_export_get(opts = {})
      data, _status_code, _headers = user_export_get_with_http_info(opts)
      data
    end

    # Export user data
    # This endpoint is used to get API keys for a user.
    # @param [Hash] opts the optional parameters
    # @return [Array<(String, Fixnum, Hash)>] String data, response status code and response headers
    def user_export_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UserApi.user_export_get ...'
      end
      # resource path
      local_var_path = '/user/export'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['bearerAuth']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'String')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UserApi#user_export_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Create API keys for a user
    # This endpoint is used to create API keys for a user.
    # @param [Hash] opts the optional parameters
    # @return [String]
    def user_stats_get(opts = {})
      data, _status_code, _headers = user_stats_get_with_http_info(opts)
      data
    end

    # Create API keys for a user
    # This endpoint is used to create API keys for a user.
    # @param [Hash] opts the optional parameters
    # @return [Array<(String, Fixnum, Hash)>] String data, response status code and response headers
    def user_stats_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: UserApi.user_stats_get ...'
      end
      # resource path
      local_var_path = '/user/stats'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['bearerAuth']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'String')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: UserApi#user_stats_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
