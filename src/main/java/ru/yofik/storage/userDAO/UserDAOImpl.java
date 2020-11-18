package ru.yofik.storage.userDAO;

import ru.yofik.models.User;
import ru.yofik.storage.resultDAO.ResultDAO;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.NamedQuery;
import javax.persistence.PersistenceContext;

@Stateless
@NamedQuery(name = "findByLogin", query = "SELECT user FROM User user WHERE user.login=:login")
public class UserDAOImpl implements UserDAO {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User create(User dto) {
        entityManager.persist(dto);
        entityManager.refresh(dto);

        return dto;
    }

    @Override
    public User update(User user) {
        entityManager.persist(user);
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
        return entityManager.createNamedQuery("findByLogin", User.class)
                            .setParameter("login", login)
                            .getSingleResult();
    }
}
