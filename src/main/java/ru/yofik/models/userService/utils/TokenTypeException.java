package ru.yofik.models.userService.utils;

public class TokenTypeException extends Exception {
    public TokenTypeException() {
    }

    public TokenTypeException(String message) {
        super(message);
    }

    public TokenTypeException(Throwable cause) {
        super(cause);
    }
}
