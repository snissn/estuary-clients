package io.swagger.api.factories;

import io.swagger.api.DealsApiService;
import io.swagger.api.impl.DealsApiServiceImpl;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaJerseyServerCodegen", date = "2022-11-12T01:09:15.105Z[GMT]")public class DealsApiServiceFactory {
    private final static DealsApiService service = new DealsApiServiceImpl();

    public static DealsApiService getDealsApi() {
        return service;
    }
}