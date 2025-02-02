/*
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


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * UtilContentAddResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-11-08T01:04:03.785Z")
public class UtilContentAddResponse {
  @SerializedName("cid")
  private String cid = null;

  @SerializedName("estuaryId")
  private Integer estuaryId = null;

  @SerializedName("providers")
  private List<String> providers = null;

  @SerializedName("retrieval_url")
  private String retrievalUrl = null;

  public UtilContentAddResponse cid(String cid) {
    this.cid = cid;
    return this;
  }

   /**
   * Get cid
   * @return cid
  **/
  @ApiModelProperty(value = "")
  public String getCid() {
    return cid;
  }

  public void setCid(String cid) {
    this.cid = cid;
  }

  public UtilContentAddResponse estuaryId(Integer estuaryId) {
    this.estuaryId = estuaryId;
    return this;
  }

   /**
   * Get estuaryId
   * @return estuaryId
  **/
  @ApiModelProperty(value = "")
  public Integer getEstuaryId() {
    return estuaryId;
  }

  public void setEstuaryId(Integer estuaryId) {
    this.estuaryId = estuaryId;
  }

  public UtilContentAddResponse providers(List<String> providers) {
    this.providers = providers;
    return this;
  }

  public UtilContentAddResponse addProvidersItem(String providersItem) {
    if (this.providers == null) {
      this.providers = new ArrayList<String>();
    }
    this.providers.add(providersItem);
    return this;
  }

   /**
   * Get providers
   * @return providers
  **/
  @ApiModelProperty(value = "")
  public List<String> getProviders() {
    return providers;
  }

  public void setProviders(List<String> providers) {
    this.providers = providers;
  }

  public UtilContentAddResponse retrievalUrl(String retrievalUrl) {
    this.retrievalUrl = retrievalUrl;
    return this;
  }

   /**
   * Get retrievalUrl
   * @return retrievalUrl
  **/
  @ApiModelProperty(value = "")
  public String getRetrievalUrl() {
    return retrievalUrl;
  }

  public void setRetrievalUrl(String retrievalUrl) {
    this.retrievalUrl = retrievalUrl;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UtilContentAddResponse utilContentAddResponse = (UtilContentAddResponse) o;
    return Objects.equals(this.cid, utilContentAddResponse.cid) &&
        Objects.equals(this.estuaryId, utilContentAddResponse.estuaryId) &&
        Objects.equals(this.providers, utilContentAddResponse.providers) &&
        Objects.equals(this.retrievalUrl, utilContentAddResponse.retrievalUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cid, estuaryId, providers, retrievalUrl);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UtilContentAddResponse {\n");
    
    sb.append("    cid: ").append(toIndentedString(cid)).append("\n");
    sb.append("    estuaryId: ").append(toIndentedString(estuaryId)).append("\n");
    sb.append("    providers: ").append(toIndentedString(providers)).append("\n");
    sb.append("    retrievalUrl: ").append(toIndentedString(retrievalUrl)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

