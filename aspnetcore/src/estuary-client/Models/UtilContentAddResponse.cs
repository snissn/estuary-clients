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
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace estuary-client.Models
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class UtilContentAddResponse : IEquatable<UtilContentAddResponse>
    { 
        /// <summary>
        /// Gets or Sets Cid
        /// </summary>

        [DataMember(Name="cid")]
        public string Cid { get; set; }

        /// <summary>
        /// Gets or Sets EstuaryId
        /// </summary>

        [DataMember(Name="estuaryId")]
        public int? EstuaryId { get; set; }

        /// <summary>
        /// Gets or Sets Providers
        /// </summary>

        [DataMember(Name="providers")]
        public List<string> Providers { get; set; }

        /// <summary>
        /// Gets or Sets RetrievalUrl
        /// </summary>

        [DataMember(Name="retrieval_url")]
        public string RetrievalUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UtilContentAddResponse {\n");
            sb.Append("  Cid: ").Append(Cid).Append("\n");
            sb.Append("  EstuaryId: ").Append(EstuaryId).Append("\n");
            sb.Append("  Providers: ").Append(Providers).Append("\n");
            sb.Append("  RetrievalUrl: ").Append(RetrievalUrl).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.GetType() == GetType() && Equals((UtilContentAddResponse)obj);
        }

        /// <summary>
        /// Returns true if UtilContentAddResponse instances are equal
        /// </summary>
        /// <param name="other">Instance of UtilContentAddResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UtilContentAddResponse other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    Cid == other.Cid ||
                    Cid != null &&
                    Cid.Equals(other.Cid)
                ) && 
                (
                    EstuaryId == other.EstuaryId ||
                    EstuaryId != null &&
                    EstuaryId.Equals(other.EstuaryId)
                ) && 
                (
                    Providers == other.Providers ||
                    Providers != null &&
                    Providers.SequenceEqual(other.Providers)
                ) && 
                (
                    RetrievalUrl == other.RetrievalUrl ||
                    RetrievalUrl != null &&
                    RetrievalUrl.Equals(other.RetrievalUrl)
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
                var hashCode = 41;
                // Suitable nullity checks etc, of course :)
                    if (Cid != null)
                    hashCode = hashCode * 59 + Cid.GetHashCode();
                    if (EstuaryId != null)
                    hashCode = hashCode * 59 + EstuaryId.GetHashCode();
                    if (Providers != null)
                    hashCode = hashCode * 59 + Providers.GetHashCode();
                    if (RetrievalUrl != null)
                    hashCode = hashCode * 59 + RetrievalUrl.GetHashCode();
                return hashCode;
            }
        }

        #region Operators
        #pragma warning disable 1591

        public static bool operator ==(UtilContentAddResponse left, UtilContentAddResponse right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(UtilContentAddResponse left, UtilContentAddResponse right)
        {
            return !Equals(left, right);
        }

        #pragma warning restore 1591
        #endregion Operators
    }
}
