package ru.yofik.models.userService.utils;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

import javax.ejb.Stateless;
import java.security.Key;
import java.text.SimpleDateFormat;
import java.util.Date;

@Stateless
public final class JWTChecker {
    private final Key key;

    private Jws<Claims> jws;
    private String jwsAsString;


    public JWTChecker() {
        byte[] bytes = Decoders.BASE64.decode(JWTFactory.SECRET_KEY);
        key = Keys.hmacShaKeyFor(bytes);
    }


    public JWTChecker use(String jws) {
        this.jwsAsString = jws;

        return this;
    }

    public JWTChecker checkSign() throws TokenSignatureException, TokenIsExpiredException {
        try {
            this.jws = Jwts.parserBuilder()
                           .setSigningKey(key)
                           .build()
                           .parseClaimsJws(jwsAsString);

            return this;
        } catch (ExpiredJwtException e) {
            throw new TokenIsExpiredException();
        } catch (UnsupportedJwtException | MalformedJwtException | SignatureException | IllegalArgumentException e) {
            throw new TokenSignatureException(e.getMessage());
        }
    }

    public JWTChecker checkSubject(JWTFactory.TokenType tokenType) throws TokenTypeException {
       try {
           String subject = jws.getBody()
                               .getSubject();

           if (tokenType != JWTFactory.TokenType.of(subject)) {
               throw new TokenTypeException("Wrong jwt subject.");
           }

           return this;
       } catch (IllegalArgumentException e) {
           throw new TokenTypeException("Wrong jwt subject.");
       }
    }

    public int getUserId() {
        return jws.getBody().get("userId", Integer.class);
    }

    public JWTChecker checkIssuedAt(Date userIssuedAt) throws TokenIsExpiredException {
        Date issuedAt = jws.getBody().getIssuedAt();

        if (!isIssuedAtSameTime(userIssuedAt, issuedAt)) {
            TokenIsExpiredException e = new TokenIsExpiredException();
            e.setTokenType(JWTFactory.TokenType.of(jws.getBody().getSubject()));
            throw e;
        }

        return this;
    }

    private boolean isIssuedAtSameTime(Date userIssuedAt, Date accessTokenIssuedAt) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String userIssuedAtWithoutMillis = simpleDateFormat.format(userIssuedAt);
        String tokenIssuedAt = simpleDateFormat.format(accessTokenIssuedAt);

        return tokenIssuedAt.equals(userIssuedAtWithoutMillis);
    }
}
