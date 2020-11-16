package ru.yofik.controllers;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/result")
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
