package ru.yofik.models.userService.passwordHashService;

import javax.ejb.Stateless;

@Stateless
public interface PasswordHashService {
    String hash(String password);
}
