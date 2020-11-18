package ru.yofik.api.resources;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ru.yofik.api.filters.SecuredResource;
import ru.yofik.models.Result;
import ru.yofik.models.User;
import ru.yofik.models.resultService.ResultService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@Path("/result")
@SecuredResource
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ResultResource {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();


    @Inject
    private ResultService resultService;

    @Context
    private SecurityContext securityContext;


    @GET
    public Response getAll() throws JsonProcessingException {
        User user = (User) securityContext.getUserPrincipal();

        return Response
                .ok()
                .entity(OBJECT_MAPPER.writeValueAsString(resultService.getAll(user)))
                .build();
    }

    @POST
    public Response add(final Result result) {
        User user = (User) securityContext.getUserPrincipal();

        resultService.add(user, result);

        return Response
                .ok()
                .build();
    }

    @DELETE
    public Response clear() {
        User user = (User) securityContext.getUserPrincipal();

        resultService.clear(user);

        return Response
                .ok()
                .build();
    }
}
