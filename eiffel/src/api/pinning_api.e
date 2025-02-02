note
 description:"[
		Estuary API
 		This is the API for the Estuary application.
  		OpenAPI spec version: 0.0.0
 	    

  	NOTE: This class is auto generated by the swagger code generator program.

 		 Do not edit the class manually.
 	]"
	date: "$Date$"
	revision: "$Revision$"
	EIS:"Eiffel swagger codegen", "src=https://github.com/swagger-api/swagger-codegen.git", "protocol=uri"

class
	PINNING_API

inherit

    API_I


feature -- API Access


	pinning_pins_get : detachable STRING_32
			-- List all pin status objects
			-- This endpoint lists all pin status objects
			-- 
			-- 
			-- Result STRING_32
		require
		local
  			l_path: STRING
  			l_request: API_CLIENT_REQUEST
  			l_response: API_CLIENT_RESPONSE
		do
			reset_error
			create l_request
			
			l_path := "/pinning/pins"


			if attached {STRING} api_client.select_header_accept (<<"application/json">>)  as l_accept then
				l_request.add_header(l_accept,"Accept");
			end
			l_request.add_header(api_client.select_header_content_type (<<>>),"Content-Type")
			l_request.set_auth_names (<<"bearerAuth">>)
			l_response := api_client.call_api (l_path, "Get", l_request, Void, agent deserializer)
			if l_response.has_error then
				last_error := l_response.error
			elseif attached { STRING_32 } l_response.data ({ STRING_32 }) as l_data then
				Result := l_data
			else
				create last_error.make ("Unknown error: Status response [ " + l_response.status.out + "]")
			end
		end	

	pinning_pins_pinid_delete (pinid: STRING_32): detachable STRING_32
			-- Delete a pinned object
			-- This endpoint deletes a pinned object.
			-- 
			-- argument: pinid Pin ID (required)
			-- 
			-- 
			-- Result STRING_32
		require
		local
  			l_path: STRING
  			l_request: API_CLIENT_REQUEST
  			l_response: API_CLIENT_RESPONSE
		do
			reset_error
			create l_request
			
			l_path := "/pinning/pins/{pinid}"
			l_path.replace_substring_all ("{"+"pinid"+"}", api_client.url_encode (pinid.out))


			if attached {STRING} api_client.select_header_accept (<<"application/json">>)  as l_accept then
				l_request.add_header(l_accept,"Accept");
			end
			l_request.add_header(api_client.select_header_content_type (<<>>),"Content-Type")
			l_request.set_auth_names (<<"bearerAuth">>)
			l_response := api_client.call_api (l_path, "Delete", l_request, Void, agent deserializer)
			if l_response.has_error then
				last_error := l_response.error
			elseif attached { STRING_32 } l_response.data ({ STRING_32 }) as l_data then
				Result := l_data
			else
				create last_error.make ("Unknown error: Status response [ " + l_response.status.out + "]")
			end
		end	

	pinning_pins_pinid_get (pinid: STRING_32): detachable STRING_32
			-- Get a pin status object
			-- This endpoint returns a pin status object.
			-- 
			-- argument: pinid cid (required)
			-- 
			-- 
			-- Result STRING_32
		require
		local
  			l_path: STRING
  			l_request: API_CLIENT_REQUEST
  			l_response: API_CLIENT_RESPONSE
		do
			reset_error
			create l_request
			
			l_path := "/pinning/pins/{pinid}"
			l_path.replace_substring_all ("{"+"pinid"+"}", api_client.url_encode (pinid.out))


			if attached {STRING} api_client.select_header_accept (<<"application/json">>)  as l_accept then
				l_request.add_header(l_accept,"Accept");
			end
			l_request.add_header(api_client.select_header_content_type (<<>>),"Content-Type")
			l_request.set_auth_names (<<"bearerAuth">>)
			l_response := api_client.call_api (l_path, "Get", l_request, Void, agent deserializer)
			if l_response.has_error then
				last_error := l_response.error
			elseif attached { STRING_32 } l_response.data ({ STRING_32 }) as l_data then
				Result := l_data
			else
				create last_error.make ("Unknown error: Status response [ " + l_response.status.out + "]")
			end
		end	

	pinning_pins_pinid_post (pinid: STRING_32): detachable STRING_32
			-- Replace a pinned object
			-- This endpoint replaces a pinned object.
			-- 
			-- argument: pinid Pin ID (required)
			-- 
			-- 
			-- Result STRING_32
		require
		local
  			l_path: STRING
  			l_request: API_CLIENT_REQUEST
  			l_response: API_CLIENT_RESPONSE
		do
			reset_error
			create l_request
			
			l_path := "/pinning/pins/{pinid}"
			l_path.replace_substring_all ("{"+"pinid"+"}", api_client.url_encode (pinid.out))


			if attached {STRING} api_client.select_header_accept (<<"application/json">>)  as l_accept then
				l_request.add_header(l_accept,"Accept");
			end
			l_request.add_header(api_client.select_header_content_type (<<>>),"Content-Type")
			l_request.set_auth_names (<<"bearerAuth">>)
			l_response := api_client.call_api (l_path, "Post", l_request, Void, agent deserializer)
			if l_response.has_error then
				last_error := l_response.error
			elseif attached { STRING_32 } l_response.data ({ STRING_32 }) as l_data then
				Result := l_data
			else
				create last_error.make ("Unknown error: Status response [ " + l_response.status.out + "]")
			end
		end	

	pinning_pins_post (pin: TYPES_IPFS_PIN): detachable STRING_32
			-- Add and pin object
			-- This endpoint adds a pin to the IPFS daemon.
			-- 
			-- argument: pin Pin Body {cid:cid, name:name} (required)
			-- 
			-- 
			-- Result STRING_32
		require
		local
  			l_path: STRING
  			l_request: API_CLIENT_REQUEST
  			l_response: API_CLIENT_RESPONSE
		do
			reset_error
			create l_request
			l_request.set_body(pin)
			l_path := "/pinning/pins"


			if attached {STRING} api_client.select_header_accept (<<"application/json">>)  as l_accept then
				l_request.add_header(l_accept,"Accept");
			end
			l_request.add_header(api_client.select_header_content_type (<<>>),"Content-Type")
			l_request.set_auth_names (<<"bearerAuth">>)
			l_response := api_client.call_api (l_path, "Post", l_request, Void, agent deserializer)
			if l_response.has_error then
				last_error := l_response.error
			elseif attached { STRING_32 } l_response.data ({ STRING_32 }) as l_data then
				Result := l_data
			else
				create last_error.make ("Unknown error: Status response [ " + l_response.status.out + "]")
			end
		end	


end
