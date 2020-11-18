package ru.yofik.models.userService.utils;

public class TokenSignatureException extends Exception {
    public TokenSignatureException() {
    }

    public TokenSignatureException(String message) {
        super(message);
    }

    public TokenSignatureException(Throwable cause) {
        super(cause);
    }
}
