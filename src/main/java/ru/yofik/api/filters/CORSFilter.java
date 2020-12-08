package ru.yofik.api.filters;

import lombok.extern.java.Log;

import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

@CORSResource
@Provider
@Priority(Priorities.HEADER_DECORATOR)
@Log
public class CORSFilter implements ContainerResponseFilter {
    @Override
    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {
        containerResponseContext.getHeaders().putSingle("Access-Control-Allow-Origin", "http://localhost:80, http://localhost:8080");
        containerResponseContext.getHeaders().putSingle("Access-Control-Allow-Method", "GET, POST, PUT, DELETE, OPTIONS");
        containerResponseContext.getHeaders().putSingle("Access-Control-Allow-Headers", "Content-Type, Authorization");
        containerResponseContext.getHeaders().putSingle("Access-Control-Allow-Credentials", "true");
        containerResponseContext.getHeaders().putSingle("Access-Control-Max-Age", "86400");
    }
}
