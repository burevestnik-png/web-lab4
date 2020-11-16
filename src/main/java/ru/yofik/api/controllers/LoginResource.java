package ru.yofik.api.controllers;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginResource {
    @POST
    public Response login() {
        return Response
                .ok()
                .entity("This is login")
                .build();
    }

    @Path("/register")
    @POST
    public Response register() {
        return Response
                .ok()
                .entity("This is register")
                .build();
    }

    @Path("/refresh")
    @POST
    public Response refresh() {
        return Response
                .ok()
                .entity("This is refresh")
                .build();
    }

    @Path("/reminder")
    @POST
    public Response remind() {
        return Response
                .ok()
                .entity("This is reminder")
                .build();
    }
}
