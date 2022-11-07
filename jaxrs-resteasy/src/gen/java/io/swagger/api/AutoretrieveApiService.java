package io.swagger.api;

import io.swagger.api.*;
import io.swagger.model.*;


import io.swagger.model.UtilHttpError;

import java.util.List;
import io.swagger.api.NotFoundException;

import java.io.InputStream;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaResteasyServerCodegen", date = "2022-11-07T23:47:23.157Z")
public interface AutoretrieveApiService {
      Response autoretrieveHeartbeatPost(String token,SecurityContext securityContext)
      throws NotFoundException;
}
