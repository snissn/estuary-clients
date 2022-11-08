/*
 * Estuary API
 *
 * This is the API for the Estuary application.
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package estuary-client

type MainGetApiKeysResp struct {

	Expiry string `json:"expiry,omitempty"`

	Label string `json:"label,omitempty"`

	Token string `json:"token,omitempty"`

	TokenHash string `json:"tokenHash,omitempty"`
}
