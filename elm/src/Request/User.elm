{-
   Estuary API
   This is the API for the Estuary application.

   OpenAPI spec version: 0.0.0
   

   NOTE: This file is auto generated by the swagger code generator program.
   https://github.com/swagger-api/swagger-codegen.git
   Do not edit this file manually.
-}


module Request.User exposing (userApiKeysGet, userApiKeysKeyOrHashDelete, userApiKeysPost, userExportGet, userStatsGet)

import Data.MainGetApiKeysResp exposing (MainGetApiKeysResp, mainGetApiKeysRespDecoder)
import Data.UtilHttpError exposing (UtilHttpError, utilHttpErrorDecoder)
import Data.String exposing (Decode.string, String)
import Http
import Json.Decode as Decode


basePath : String
basePath =
    "https://api.estuary.tech"


{-
   This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.
-}
userApiKeysGet : Http.Request (List MainGetApiKeysResp)
userApiKeysGet =
    { method = "GET"
    , url = basePath ++ "/user/api-keys"
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson (Decode.list mainGetApiKeysRespDecoder)
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that&#39;s assigned to the user. Revoked API keys are completely deleted and are not recoverable.
-}
userApiKeysKeyOrHashDelete : String -> Http.Request String
userApiKeysKeyOrHashDelete keyOrHash =
    { method = "DELETE"
    , url = basePath ++ "/user/api-keys/{key_or_hash}"
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.
-}
userApiKeysPost : Http.Request MainGetApiKeysResp
userApiKeysPost =
    { method = "POST"
    , url = basePath ++ "/user/api-keys"
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson mainGetApiKeysRespDecoder
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint is used to get API keys for a user.
-}
userExportGet : Http.Request String
userExportGet =
    { method = "GET"
    , url = basePath ++ "/user/export"
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint is used to create API keys for a user.
-}
userStatsGet : Http.Request String
userStatsGet =
    { method = "GET"
    , url = basePath ++ "/user/stats"
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


