package ru.yofik.models.userService.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.ejb.Stateless;
import java.security.Key;
import java.util.Date;

@Stateless
public final class JWTFactory {
    //in minutes
    private static final int ACCESS_TOKEN_DURATION = 5;
    //in minutes
    private static final int REFRESH_TOKEN_DURATION = 15;
    public static final String SECRET_KEY = "SWxvdmVqYXZhOElsb3ZlamF2YThJbG92ZWphdmE4SWxvdmVqYXZhOElsb3ZlamF2YThJb" +
            "G92ZWphdmE4SWxvdmVqYXZhOElsb3ZlamF2YThJbG92ZWphdmE4SWxvdmVqYXZhOElsb3ZlamF2YThJbG92ZWphdmE4SWxvdmVqYXZ" +
            "hOElsb3ZlamF2YThJbG92ZWphdmE4SWxvdmVqYXZhOElsb3ZlamF2YThJbG92ZWphdmE4SWxvdmVqYXZhOElsb3ZlamF2YThJbG92Z" +
            "WphdmE4SWxvdmVqYXZhOElsb3ZlamF2YThJbG92ZWphdmE4SWxvdmVqYXZhOElsb3Zlag==";

    private final Key key;


    public JWTFactory() {
        byte[] bytes = Decoders.BASE64.decode(SECRET_KEY);
        key = Keys.hmacShaKeyFor(bytes);
    }


    public String createAccessToken(int userId, Date issuedAt) {
        return Jwts
                .builder()
                .claim("userId", userId)
                .setSubject(TokenType.ACCESS.getSubject())
                .setExpiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_DURATION * 60 * 1000))
                .setIssuedAt(issuedAt)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String createRefreshToken(int userId, Date issuedAt) {
        return Jwts
                .builder()
                .claim("userId", userId)
                .setSubject(TokenType.REFRESH.getSubject())
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_TOKEN_DURATION * 60 * 1000))
                .setIssuedAt(issuedAt)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    @RequiredArgsConstructor
    public enum  TokenType {
        ACCESS("0"),
        REFRESH("1");
        @Getter
        private final String subject;


        public static TokenType of(String subject) {
            if (subject.equals("0")) {
                return ACCESS;
            }

            if (subject.equals("1")) {
                return REFRESH;
            }

            throw new IllegalArgumentException("Wrong subject for TokenType.");
        }


        public String getJwtCode() {
            return subject;
        }
    }
}
