package ru.yofik.storage.userDAO;

import ru.yofik.models.User;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
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
}
