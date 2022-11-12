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
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * AutoretrieveInitBody
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2022-11-12T01:09:13.769Z[GMT]")
public class AutoretrieveInitBody {
  @SerializedName("addresses")
  private String addresses = null;

  @SerializedName("pubKey")
  private String pubKey = null;

  public AutoretrieveInitBody addresses(String addresses) {
    this.addresses = addresses;
    return this;
  }

   /**
   * Autoretrieve&#x27;s comma-separated list of addresses
   * @return addresses
  **/
  @Schema(required = true, description = "Autoretrieve's comma-separated list of addresses")
  public String getAddresses() {
    return addresses;
  }

  public void setAddresses(String addresses) {
    this.addresses = addresses;
  }

  public AutoretrieveInitBody pubKey(String pubKey) {
    this.pubKey = pubKey;
    return this;
  }

   /**
   * Autoretrieve&#x27;s public key
   * @return pubKey
  **/
  @Schema(required = true, description = "Autoretrieve's public key")
  public String getPubKey() {
    return pubKey;
  }

  public void setPubKey(String pubKey) {
    this.pubKey = pubKey;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AutoretrieveInitBody autoretrieveInitBody = (AutoretrieveInitBody) o;
    return Objects.equals(this.addresses, autoretrieveInitBody.addresses) &&
        Objects.equals(this.pubKey, autoretrieveInitBody.pubKey);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addresses, pubKey);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AutoretrieveInitBody {\n");
    
    sb.append("    addresses: ").append(toIndentedString(addresses)).append("\n");
    sb.append("    pubKey: ").append(toIndentedString(pubKey)).append("\n");
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
