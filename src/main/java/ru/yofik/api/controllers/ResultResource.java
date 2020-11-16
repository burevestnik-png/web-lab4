package ru.yofik.api.controllers;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/result")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ResultResource {
    @GET
    public Response getAll() {
        return Response
                .ok()
                .entity("This is get resultS")
                .build();
    }

    @POST
    public Response add() {
        return Response
                .ok()
                .entity("This is add result")
                .build();
    }

    @DELETE
    public Response clear() {
        return Response
                .ok()
                .entity("This is clear")
                .build();
    }
}
