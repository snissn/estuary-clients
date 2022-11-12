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

package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;

/**
 * MainImportDealBody
 */
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaJerseyServerCodegen", date = "2022-11-12T01:09:15.105Z[GMT]")public class MainImportDealBody   {
  @JsonProperty("coluuid")
  private String coluuid = null;

  @JsonProperty("dealIDs")
  private List<Integer> dealIDs = null;

  @JsonProperty("dir")
  private String dir = null;

  @JsonProperty("name")
  private String name = null;

  public MainImportDealBody coluuid(String coluuid) {
    this.coluuid = coluuid;
    return this;
  }

  /**
   * Get coluuid
   * @return coluuid
   **/
  @JsonProperty("coluuid")
  @Schema(description = "")
  public String getColuuid() {
    return coluuid;
  }

  public void setColuuid(String coluuid) {
    this.coluuid = coluuid;
  }

  public MainImportDealBody dealIDs(List<Integer> dealIDs) {
    this.dealIDs = dealIDs;
    return this;
  }

  public MainImportDealBody addDealIDsItem(Integer dealIDsItem) {
    if (this.dealIDs == null) {
      this.dealIDs = new ArrayList<Integer>();
    }
    this.dealIDs.add(dealIDsItem);
    return this;
  }

  /**
   * Get dealIDs
   * @return dealIDs
   **/
  @JsonProperty("dealIDs")
  @Schema(description = "")
  public List<Integer> getDealIDs() {
    return dealIDs;
  }

  public void setDealIDs(List<Integer> dealIDs) {
    this.dealIDs = dealIDs;
  }

  public MainImportDealBody dir(String dir) {
    this.dir = dir;
    return this;
  }

  /**
   * Get dir
   * @return dir
   **/
  @JsonProperty("dir")
  @Schema(description = "")
  public String getDir() {
    return dir;
  }

  public void setDir(String dir) {
    this.dir = dir;
  }

  public MainImportDealBody name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   **/
  @JsonProperty("name")
  @Schema(description = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MainImportDealBody mainImportDealBody = (MainImportDealBody) o;
    return Objects.equals(this.coluuid, mainImportDealBody.coluuid) &&
        Objects.equals(this.dealIDs, mainImportDealBody.dealIDs) &&
        Objects.equals(this.dir, mainImportDealBody.dir) &&
        Objects.equals(this.name, mainImportDealBody.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(coluuid, dealIDs, dir, name);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MainImportDealBody {\n");
    
    sb.append("    coluuid: ").append(toIndentedString(coluuid)).append("\n");
    sb.append("    dealIDs: ").append(toIndentedString(dealIDs)).append("\n");
    sb.append("    dir: ").append(toIndentedString(dir)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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