package ru.yofik.storage.resultDAO;

import ru.yofik.models.Result;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class ResultDAOImpl implements ResultDAO {
    @PersistenceContext(unitName = "primary")
    private EntityManager entityManager;


    @Override
    public Result create(Result dto) {
        entityManager.persist(dto);

        return dto;
    }

    @Override
    public void deleteAllByUserId(int userId) {
        entityManager.createNamedQuery("Result.clearResults")
                     .setParameter("userId", userId)
                     .executeUpdate();
    }

    @Override
    public List<Result> getAll(int userId) {
        return entityManager.createNamedQuery("Result.getAllResults", Result.class)
                            .setParameter("userId", userId)
                            .getResultList();
    }
}
