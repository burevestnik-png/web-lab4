package ru.yofik.models.resultService;

import ru.yofik.models.Result;
import ru.yofik.models.User;
import ru.yofik.storage.resultDAO.ResultDAO;

import javax.annotation.Resource;
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
    public void add(User user, Result result) {
        result.setUserId(user.getId());
        resultDAO.create(result);
    }

    @Override
    public List<Result> getAll(User user) {
        return resultDAO.getAll(user.getId());
    }

    @Override
    public void clear(User user) {
        resultDAO.deleteAllByUserId(user.getId());
    }
}
