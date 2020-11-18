package ru.yofik.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@SequenceGenerator(name = "resultSeq")
@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "resultReq")
    private int id;

    @Column
    private int userId;

    @Column
    private double x;

    @Column
    private double y;

    @Column
    private double r;

    @Column
    private boolean hit;

    @Column
    private int executionTime;
}
