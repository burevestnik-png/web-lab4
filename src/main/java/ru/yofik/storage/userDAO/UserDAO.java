package ru.yofik.storage.userDAO;

import ru.yofik.models.User;

import javax.ejb.Stateless;

@Stateless
public interface UserDAO {
    User create(User dto);

    User update(User user);

    void delete(User user);

    User get(int id);
}
