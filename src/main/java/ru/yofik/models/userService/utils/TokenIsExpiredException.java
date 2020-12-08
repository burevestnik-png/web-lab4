package ru.yofik.models.userService.utils;

import lombok.Getter;
import lombok.Setter;


public class TokenIsExpiredException extends Exception {
    @Getter
    @Setter
    private JWTFactory.TokenType tokenType;
}
