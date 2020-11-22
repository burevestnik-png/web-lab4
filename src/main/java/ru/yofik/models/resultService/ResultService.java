package ru.yofik.models.resultService;

import ru.yofik.models.Result;
import ru.yofik.models.User;

import javax.ejb.Stateless;
import java.util.List;

@Stateless
public interface ResultService {
    Result add(User user, Result result);

    List<Result> getAll(User user);

    void clear(User user);
}
