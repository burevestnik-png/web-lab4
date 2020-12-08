package ru.yofik.api.filters;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ru.yofik.models.Access;
import ru.yofik.models.User;
import ru.yofik.models.userService.AccessTokenExpiredException;
import ru.yofik.models.userService.UserService;

import javax.annotation.Priority;
import javax.ejb.EJBException;
import javax.inject.Inject;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.security.Principal;

@SecuredResource
@Provider
@Priority(Priorities.AUTHORIZATION)
public class AuthFilter implements ContainerRequestFilter {
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();


    private static final String REALM = "web_lab4";
    private static final String AUTHORIZATION_SCHEME = "Bearer";


    @Inject
    private UserService userService;

    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        if (containerRequestContext.getMethod().equals("OPTIONS")) {
            return;
        }

        String authHeader = containerRequestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        if (!isTokenBasedAuthHeader(authHeader)) {
            abortWithUnauthorized(containerRequestContext);
        }

        String accessToken = authHeader.substring(AUTHORIZATION_SCHEME.length()).trim();

        try {
            User user = userService.identify(Access.ofAccessToken(accessToken));

            final SecurityContext currentSecurityContext = containerRequestContext.getSecurityContext();
            containerRequestContext.setSecurityContext(new SecurityContext() {
                @Override
                public Principal getUserPrincipal() {
                    return user;
                }

                @Override
                public boolean isUserInRole(String s) {
                    return true;
                }

                @Override
                public boolean isSecure() {
                    return currentSecurityContext.isSecure();
                }

                @Override
                public String getAuthenticationScheme() {
                    return AUTHORIZATION_SCHEME;
                }
            });
        } catch (EJBException e) {
            if (e.getCause() instanceof AccessTokenExpiredException) {
                abortWithUnauthorized(containerRequestContext);
            } else {
                throw e;
            }
        }
    }

    private boolean isTokenBasedAuthHeader(String authHeader) {
        return authHeader != null && authHeader.startsWith(AUTHORIZATION_SCHEME + " ");
    }

    private void abortWithUnauthorized(ContainerRequestContext requestContext) throws JsonProcessingException {
        requestContext.abortWith(
                Response.status(Response.Status.UNAUTHORIZED)
                        .header(HttpHeaders.WWW_AUTHENTICATE,
                                AUTHORIZATION_SCHEME + " realm=\"" + REALM + "\"")
                        .entity(OBJECT_MAPPER.writeValueAsString(ru.yofik.api.response.Response.failure(ru.yofik.api.response.Response.Status._401_ACCESS_TOKEN)))
                        .build());
    }
}
