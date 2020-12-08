package ru.yofik.models;

import lombok.Data;
import ru.yofik.models.userService.utils.JWTFactory;

import java.util.Date;

@Data
public class Access {
    private String accessToken;
    private String refreshToken;


    public Access() {
    }

    private Access(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }


    public static Access ofAccessToken(String accessToken) {
        return new Access(accessToken, null);
    }

    public static Access ofRefreshToken(String refreshToken) {
        return new Access(null, refreshToken);
    }

    public static Access of(User user, JWTFactory jwtFactory) {
        String accessToken = jwtFactory.createAccessToken(user.getId(), new Date(user.getLastAuthed()));
        String refreshToken = jwtFactory.createRefreshToken(user.getId(),new Date(user.getLastAuthed()));
        return new Access(accessToken, refreshToken);
    }
}

