{-
   Estuary API
   This is the API for the Estuary application.

   OpenAPI spec version: 0.0.0
   

   NOTE: This file is auto generated by the swagger code generator program.
   https://github.com/swagger-api/swagger-codegen.git
   Do not edit this file manually.
-}


module Request.Default exposing (dealTransferStatusPost)

import Http
import Json.Decode as Decode


basePath : String
basePath =
    "https://api.estuary.tech"


{-
   
-}
dealTransferStatusPost : Http.Request 
dealTransferStatusPost =
    { method = "POST"
    , url = basePath ++ "/deal/transfer/status"
    , headers = []
    , body = Http.emptyBody
    , expect = 
    , timeout = Just 30000
    , withCredentials = False
    }
        |> Http.request

