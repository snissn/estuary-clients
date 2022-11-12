/*
 * Estuary API
 *
 * This is the API for the Estuary application.
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package estuary_client

type UtilHttpError struct {
	Code int32 `json:"code,omitempty"`
	Details string `json:"details,omitempty"`
	Reason string `json:"reason,omitempty"`
}
