package io.swagger.api;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-11-12T01:09:18.377Z[GMT]")
public class NotFoundException extends ApiException {
    private int code;
    public NotFoundException (int code, String msg) {
        super(code, msg);
        this.code = code;
    }
}
