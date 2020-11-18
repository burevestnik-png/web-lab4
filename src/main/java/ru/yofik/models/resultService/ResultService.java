package ru.yofik.models.resultService;

import ru.yofik.models.Result;

import javax.ejb.Stateless;
import java.util.List;

@Stateless
public interface ResultService {
    void add(Result result);

    List<Result> getAll();

    void clear();
}
