package ru.yofik.models.resultService;

import ru.yofik.models.Result;
import ru.yofik.models.User;
import ru.yofik.storage.resultDAO.ResultDAO;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.SecurityContext;
import java.util.List;

@Stateless
public class ResultServiceImpl implements ResultService {
    @Inject
    private ResultDAO resultDAO;

    @Context
    private SecurityContext securityContext;


    @Override
    public Result add(User user, Result result) {
        result.setUserId(user.getId());
        result.setHit(isHit(result));
        result.setExecutionTime(System.nanoTime() - result.getExecutionTime());
        return resultDAO.create(result);
    }

    @Override
    public List<Result> getAll(User user) {
        return resultDAO.getAll(user.getId());
    }

    @Override
    public void clear(User user) {
        resultDAO.deleteAllByUserId(user.getId());
    }

    private boolean isHit(Result result) {
        return isRectangle(result) || isTriangle(result) || isCircle(result);
    }

    private boolean isRectangle(Result result) {
        return result.getX() >= 0 && result.getX() <= result.getR() / 2.0
               &&
               result.getY() >= 0 && result.getY() <= result.getR();
    }

    private boolean isTriangle(Result result) {
        return result.getX() >= 0 && result.getX() <= result.getR() / 2.0
               &&
               result.getY() >= 2 * result.getX() - result.getR() && result.getY() <= 0;
    }

    private boolean isCircle(Result result) {
        return result.getX() <= 0 && result.getY() >= 0
               &&
               result.getX() * result.getX() + result.getY() * result.getY() <= result.getR() * result.getR() / 4.0;
    }
}
