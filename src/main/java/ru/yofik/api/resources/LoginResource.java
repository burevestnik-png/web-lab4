package ru.yofik.api.resources;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ru.yofik.api.filters.CORSResource;
import ru.yofik.api.validator.BeforeHash;
import ru.yofik.api.validator.CustomValidator;
import ru.yofik.models.Access;
import ru.yofik.models.User;
import ru.yofik.models.userService.UserService;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/login")
@CORSResource
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginResource {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();


    @Inject
    private UserService userService;


    @OPTIONS
    public Response options() {
        return Response
                .ok()
                .build();
    }

    @Path("/register")
    @OPTIONS
    public Response optionsRegister() {
        return Response
                .ok()
                .build();
    }

    @Path("/refresh")
    @OPTIONS
    public Response optionsRefresh() {
        return Response
                .ok()
                .build();
    }


    @POST
    public Response login(@Valid User user) throws JsonProcessingException {
        CustomValidator.validate(user, BeforeHash.class);

        Access access = userService.login(user);

        return Response
                .ok()
                .entity(OBJECT_MAPPER.writeValueAsString(access))
                .build();
    }

    @Path("/register")
    @POST
    public Response register(User user) throws JsonProcessingException {
        CustomValidator.validate(user, BeforeHash.class);

        Access access = userService.create(user);

        return Response
                .ok()
                .entity(OBJECT_MAPPER.writeValueAsString(access))
                .build();
    }

    @Path("/refresh")
    @POST
    public Response refresh(Access accessDto) throws JsonProcessingException {
        Access access = userService.refresh(Access.ofRefreshToken(accessDto.getRefreshToken()));

        return Response
                .ok()
                .entity(OBJECT_MAPPER.writeValueAsString(access))
                .build();
    }
}