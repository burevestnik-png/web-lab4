package ru.yofik.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Result {
    private int id;
    private int userId;
    private double x;
    private double y;
    private double z;
    private double r;
    private boolean hit;
    private int executionTime;
}
