# Estuary API
#
# This is the API for the Estuary application.
#
# OpenAPI spec version: 0.0.0
# 
# Generated by: https://github.com/swagger-api/swagger-codegen.git

#' TypesIpfsPin Class
#'
#' @field cid 
#' @field meta 
#' @field name 
#' @field origins 
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
TypesIpfsPin <- R6::R6Class(
  'TypesIpfsPin',
  public = list(
    `cid` = NULL,
    `meta` = NULL,
    `name` = NULL,
    `origins` = NULL,
    initialize = function(`cid`, `meta`, `name`, `origins`){
      if (!missing(`cid`)) {
        stopifnot(is.character(`cid`), length(`cid`) == 1)
        self$`cid` <- `cid`
      }
      if (!missing(`meta`)) {
        stopifnot(R6::is.R6(`meta`))
        self$`meta` <- `meta`
      }
      if (!missing(`name`)) {
        stopifnot(is.character(`name`), length(`name`) == 1)
        self$`name` <- `name`
      }
      if (!missing(`origins`)) {
        stopifnot(is.list(`origins`), length(`origins`) != 0)
        lapply(`origins`, function(x) stopifnot(is.character(x)))
        self$`origins` <- `origins`
      }
    },
    toJSON = function() {
      TypesIpfsPinObject <- list()
      if (!is.null(self$`cid`)) {
        TypesIpfsPinObject[['cid']] <- self$`cid`
      }
      if (!is.null(self$`meta`)) {
        TypesIpfsPinObject[['meta']] <- self$`meta`$toJSON()
      }
      if (!is.null(self$`name`)) {
        TypesIpfsPinObject[['name']] <- self$`name`
      }
      if (!is.null(self$`origins`)) {
        TypesIpfsPinObject[['origins']] <- self$`origins`
      }

      TypesIpfsPinObject
    },
    fromJSON = function(TypesIpfsPinJson) {
      TypesIpfsPinObject <- jsonlite::fromJSON(TypesIpfsPinJson)
      if (!is.null(TypesIpfsPinObject$`cid`)) {
        self$`cid` <- TypesIpfsPinObject$`cid`
      }
      if (!is.null(TypesIpfsPinObject$`meta`)) {
        metaObject <- TODO_OBJECT_MAPPING$new()
        metaObject$fromJSON(jsonlite::toJSON(TypesIpfsPinObject$meta, auto_unbox = TRUE))
        self$`meta` <- metaObject
      }
      if (!is.null(TypesIpfsPinObject$`name`)) {
        self$`name` <- TypesIpfsPinObject$`name`
      }
      if (!is.null(TypesIpfsPinObject$`origins`)) {
        self$`origins` <- TypesIpfsPinObject$`origins`
      }
    },
    toJSONString = function() {
       sprintf(
        '{
           "cid": %s,
           "meta": %s,
           "name": %s,
           "origins": [%s]
        }',
        self$`cid`,
        self$`meta`$toJSON(),
        self$`name`,
        lapply(self$`origins`, function(x) paste(paste0('"', x, '"'), sep=","))
      )
    },
    fromJSONString = function(TypesIpfsPinJson) {
      TypesIpfsPinObject <- jsonlite::fromJSON(TypesIpfsPinJson)
      self$`cid` <- TypesIpfsPinObject$`cid`
      TODO_OBJECT_MAPPINGObject <- TODO_OBJECT_MAPPING$new()
      self$`meta` <- TODO_OBJECT_MAPPINGObject$fromJSON(jsonlite::toJSON(TypesIpfsPinObject$meta, auto_unbox = TRUE))
      self$`name` <- TypesIpfsPinObject$`name`
      self$`origins` <- TypesIpfsPinObject$`origins`
    }
  )
)
