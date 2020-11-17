package ru.yofik.models;

import lombok.Data;

@Data
public class Access {
    private String accessToken;
    private String refreshToken;


    public static Access of(String accessToken) {
        Access access = new Access();
        access.setAccessToken(accessToken);

        return access;
    }
}

