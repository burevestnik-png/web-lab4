package ru.yofik.models.userService;

import ru.yofik.models.Access;
import ru.yofik.models.User;

import javax.ejb.Stateless;

@Stateless
public interface UserService {
    User identify(Access access);

    Access create(User dto);

    void delete(User user);

    Access login(User user);

    Access refresh(Access access);

    Access setNewPassword(User dto);
}
