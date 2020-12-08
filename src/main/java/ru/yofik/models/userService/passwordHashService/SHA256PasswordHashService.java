package ru.yofik.models.userService.passwordHashService;

import javax.ejb.Stateless;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Stateless
public final class SHA256PasswordHashService implements PasswordHashService {
    private final MessageDigest messageDigest;

    private static final String THIS_IS_SALT = "superSuperSUPERSuPeR_salt";


    {
        try {
            messageDigest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String hash(String password) {
        byte[] bytes = (password + THIS_IS_SALT).getBytes(StandardCharsets.UTF_8);
        byte[] hashedBytes = messageDigest.digest(messageDigest.digest(messageDigest.digest(bytes)));
        return Base64.getEncoder().encodeToString(hashedBytes);
    }
}
