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

public class SwagPinningApi {
    SwagClient client;

    public SwagPinningApi(SwagClient client) {
        this.client = client;
    }

    public SwagPinningApi() {
        this.client = new SwagClient();
    }

    public SwagClient getClient() {
        return this.client;
    }

    /**
     * List all pin status objects
     * This endpoint lists all pin status objects
     * @return String
     * @throws Swagger.ApiException if fails to make API call
     */
    public String pinningPinsGet() {
        List<Swagger.Param> query = new List<Swagger.Param>();
        List<Swagger.Param> form = new List<Swagger.Param>();

        return (String) client.invoke(
            'GET', '/pinning/pins', '',
            query, form,
            new Map<String, Object>(),
            new Map<String, Object>(),
            new List<String>{ 'application/json' },
            new List<String>{ 'application/json' },
            new List<String> { 'bearerAuth' },
            String.class
        );
    }
    /**
     * Delete a pinned object
     * This endpoint deletes a pinned object.
     * @param pinid Pin ID (required)
     * @return String
     * @throws Swagger.ApiException if fails to make API call
     */
    public String pinningPinsPinidDelete(Map<String, Object> params) {
        client.assertNotNull(params.get('pinid'), 'pinid');
        List<Swagger.Param> query = new List<Swagger.Param>();
        List<Swagger.Param> form = new List<Swagger.Param>();

        return (String) client.invoke(
            'DELETE', '/pinning/pins/{pinid}', '',
            query, form,
            new Map<String, Object>{
                'pinid' => (String) params.get('pinid')
            },
            new Map<String, Object>(),
            new List<String>{ 'application/json' },
            new List<String>{ 'application/json' },
            new List<String> { 'bearerAuth' },
            String.class
        );
    }
    /**
     * Get a pin status object
     * This endpoint returns a pin status object.
     * @param pinid cid (required)
     * @return String
     * @throws Swagger.ApiException if fails to make API call
     */
    public String pinningPinsPinidGet(Map<String, Object> params) {
        client.assertNotNull(params.get('pinid'), 'pinid');
        List<Swagger.Param> query = new List<Swagger.Param>();
        List<Swagger.Param> form = new List<Swagger.Param>();

        return (String) client.invoke(
            'GET', '/pinning/pins/{pinid}', '',
            query, form,
            new Map<String, Object>{
                'pinid' => (String) params.get('pinid')
            },
            new Map<String, Object>(),
            new List<String>{ 'application/json' },
            new List<String>{ 'application/json' },
            new List<String> { 'bearerAuth' },
            String.class
        );
    }
    /**
     * Replace a pinned object
     * This endpoint replaces a pinned object.
     * @param pinid Pin ID (required)
     * @return String
     * @throws Swagger.ApiException if fails to make API call
     */
    public String pinningPinsPinidPost(Map<String, Object> params) {
        client.assertNotNull(params.get('pinid'), 'pinid');
        List<Swagger.Param> query = new List<Swagger.Param>();
        List<Swagger.Param> form = new List<Swagger.Param>();

        return (String) client.invoke(
            'POST', '/pinning/pins/{pinid}', '',
            query, form,
            new Map<String, Object>{
                'pinid' => (String) params.get('pinid')
            },
            new Map<String, Object>(),
            new List<String>{ 'application/json' },
            new List<String>{ 'application/json' },
            new List<String> { 'bearerAuth' },
            String.class
        );
    }
    /**
     * Add and pin object
     * This endpoint adds a pin to the IPFS daemon.
     * @param pin Pin Body {cid:cid, name:name} (required)
     * @return String
     * @throws Swagger.ApiException if fails to make API call
     */
    public String pinningPinsPost(Map<String, Object> params) {
        client.assertNotNull(params.get('pin'), 'pin');
        List<Swagger.Param> query = new List<Swagger.Param>();
        List<Swagger.Param> form = new List<Swagger.Param>();

        return (String) client.invoke(
            'POST', '/pinning/pins',
            (SwagTypesIpfsPin) params.get('pin'),
            query, form,
            new Map<String, Object>(),
            new Map<String, Object>(),
            new List<String>{ 'application/json' },
            new List<String>{ 'application/json' },
            new List<String> { 'bearerAuth' },
            String.class
        );
    }
}
