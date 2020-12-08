package ru.yofik.api.exceptionMappers;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import ru.yofik.models.exceptions.AlreadyExistException;
import ru.yofik.models.exceptions.BadDataException;
import ru.yofik.models.exceptions.NotExistException;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class BadDataExceptionMapper implements ExceptionMapper<BadDataException> {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();


    @SneakyThrows
    @Override
    public Response toResponse(BadDataException e) {
        if (e instanceof NotExistException) {
            return Response
                    .status(Response.Status.BAD_REQUEST)
                    .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._400_EXIST)))
                    .build();
        }

        if (e instanceof AlreadyExistException) {
            return Response
                    .status(Response.Status.BAD_REQUEST)
                    .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._400_UNIQUE)))
                    .build();
        }

        return Response
                .status(Response.Status.BAD_REQUEST)
                .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._400_BODY_FORMAT, e.getMessage())))
                .build();
    }
}
