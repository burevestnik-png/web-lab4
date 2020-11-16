package ru.yofik.api.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import ru.yofik.models.userService.*;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class UserServiceExceptionMapper implements ExceptionMapper<UserServiceException> {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @SneakyThrows
    @Override
    public Response toResponse(UserServiceException e) {
        if (e instanceof AccessTokenExpiredException) {
            return Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._401_ACCESS_TOKEN)))
                    .build();
        }

        if (e instanceof AuthorizationFormatException) {
            return Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._401_AUTHORIZATION_FORMAT)))
                    .build();
        }

        if (e instanceof BadPasswordException) {
            return Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._401_PASSWORD)))
                    .build();
        }

        if (e instanceof LoginInUseException) {
            return Response
                    .status(Response.Status.BAD_REQUEST)
                    .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._400_UNIQUE_LOGIN)))
                    .build();
        }

        if (e instanceof RefreshTokenExpiredException) {
            return Response
                    .status(Response.Status.UNAUTHORIZED)
                    .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._401_REFRESH_TOKEN)))
                    .build();
        }

        return Response.serverError().build();
    }
}
