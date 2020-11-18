package ru.yofik.storage.userDAO;

import ru.yofik.models.User;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NamedQuery;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class UserDAOImpl implements UserDAO {
    @PersistenceContext(unitName = "primary")
    private EntityManager entityManager;

    @Override
    public User create(User dto) {
        entityManager.persist(dto);

        return dto;
    }

    @Override
    public User update(User user) {
        entityManager.refresh(user);

        return user;
    }

    @Override
    public void delete(User user) {
        entityManager.remove(user);
    }

    @Override
    public User get(int id) {
        return entityManager.find(User.class, id);
    }

    @Override
    public User get(String login) {
        List<User> users = entityManager.createNamedQuery("User.findByLogin", User.class)
                                        .setParameter("login", login)
                                        .getResultList();

        if (users.isEmpty()) {
            return null;
        } else {
            return users.get(0);
        }
    }
}
