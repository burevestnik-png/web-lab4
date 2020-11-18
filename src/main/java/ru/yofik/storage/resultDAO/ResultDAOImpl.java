package ru.yofik.storage.resultDAO;

import ru.yofik.models.Result;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
@NamedQueries({
        @NamedQuery(name = "clearResults", query = "DELETE FROM Result result WHERE result.userId=:userId"),
        @NamedQuery(name = "getAllResults", query = "SELECT result FROM Result result WHERE result.userId=:userId")
})
public class ResultDAOImpl implements ResultDAO {
    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public Result create(Result dto) {
        entityManager.persist(dto);
        entityManager.refresh(dto);

        return dto;
    }

    @Override
    public void deleteAllByUserId(int userId) {
        entityManager.createNamedQuery("clearResults")
                     .setParameter("userId", userId)
                     .executeUpdate();
    }

    @Override
    public List<Result> getAll(int userId) {
        return entityManager.createNamedQuery("getAllResults", Result.class)
                            .setParameter("userId", userId)
                            .getResultList();
    }
}
