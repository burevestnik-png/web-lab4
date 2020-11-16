package ru.yofik.controllers;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/login")
public class LoginResource {
    @POST
    public Response login() {
        return Response
                .ok()
                .entity("sdkfsdfksdlf")
                .build();
    }
}
