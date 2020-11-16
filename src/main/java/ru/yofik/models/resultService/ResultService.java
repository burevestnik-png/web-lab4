package ru.yofik.models.resultService;

import ru.yofik.models.Result;
import ru.yofik.models.User;

import java.util.List;

public interface ResultService {
    void add(Result result);

    List<Result> getAll(User user);

    void clear(User user);
}
