package io.swagger.api.factories;

import io.swagger.api.PublicApiService;
import io.swagger.api.impl.PublicApiServiceImpl;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaJerseyServerCodegen", date = "2022-11-12T01:09:15.105Z[GMT]")public class PublicApiServiceFactory {
    private final static PublicApiService service = new PublicApiServiceImpl();

    public static PublicApiService getPublicApi() {
        return service;
    }
}