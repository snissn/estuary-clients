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

import io.swagger.client.model.HttpError
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

class PeeringApi(
  val defBasePath: String = "https://api.estuary.tech",
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
  val helper = new PeeringApiAsyncHelper(client, config)

  /**
   * Remove peers on Peering Service
   * This endpoint can be used to remove a Peer from the Peering Service
   *
   * @param peerIds Peer ids 
   * @return String
   */
  def adminPeeringPeersDelete(peerIds: List[Boolean]): Option[String] = {
    val await = Try(Await.result(adminPeeringPeersDeleteAsync(peerIds), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Remove peers on Peering Service asynchronously
   * This endpoint can be used to remove a Peer from the Peering Service
   *
   * @param peerIds Peer ids 
   * @return Future(String)
   */
  def adminPeeringPeersDeleteAsync(peerIds: List[Boolean]): Future[String] = {
      helper.adminPeeringPeersDelete(peerIds)
  }

  /**
   * List all Peering peers
   * This endpoint can be used to list all peers on Peering Service
   *
   * @return String
   */
  def adminPeeringPeersGet(): Option[String] = {
    val await = Try(Await.result(adminPeeringPeersGetAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * List all Peering peers asynchronously
   * This endpoint can be used to list all peers on Peering Service
   *
   * @return Future(String)
   */
  def adminPeeringPeersGetAsync(): Future[String] = {
      helper.adminPeeringPeersGet()
  }

  /**
   * Add peers on Peering Service
   * This endpoint can be used to add a Peer from the Peering Service
   *
   * @return String
   */
  def adminPeeringPeersPost(): Option[String] = {
    val await = Try(Await.result(adminPeeringPeersPostAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Add peers on Peering Service asynchronously
   * This endpoint can be used to add a Peer from the Peering Service
   *
   * @return Future(String)
   */
  def adminPeeringPeersPostAsync(): Future[String] = {
      helper.adminPeeringPeersPost()
  }

  /**
   * Start Peering
   * This endpoint can be used to start the Peering Service
   *
   * @return String
   */
  def adminPeeringStartPost(): Option[String] = {
    val await = Try(Await.result(adminPeeringStartPostAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Start Peering asynchronously
   * This endpoint can be used to start the Peering Service
   *
   * @return Future(String)
   */
  def adminPeeringStartPostAsync(): Future[String] = {
      helper.adminPeeringStartPost()
  }

  /**
   * Check Peering Status
   * This endpoint can be used to check the Peering status
   *
   * @return String
   */
  def adminPeeringStatusGet(): Option[String] = {
    val await = Try(Await.result(adminPeeringStatusGetAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Check Peering Status asynchronously
   * This endpoint can be used to check the Peering status
   *
   * @return Future(String)
   */
  def adminPeeringStatusGetAsync(): Future[String] = {
      helper.adminPeeringStatusGet()
  }

  /**
   * Stop Peering
   * This endpoint can be used to stop the Peering Service
   *
   * @return String
   */
  def adminPeeringStopPost(): Option[String] = {
    val await = Try(Await.result(adminPeeringStopPostAsync(), Duration.Inf))
    await match {
      case Success(i) => Some(await.get)
      case Failure(t) => None
    }
  }

  /**
   * Stop Peering asynchronously
   * This endpoint can be used to stop the Peering Service
   *
   * @return Future(String)
   */
  def adminPeeringStopPostAsync(): Future[String] = {
      helper.adminPeeringStopPost()
  }

}

class PeeringApiAsyncHelper(client: TransportClient, config: SwaggerConfig) extends ApiClient(client, config) {

  def adminPeeringPeersDelete(peerIds: List[Boolean])(implicit reader: ClientResponseReader[String], writer: RequestWriter[List[Boolean]]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/admin/peering/peers"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("DELETE", path, queryParams.toMap, headerParams.toMap, writer.write(peerIds))
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def adminPeeringPeersGet()(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/admin/peering/peers"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def adminPeeringPeersPost()(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/admin/peering/peers"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("POST", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def adminPeeringStartPost()(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/admin/peering/start"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("POST", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def adminPeeringStatusGet()(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/admin/peering/status"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("GET", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }

  def adminPeeringStopPost()(implicit reader: ClientResponseReader[String]): Future[String] = {
    // create path and map variables
    val path = (addFmt("/admin/peering/stop"))

    // query params
    val queryParams = new mutable.HashMap[String, String]
    val headerParams = new mutable.HashMap[String, String]


    val resFuture = client.submit("POST", path, queryParams.toMap, headerParams.toMap, "")
    resFuture flatMap { resp =>
      process(reader.read(resp))
    }
  }


}
