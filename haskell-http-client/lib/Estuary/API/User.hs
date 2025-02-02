{-
   Estuary API

   This is the API for the Estuary application.

   OpenAPI spec version: 2.0
   Estuary API API version: 0.0.0
   Generated by Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
-}

{-|
Module : Estuary.API.User
-}

{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE MonoLocalBinds #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing -fno-warn-unused-binds -fno-warn-unused-imports #-}

module Estuary.API.User where

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


-- ** User

-- *** userApiKeysGet

-- | @GET \/user\/api-keys@
-- 
-- Get API keys for a user
-- 
-- This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
userApiKeysGet 
  :: EstuaryRequest UserApiKeysGet MimeNoContent [[MainGetApiKeysResp]] MimeJSON
userApiKeysGet =
  _mkRequest "GET" ["/user/api-keys"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data UserApiKeysGet  
-- | @application/json@
instance Produces UserApiKeysGet MimeJSON


-- *** userApiKeysKeyOrHashDelete

-- | @DELETE \/user\/api-keys\/{key_or_hash}@
-- 
-- Revoke a User API Key.
-- 
-- This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that's assigned to the user. Revoked API keys are completely deleted and are not recoverable.
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
userApiKeysKeyOrHashDelete 
  :: KeyOrHash -- ^ "keyOrHash" -  Key or Hash
  -> EstuaryRequest UserApiKeysKeyOrHashDelete MimeNoContent Text MimeJSON
userApiKeysKeyOrHashDelete (KeyOrHash keyOrHash) =
  _mkRequest "DELETE" ["/user/api-keys/",toPath keyOrHash]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data UserApiKeysKeyOrHashDelete  
-- | @application/json@
instance Produces UserApiKeysKeyOrHashDelete MimeJSON


-- *** userApiKeysPost

-- | @POST \/user\/api-keys@
-- 
-- Create API keys for a user
-- 
-- This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
userApiKeysPost 
  :: EstuaryRequest UserApiKeysPost MimeNoContent MainGetApiKeysResp MimeJSON
userApiKeysPost =
  _mkRequest "POST" ["/user/api-keys"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data UserApiKeysPost  

-- | /Optional Param/ "expiry" - Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h
instance HasOptionalParam UserApiKeysPost Expiry where
  applyOptionalParam req (Expiry xs) =
    req `setQuery` toQuery ("expiry", Just xs)

-- | /Optional Param/ "perms" - Permissions -- currently unused
instance HasOptionalParam UserApiKeysPost Perms where
  applyOptionalParam req (Perms xs) =
    req `setQuery` toQuery ("perms", Just xs)
-- | @application/json@
instance Produces UserApiKeysPost MimeJSON


-- *** userExportGet

-- | @GET \/user\/export@
-- 
-- Export user data
-- 
-- This endpoint is used to get API keys for a user.
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
userExportGet 
  :: EstuaryRequest UserExportGet MimeNoContent Text MimeJSON
userExportGet =
  _mkRequest "GET" ["/user/export"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data UserExportGet  
-- | @application/json@
instance Produces UserExportGet MimeJSON


-- *** userStatsGet

-- | @GET \/user\/stats@
-- 
-- Create API keys for a user
-- 
-- This endpoint is used to create API keys for a user.
-- 
-- AuthMethod: 'AuthApiKeyBearerAuth'
-- 
userStatsGet 
  :: EstuaryRequest UserStatsGet MimeNoContent Text MimeJSON
userStatsGet =
  _mkRequest "GET" ["/user/stats"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyBearerAuth)

data UserStatsGet  
-- | @application/json@
instance Produces UserStatsGet MimeJSON

