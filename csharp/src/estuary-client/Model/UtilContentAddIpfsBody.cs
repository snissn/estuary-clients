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
    /// UtilContentAddIpfsBody
    /// </summary>
    [DataContract]
    public partial class UtilContentAddIpfsBody :  IEquatable<UtilContentAddIpfsBody>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UtilContentAddIpfsBody" /> class.
        /// </summary>
        /// <param name="coluuid">coluuid.</param>
        /// <param name="dir">dir.</param>
        /// <param name="filename">filename.</param>
        /// <param name="peers">peers.</param>
        /// <param name="root">root.</param>
        public UtilContentAddIpfsBody(string coluuid = default(string), string dir = default(string), string filename = default(string), List<string> peers = default(List<string>), string root = default(string))
        {
            this.Coluuid = coluuid;
            this.Dir = dir;
            this.Filename = filename;
            this.Peers = peers;
            this.Root = root;
        }
        
        /// <summary>
        /// Gets or Sets Coluuid
        /// </summary>
        [DataMember(Name="coluuid", EmitDefaultValue=false)]
        public string Coluuid { get; set; }

        /// <summary>
        /// Gets or Sets Dir
        /// </summary>
        [DataMember(Name="dir", EmitDefaultValue=false)]
        public string Dir { get; set; }

        /// <summary>
        /// Gets or Sets Filename
        /// </summary>
        [DataMember(Name="filename", EmitDefaultValue=false)]
        public string Filename { get; set; }

        /// <summary>
        /// Gets or Sets Peers
        /// </summary>
        [DataMember(Name="peers", EmitDefaultValue=false)]
        public List<string> Peers { get; set; }

        /// <summary>
        /// Gets or Sets Root
        /// </summary>
        [DataMember(Name="root", EmitDefaultValue=false)]
        public string Root { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UtilContentAddIpfsBody {\n");
            sb.Append("  Coluuid: ").Append(Coluuid).Append("\n");
            sb.Append("  Dir: ").Append(Dir).Append("\n");
            sb.Append("  Filename: ").Append(Filename).Append("\n");
            sb.Append("  Peers: ").Append(Peers).Append("\n");
            sb.Append("  Root: ").Append(Root).Append("\n");
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
            return this.Equals(input as UtilContentAddIpfsBody);
        }

        /// <summary>
        /// Returns true if UtilContentAddIpfsBody instances are equal
        /// </summary>
        /// <param name="input">Instance of UtilContentAddIpfsBody to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UtilContentAddIpfsBody input)
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
                    this.Dir == input.Dir ||
                    (this.Dir != null &&
                    this.Dir.Equals(input.Dir))
                ) && 
                (
                    this.Filename == input.Filename ||
                    (this.Filename != null &&
                    this.Filename.Equals(input.Filename))
                ) && 
                (
                    this.Peers == input.Peers ||
                    this.Peers != null &&
                    this.Peers.SequenceEqual(input.Peers)
                ) && 
                (
                    this.Root == input.Root ||
                    (this.Root != null &&
                    this.Root.Equals(input.Root))
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
                if (this.Dir != null)
                    hashCode = hashCode * 59 + this.Dir.GetHashCode();
                if (this.Filename != null)
                    hashCode = hashCode * 59 + this.Filename.GetHashCode();
                if (this.Peers != null)
                    hashCode = hashCode * 59 + this.Peers.GetHashCode();
                if (this.Root != null)
                    hashCode = hashCode * 59 + this.Root.GetHashCode();
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
