# Estuary API
#
# This is the API for the Estuary application.
#
# OpenAPI spec version: 0.0.0
# 
# Generated by: https://github.com/swagger-api/swagger-codegen.git


#' UtilContentCreateBody Class
#'
#' @field coluuid 
#' @field dir 
#' @field location 
#' @field name 
#' @field root 
#' @field type 
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
UtilContentCreateBody <- R6::R6Class(
  'UtilContentCreateBody',
  public = list(
    `coluuid` = NULL,
    `dir` = NULL,
    `location` = NULL,
    `name` = NULL,
    `root` = NULL,
    `type` = NULL,
    initialize = function(`coluuid`, `dir`, `location`, `name`, `root`, `type`){
      if (!missing(`coluuid`)) {
        stopifnot(is.character(`coluuid`), length(`coluuid`) == 1)
        self$`coluuid` <- `coluuid`
      }
      if (!missing(`dir`)) {
        stopifnot(is.character(`dir`), length(`dir`) == 1)
        self$`dir` <- `dir`
      }
      if (!missing(`location`)) {
        stopifnot(is.character(`location`), length(`location`) == 1)
        self$`location` <- `location`
      }
      if (!missing(`name`)) {
        stopifnot(is.character(`name`), length(`name`) == 1)
        self$`name` <- `name`
      }
      if (!missing(`root`)) {
        stopifnot(is.character(`root`), length(`root`) == 1)
        self$`root` <- `root`
      }
      if (!missing(`type`)) {
        stopifnot(is.numeric(`type`), length(`type`) == 1)
        self$`type` <- `type`
      }
    },
    toJSON = function() {
      UtilContentCreateBodyObject <- list()
      if (!is.null(self$`coluuid`)) {
        UtilContentCreateBodyObject[['coluuid']] <- self$`coluuid`
      }
      if (!is.null(self$`dir`)) {
        UtilContentCreateBodyObject[['dir']] <- self$`dir`
      }
      if (!is.null(self$`location`)) {
        UtilContentCreateBodyObject[['location']] <- self$`location`
      }
      if (!is.null(self$`name`)) {
        UtilContentCreateBodyObject[['name']] <- self$`name`
      }
      if (!is.null(self$`root`)) {
        UtilContentCreateBodyObject[['root']] <- self$`root`
      }
      if (!is.null(self$`type`)) {
        UtilContentCreateBodyObject[['type']] <- self$`type`
      }

      UtilContentCreateBodyObject
    },
    fromJSON = function(UtilContentCreateBodyJson) {
      UtilContentCreateBodyObject <- jsonlite::fromJSON(UtilContentCreateBodyJson)
      if (!is.null(UtilContentCreateBodyObject$`coluuid`)) {
        self$`coluuid` <- UtilContentCreateBodyObject$`coluuid`
      }
      if (!is.null(UtilContentCreateBodyObject$`dir`)) {
        self$`dir` <- UtilContentCreateBodyObject$`dir`
      }
      if (!is.null(UtilContentCreateBodyObject$`location`)) {
        self$`location` <- UtilContentCreateBodyObject$`location`
      }
      if (!is.null(UtilContentCreateBodyObject$`name`)) {
        self$`name` <- UtilContentCreateBodyObject$`name`
      }
      if (!is.null(UtilContentCreateBodyObject$`root`)) {
        self$`root` <- UtilContentCreateBodyObject$`root`
      }
      if (!is.null(UtilContentCreateBodyObject$`type`)) {
        self$`type` <- UtilContentCreateBodyObject$`type`
      }
    },
    toJSONString = function() {
       sprintf(
        '{
           "coluuid": %s,
           "dir": %s,
           "location": %s,
           "name": %s,
           "root": %s,
           "type": %d
        }',
        self$`coluuid`,
        self$`dir`,
        self$`location`,
        self$`name`,
        self$`root`,
        self$`type`
      )
    },
    fromJSONString = function(UtilContentCreateBodyJson) {
      UtilContentCreateBodyObject <- jsonlite::fromJSON(UtilContentCreateBodyJson)
      self$`coluuid` <- UtilContentCreateBodyObject$`coluuid`
      self$`dir` <- UtilContentCreateBodyObject$`dir`
      self$`location` <- UtilContentCreateBodyObject$`location`
      self$`name` <- UtilContentCreateBodyObject$`name`
      self$`root` <- UtilContentCreateBodyObject$`root`
      self$`type` <- UtilContentCreateBodyObject$`type`
    }
  )
)