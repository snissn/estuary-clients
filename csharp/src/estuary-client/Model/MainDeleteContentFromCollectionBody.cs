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
    /// MainDeleteContentFromCollectionBody
    /// </summary>
    [DataContract]
    public partial class MainDeleteContentFromCollectionBody :  IEquatable<MainDeleteContentFromCollectionBody>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MainDeleteContentFromCollectionBody" /> class.
        /// </summary>
        /// <param name="by">by.</param>
        /// <param name="value">value.</param>
        public MainDeleteContentFromCollectionBody(string by = default(string), string value = default(string))
        {
            this.By = by;
            this.Value = value;
        }
        
        /// <summary>
        /// Gets or Sets By
        /// </summary>
        [DataMember(Name="by", EmitDefaultValue=false)]
        public string By { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public string Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MainDeleteContentFromCollectionBody {\n");
            sb.Append("  By: ").Append(By).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
            return this.Equals(input as MainDeleteContentFromCollectionBody);
        }

        /// <summary>
        /// Returns true if MainDeleteContentFromCollectionBody instances are equal
        /// </summary>
        /// <param name="input">Instance of MainDeleteContentFromCollectionBody to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MainDeleteContentFromCollectionBody input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.By == input.By ||
                    (this.By != null &&
                    this.By.Equals(input.By))
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
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
                if (this.By != null)
                    hashCode = hashCode * 59 + this.By.GetHashCode();
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
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
