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

package io.swagger.client.model;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class MainChannelIDParam {
  
  @SerializedName("id")
  private Integer id = null;
  @SerializedName("initiator")
  private String initiator = null;
  @SerializedName("responder")
  private String responder = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getInitiator() {
    return initiator;
  }
  public void setInitiator(String initiator) {
    this.initiator = initiator;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getResponder() {
    return responder;
  }
  public void setResponder(String responder) {
    this.responder = responder;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MainChannelIDParam mainChannelIDParam = (MainChannelIDParam) o;
    return (this.id == null ? mainChannelIDParam.id == null : this.id.equals(mainChannelIDParam.id)) &&
        (this.initiator == null ? mainChannelIDParam.initiator == null : this.initiator.equals(mainChannelIDParam.initiator)) &&
        (this.responder == null ? mainChannelIDParam.responder == null : this.responder.equals(mainChannelIDParam.responder));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.id == null ? 0: this.id.hashCode());
    result = 31 * result + (this.initiator == null ? 0: this.initiator.hashCode());
    result = 31 * result + (this.responder == null ? 0: this.responder.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class MainChannelIDParam {\n");
    
    sb.append("  id: ").append(id).append("\n");
    sb.append("  initiator: ").append(initiator).append("\n");
    sb.append("  responder: ").append(responder).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}