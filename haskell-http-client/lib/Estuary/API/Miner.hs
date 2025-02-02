{-
   Estuary API

   This is the API for the Estuary application.

   OpenAPI spec version: 2.0
   Estuary API API version: 0.0.0
   Generated by Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
-}

{-|
Module : Estuary.API.Miner
-}

{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE MonoLocalBinds #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing -fno-warn-unused-binds -fno-warn-unused-imports #-}

module Estuary.API.Miner where

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


-- ** Miner

-- *** publicMinersDealsMinerGet0

-- | @GET \/public\/miners\/deals\/{miner}@
-- 
-- Get all miners deals
-- 
-- This endpoint returns all miners deals
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
publicMinersDealsMinerGet0 
  :: Miner -- ^ "miner" -  Filter by miner
  -> EstuaryRequest PublicMinersDealsMinerGet0 MimeNoContent Text MimeJSON
publicMinersDealsMinerGet0 (Miner miner) =
  _mkRequest "GET" ["/public/miners/deals/",toPath miner]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data PublicMinersDealsMinerGet0  

-- | /Optional Param/ "ignore-failed" - Ignore Failed
instance HasOptionalParam PublicMinersDealsMinerGet0 IgnoreFailed where
  applyOptionalParam req (IgnoreFailed xs) =
    req `setQuery` toQuery ("ignore-failed", Just xs)
-- | @application/json@
instance Produces PublicMinersDealsMinerGet0 MimeJSON


-- *** publicMinersStatsMinerGet0

-- | @GET \/public\/miners\/stats\/{miner}@
-- 
-- Get miner stats
-- 
-- This endpoint returns miner stats
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
publicMinersStatsMinerGet0 
  :: Miner -- ^ "miner" -  Filter by miner
  -> EstuaryRequest PublicMinersStatsMinerGet0 MimeNoContent Text MimeJSON
publicMinersStatsMinerGet0 (Miner miner) =
  _mkRequest "GET" ["/public/miners/stats/",toPath miner]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data PublicMinersStatsMinerGet0  
-- | @application/json@
instance Produces PublicMinersStatsMinerGet0 MimeJSON

