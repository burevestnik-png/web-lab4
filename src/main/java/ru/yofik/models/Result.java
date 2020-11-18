package ru.yofik.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "results")
@Entity
@SequenceGenerator(name = "resultSeq", allocationSize = 10)
@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@NamedQueries({
        @NamedQuery(name = "Result.clearResults", query = "DELETE FROM Result result WHERE result.userId=:userId"),
        @NamedQuery(name = "Result.getAllResults", query = "SELECT result FROM Result result WHERE result.userId=:userId")
})
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "resultSeq")
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
    private long executionTime;
}
