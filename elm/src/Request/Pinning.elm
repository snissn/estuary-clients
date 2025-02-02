{-
   Estuary API
   This is the API for the Estuary application.

   OpenAPI spec version: 0.0.0
   

   NOTE: This file is auto generated by the swagger code generator program.
   https://github.com/swagger-api/swagger-codegen.git
   Do not edit this file manually.
-}


module Request.Pinning exposing (pinningPinsGet, pinningPinsPinidDelete, pinningPinsPinidGet, pinningPinsPinidPost, pinningPinsPost)

import Data.UtilHttpError exposing (UtilHttpError, utilHttpErrorDecoder)
import Data.String exposing (Decode.string, String)
import Data.TypesIpfsPin exposing (TypesIpfsPin, typesIpfsPinEncoder)
import Http
import Json.Decode as Decode


basePath : String
basePath =
    "https://api.estuary.tech"


{-
   This endpoint lists all pin status objects
-}
pinningPinsGet : Http.Request String
pinningPinsGet =
    { method = "GET"
    , url = basePath ++ "/pinning/pins"
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint deletes a pinned object.
-}
pinningPinsPinidDelete : String -> Http.Request String
pinningPinsPinidDelete pinid =
    { method = "DELETE"
    , url = basePath ++ "/pinning/pins/" ++ pinid
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint returns a pin status object.
-}
pinningPinsPinidGet : String -> Http.Request String
pinningPinsPinidGet pinid =
    { method = "GET"
    , url = basePath ++ "/pinning/pins/" ++ pinid
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint replaces a pinned object.
-}
pinningPinsPinidPost : String -> Http.Request String
pinningPinsPinidPost pinid =
    { method = "POST"
    , url = basePath ++ "/pinning/pins/" ++ pinid
    , headers = []
    , body = Http.emptyBody
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


{-
   This endpoint adds a pin to the IPFS daemon.
-}
pinningPinsPost : TypesIpfsPin -> Http.Request String
pinningPinsPost model =
    { method = "POST"
    , url = basePath ++ "/pinning/pins"
    , headers = []
    , body = Http.jsonBody <| typesIpfsPinEncoder model
    , expect = Http.expectJson Decode.string
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request


