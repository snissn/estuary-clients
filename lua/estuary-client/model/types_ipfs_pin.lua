--[[
  Estuary API
 
  This is the API for the Estuary application.
 
  OpenAPI spec version: 0.0.0
  
  Generated by: https://github.com/swagger-api/swagger-codegen.git
]]

-- types_ipfs_pin class
local types_ipfs_pin = {}
local types_ipfs_pin_mt = {
	__name = "types_ipfs_pin";
	__index = types_ipfs_pin;
}

local function cast_types_ipfs_pin(t)
	return setmetatable(t, types_ipfs_pin_mt)
end

local function new_types_ipfs_pin(cid, meta, name, origins)
	return cast_types_ipfs_pin({
		["cid"] = cid;
		["meta"] = meta;
		["name"] = name;
		["origins"] = origins;
	})
end

return {
	cast = cast_types_ipfs_pin;
	new = new_types_ipfs_pin;
}
