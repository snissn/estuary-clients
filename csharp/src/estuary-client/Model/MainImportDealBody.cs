/* 
 * Estuary API
 *
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = estuary-client.Client.SwaggerDateConverter;

namespace estuary-client.Model
{
    /// <summary>
    /// MainImportDealBody
    /// </summary>
    [DataContract]
        public partial class MainImportDealBody :  IEquatable<MainImportDealBody>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MainImportDealBody" /> class.
        /// </summary>
        /// <param name="coluuid">coluuid.</param>
        /// <param name="dealIDs">dealIDs.</param>
        /// <param name="dir">dir.</param>
        /// <param name="name">name.</param>
        public MainImportDealBody(string coluuid = default(string), List<int?> dealIDs = default(List<int?>), string dir = default(string), string name = default(string))
        {
            this.Coluuid = coluuid;
            this.DealIDs = dealIDs;
            this.Dir = dir;
            this.Name = name;
        }
        
        /// <summary>
        /// Gets or Sets Coluuid
        /// </summary>
        [DataMember(Name="coluuid", EmitDefaultValue=false)]
        public string Coluuid { get; set; }

        /// <summary>
        /// Gets or Sets DealIDs
        /// </summary>
        [DataMember(Name="dealIDs", EmitDefaultValue=false)]
        public List<int?> DealIDs { get; set; }

        /// <summary>
        /// Gets or Sets Dir
        /// </summary>
        [DataMember(Name="dir", EmitDefaultValue=false)]
        public string Dir { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MainImportDealBody {\n");
            sb.Append("  Coluuid: ").Append(Coluuid).Append("\n");
            sb.Append("  DealIDs: ").Append(DealIDs).Append("\n");
            sb.Append("  Dir: ").Append(Dir).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as MainImportDealBody);
        }

        /// <summary>
        /// Returns true if MainImportDealBody instances are equal
        /// </summary>
        /// <param name="input">Instance of MainImportDealBody to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MainImportDealBody input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Coluuid == input.Coluuid ||
                    (this.Coluuid != null &&
                    this.Coluuid.Equals(input.Coluuid))
                ) && 
                (
                    this.DealIDs == input.DealIDs ||
                    this.DealIDs != null &&
                    input.DealIDs != null &&
                    this.DealIDs.SequenceEqual(input.DealIDs)
                ) && 
                (
                    this.Dir == input.Dir ||
                    (this.Dir != null &&
                    this.Dir.Equals(input.Dir))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Coluuid != null)
                    hashCode = hashCode * 59 + this.Coluuid.GetHashCode();
                if (this.DealIDs != null)
                    hashCode = hashCode * 59 + this.DealIDs.GetHashCode();
                if (this.Dir != null)
                    hashCode = hashCode * 59 + this.Dir.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }
}
