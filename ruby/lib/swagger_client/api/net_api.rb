=begin
#Estuary API

#This is the API for the Estuary application.

OpenAPI spec version: 0.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.28

=end

require 'uri'

module SwaggerClient
  class NetApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Net Addrs
    # This endpoint is used to get net addrs
    # @param [Hash] opts the optional parameters
    # @return [String]
    def net_addrs_get(opts = {})
      data, _status_code, _headers = net_addrs_get_with_http_info(opts)
      data
    end

    # Net Addrs
    # This endpoint is used to get net addrs
    # @param [Hash] opts the optional parameters
    # @return [Array<(String, Fixnum, Hash)>] String data, response status code and response headers
    def net_addrs_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NetApi.net_addrs_get ...'
      end
      # resource path
      local_var_path = '/net/addrs'

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
        @api_client.config.logger.debug "API called: NetApi#net_addrs_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Get all miners
    # This endpoint returns all miners
    # @param miner Filter by miner
    # @param [Hash] opts the optional parameters
    # @return [String]
    def public_miners_failures_miner_get(miner, opts = {})
      data, _status_code, _headers = public_miners_failures_miner_get_with_http_info(miner, opts)
      data
    end

    # Get all miners
    # This endpoint returns all miners
    # @param miner Filter by miner
    # @param [Hash] opts the optional parameters
    # @return [Array<(String, Fixnum, Hash)>] String data, response status code and response headers
    def public_miners_failures_miner_get_with_http_info(miner, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NetApi.public_miners_failures_miner_get ...'
      end
      # verify the required parameter 'miner' is set
      if @api_client.config.client_side_validation && miner.nil?
        fail ArgumentError, "Missing the required parameter 'miner' when calling NetApi.public_miners_failures_miner_get"
      end
      # resource path
      local_var_path = '/public/miners/failures/{miner}'.sub('{' + 'miner' + '}', miner.to_s)

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
        @api_client.config.logger.debug "API called: NetApi#public_miners_failures_miner_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Get all miners
    # This endpoint returns all miners
    # @param [Hash] opts the optional parameters
    # @return [String]
    def public_miners_get(opts = {})
      data, _status_code, _headers = public_miners_get_with_http_info(opts)
      data
    end

    # Get all miners
    # This endpoint returns all miners
    # @param [Hash] opts the optional parameters
    # @return [Array<(String, Fixnum, Hash)>] String data, response status code and response headers
    def public_miners_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NetApi.public_miners_get ...'
      end
      # resource path
      local_var_path = '/public/miners'

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
        @api_client.config.logger.debug "API called: NetApi#public_miners_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Net Addrs
    # This endpoint is used to get net addrs
    # @param [Hash] opts the optional parameters
    # @return [Array<String>]
    def public_net_addrs_get(opts = {})
      data, _status_code, _headers = public_net_addrs_get_with_http_info(opts)
      data
    end

    # Net Addrs
    # This endpoint is used to get net addrs
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<String>, Fixnum, Hash)>] Array<String> data, response status code and response headers
    def public_net_addrs_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NetApi.public_net_addrs_get ...'
      end
      # resource path
      local_var_path = '/public/net/addrs'

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
        :return_type => 'Array<String>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NetApi#public_net_addrs_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Net Peers
    # This endpoint is used to get net peers
    # @param [Hash] opts the optional parameters
    # @return [Array<String>]
    def public_net_peers_get(opts = {})
      data, _status_code, _headers = public_net_peers_get_with_http_info(opts)
      data
    end

    # Net Peers
    # This endpoint is used to get net peers
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<String>, Fixnum, Hash)>] Array<String> data, response status code and response headers
    def public_net_peers_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NetApi.public_net_peers_get ...'
      end
      # resource path
      local_var_path = '/public/net/peers'

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
        :return_type => 'Array<String>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NetApi#public_net_peers_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
