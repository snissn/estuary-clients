{-
   Estuary API

   This is the API for the Estuary application.

   OpenAPI spec version: 2.0
   Estuary API API version: 0.0.0
   Generated by Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
-}

{-|
Module : Estuary.API.Net
-}

{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE MonoLocalBinds #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing -fno-warn-unused-binds -fno-warn-unused-imports #-}

module Estuary.API.Net where

import Estuary.Core
import Estuary.MimeTypes
import Estuary.Model as M

import qualified Data.Aeson as A
import qualified Data.ByteString as B
import qualified Data.ByteString.Lazy as BL
import qualified Data.Data as P (Typeable, TypeRep, typeOf, typeRep)
import qualified Data.Foldable as P
import qualified Data.Map as Map
import qualified Data.Maybe as P
import qualified Data.Proxy as P (Proxy(..))
import qualified Data.Set as Set
import qualified Data.String as P
import qualified Data.Text as T
import qualified Data.Text.Encoding as T
import qualified Data.Text.Lazy as TL
import qualified Data.Text.Lazy.Encoding as TL
import qualified Data.Time as TI
import qualified Network.HTTP.Client.MultipartFormData as NH
import qualified Network.HTTP.Media as ME
import qualified Network.HTTP.Types as NH
import qualified Web.FormUrlEncoded as WH
import qualified Web.HttpApiData as WH

import Data.Text (Text)
import GHC.Base ((<|>))

import Prelude ((==),(/=),($), (.),(<$>),(<*>),(>>=),Maybe(..),Bool(..),Char,Double,FilePath,Float,Int,Integer,String,fmap,undefined,mempty,maybe,pure,Monad,Applicative,Functor)
import qualified Prelude as P

-- * Operations


-- ** Net

-- *** netAddrsGet

-- | @GET \/net\/addrs@
-- 
-- Net Addrs
-- 
-- This endpoint is used to get net addrs
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
netAddrsGet 
  :: EstuaryRequest NetAddrsGet MimeNoContent [Text] MimeJSON
netAddrsGet =
  _mkRequest "GET" ["/net/addrs"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data NetAddrsGet  
-- | @application/json@
instance Produces NetAddrsGet MimeJSON


-- *** publicMinersFailuresMinerGet0

-- | @GET \/public\/miners\/failures\/{miner}@
-- 
-- Get all miners
-- 
-- This endpoint returns all miners
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
-- Note: Has 'Produces' instances, but no response schema
-- 
publicMinersFailuresMinerGet0 
  :: Miner -- ^ "miner" -  Filter by miner
  -> EstuaryRequest PublicMinersFailuresMinerGet0 MimeNoContent res MimeJSON
publicMinersFailuresMinerGet0 (Miner miner) =
  _mkRequest "GET" ["/public/miners/failures/",toPath miner]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data PublicMinersFailuresMinerGet0  
-- | @application/json@
instance Produces PublicMinersFailuresMinerGet0 MimeJSON


-- *** publicMinersGet0

-- | @GET \/public\/miners@
-- 
-- Get all miners
-- 
-- This endpoint returns all miners
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
-- Note: Has 'Produces' instances, but no response schema
-- 
publicMinersGet0 
  :: EstuaryRequest PublicMinersGet0 MimeNoContent res MimeJSON
publicMinersGet0 =
  _mkRequest "GET" ["/public/miners"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data PublicMinersGet0  
-- | @application/json@
instance Produces PublicMinersGet0 MimeJSON


-- *** publicNetAddrsGet0

-- | @GET \/public\/net\/addrs@
-- 
-- Net Addrs
-- 
-- This endpoint is used to get net addrs
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
publicNetAddrsGet0 
  :: EstuaryRequest PublicNetAddrsGet0 MimeNoContent [Text] MimeJSON
publicNetAddrsGet0 =
  _mkRequest "GET" ["/public/net/addrs"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data PublicNetAddrsGet0  
-- | @application/json@
instance Produces PublicNetAddrsGet0 MimeJSON


-- *** publicNetPeersGet0

-- | @GET \/public\/net\/peers@
-- 
-- Net Peers
-- 
-- This endpoint is used to get net peers
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
publicNetPeersGet0 
  :: EstuaryRequest PublicNetPeersGet0 MimeNoContent [Text] MimeJSON
publicNetPeersGet0 =
  _mkRequest "GET" ["/public/net/peers"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data PublicNetPeersGet0  
-- | @application/json@
instance Produces PublicNetPeersGet0 MimeJSON
