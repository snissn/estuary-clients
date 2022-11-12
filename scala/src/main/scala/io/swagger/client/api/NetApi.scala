/**
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package io.swagger.client.api

import java.text.SimpleDateFormat

import io.swagger.client.model.util.HttpError
import io.swagger.client.{ApiInvoker, ApiException}

import com.sun.jersey.multipart.FormDataMultiPart
import com.sun.jersey.multipart.file.FileDataBodyPart

import javax.ws.rs.core.MediaType

import java.io.File
import java.util.Date
import java.util.TimeZone

import scala.collection.mutable.HashMap

import com.wordnik.swagger.client._
import scala.concurrent.Future
import collection.mutable

import java.net.URI

import com.wordnik.swagger.client.ClientResponseReaders.Json4sFormatsReader._
import com.wordnik.swagger.client.RequestWriters.Json4sFormatsWriter._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent._
import scala.concurrent.duration._
import scala.util.{Failure, Success, Try}

import org.json4s._

class NetApi(
  val defBasePath: String = "//api.estuary.tech/",
  defApiInvoker: ApiInvoker = ApiInvoker
) {
  private lazy val dateTimeFormatter = {
    val formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ")
    formatter.setTimeZone(TimeZone.getTimeZone("UTC"))
    formatter
  }
  private val dateFormatter = {
    val formatter = new SimpleDateFormat("yyyy-MM-dd")
    formatter.setTimeZone(TimeZone.getTimeZone("UTC"))
    formatter
  }
  implicit val formats = new org.json4s.DefaultFormats {
    override def dateFormatter = dateTimeFormatter
  }
  implicit val stringReader: ClientResponseReader[String] = ClientResponseReaders.StringReader
  implicit val unitReader: ClientResponseReader[Unit] = ClientResponseReaders.UnitReader
  implicit val jvalueReader: ClientResponseReader[JValue] = ClientResponseReaders.JValueReader
  implicit val jsonReader: ClientResponseReader[Nothing] = JsonFormatsReader
  implicit val stringWriter: RequestWriter[String] = RequestWriters.StringWriter
  implicit val jsonWriter: RequestWriter[Nothing] = JsonFormatsWriter

  var basePath: String = defBasePath
  var apiInvoker: ApiInvoker = defApiInvoker

  def addHeader(key: String, value: String): mutable.HashMap[String, String] = {
    apiInvoker.defaultHeaders += key -> value
  }

  val config: SwaggerConfig = SwaggerConfig.forUrl(new URI(defBasePath))
  val client = new RestClient(config)
  val helper = new NetApiAsyncHelper(client, config)

  /**
   * Net Addrs
   * This endpoint is used to get net addrs
   *
   * @return String
   */
  def netAddrsGet(): Option[String] = {
    val await = Try(Await.result(netAddrsGetAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Net Addrs asynchronously
   * This endpoint is used to get net addrs
   *
   * @return Future(String)
   */
  def netAddrsGetAsync(): Future[String] = {
      helper.netAddrsGet()
  }

  /**
   * Get all miners
   * This endpoint returns all miners
   *
   * @param miner Filter by miner 
   * @return String
   */
  def publicMinersFailuresMinerGet(miner: String): Option[String] = {
    val await = Try(Await.result(publicMinersFailuresMinerGetAsync(miner), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Get all miners asynchronously
   * This endpoint returns all miners
   *
   * @param miner Filter by miner 
   * @return Future(String)
   */
  def publicMinersFailuresMinerGetAsync(miner: String): Future[String] = {
      helper.publicMinersFailuresMinerGet(miner)
  }

  /**
   * Get all miners
   * This endpoint returns all miners
   *
   * @return String
   */
  def publicMinersGet(): Option[String] = {
    val await = Try(Await.result(publicMinersGetAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Get all miners asynchronously
   * This endpoint returns all miners
   *
   * @return Future(String)
   */
  def publicMinersGetAsync(): Future[String] = {
      helper.publicMinersGet()
  }

  /**
   * Net Addrs
   * This endpoint is used to get net addrs
   *
   * @return List[String]
   */
  def publicNetAddrsGet(): Option[List[String]] = {
    val await = Try(Await.result(publicNetAddrsGetAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Net Addrs asynchronously
   * This endpoint is used to get net addrs
   *
   * @return Future(List[String])
   */
  def publicNetAddrsGetAsync(): Future[List[String]] = {
      helper.publicNetAddrsGet()
  }

  /**
   * Net Peers
   * This endpoint is used to get net peers
   *
   * @return List[String]
   */
  def publicNetPeersGet(): Option[List[String]] = {
    val await = Try(Await.result(publicNetPeersGetAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Net Peers asynchronously
   * This endpoint is used to get net peers
   *
   * @return Future(List[String])
   */
  def publicNetPeersGetAsync(): Future[List[String]] = {
      helper.publicNetPeersGet()
  }

}

class NetApiAsyncHelper(client: TransportClient, config: SwaggerConfig) extends ApiClient(client, config) {

  def netAddrsGet()(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/net/addrs"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def publicMinersFailuresMinerGet(miner: String)(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/public/miners/failures/{miner}")
      replaceAll("\\{" + "miner" + "\\}", miner.toString))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]

    if (miner == null) throw new Exception("Missing required parameter 'miner' when calling NetApi->publicMinersFailuresMinerGet")


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def publicMinersGet()(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/public/miners"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def publicNetAddrsGet()(implicit reader: ClientResponseReader[List[String]]): Future[List[String]] = {
    // create path and map variables
    val path = (addFmt("/public/net/addrs"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def publicNetPeersGet()(implicit reader: ClientResponseReader[List[String]]): Future[List[String]] = {
    // create path and map variables
    val path = (addFmt("/public/net/peers"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }


}
