package ru.yofik.models.userService;

import ru.yofik.models.Access;
import ru.yofik.models.User;

public interface UserService {
    User identify(Access access);

    User create(User dto);

    void delete(User user);

    Access login(User user);

    Access refresh(Access access);
}
