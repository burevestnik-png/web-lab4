package ru.yofik.api.resources;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.java.Log;
import ru.yofik.models.Access;
import ru.yofik.models.User;
import ru.yofik.models.userService.UserService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Log
public class LoginResource {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();


    @Inject
    private UserService userService;


    @POST
    public Response login(final User user) throws JsonProcessingException {
        Access access = userService.login(user);

        return Response
                .ok()
                .entity(OBJECT_MAPPER.writeValueAsString(access))
                .build();
    }

    @Path("/register")
    @POST
    public Response register(final User user) throws JsonProcessingException {
        Access access = userService.create(user);

        return Response
                .ok()
                .entity(OBJECT_MAPPER.writeValueAsString(access))
                .build();
    }

    @Path("/refresh")
    @POST
    public Response refresh(Access accessDto) throws JsonProcessingException {
        log.warning(accessDto.getRefreshToken());
        Access access = userService.refresh(Access.ofRefreshToken(accessDto.getRefreshToken()));

        return Response
                .ok()
                .entity(OBJECT_MAPPER.writeValueAsString(access))
                .build();
    }
}
