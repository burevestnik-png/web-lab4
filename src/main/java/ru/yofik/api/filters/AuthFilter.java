package ru.yofik.api.filters;

import ru.yofik.models.Access;
import ru.yofik.models.User;
import ru.yofik.models.userService.AuthorizationFormatException;
import ru.yofik.models.userService.UserService;

import javax.annotation.Priority;
import javax.inject.Inject;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.security.Principal;

@SecuredResource
@Provider
@Priority(Priorities.AUTHORIZATION)
public class AuthFilter implements ContainerRequestFilter {
    private static final String AUTHORIZATION_SCHEME = "Bearer";


    @Inject
    private UserService userService;

    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        String authHeader = containerRequestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        if (!isTokenBasedAuthHeader(authHeader)) {
            throw new AuthorizationFormatException();
        }

        String accessToken = authHeader.substring(AUTHORIZATION_SCHEME.length()).trim();

        final User user = userService.identify(Access.of(accessToken));

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
    }

    private boolean isTokenBasedAuthHeader(String authHeader) {
        return authHeader != null && authHeader.startsWith(AUTHORIZATION_SCHEME + " ");
    }
}
