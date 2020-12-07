package ru.yofik.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

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

    @Column(nullable = false)
    private int userId;

    @Column(nullable = false)
    @NotNull
    private Double x;

    @Column(nullable = false)
    @NotNull
    private Double y;

    @Column(nullable = false)
    @NotNull
    @Min(-3)
    @Max(5)
    private Integer r;

    @Column(nullable = false)
    private boolean hit;

    @Column(nullable = false)
    private long executionTime;
}
