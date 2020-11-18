package ru.yofik.storage.resultDAO;

import ru.yofik.models.Result;

import javax.ejb.Stateless;
import java.util.List;

@Stateless
public interface ResultDAO {
    Result create(Result dto);

    void deleteAllByUserId(int userId);

    List<Result> getAll(int userId);
}
