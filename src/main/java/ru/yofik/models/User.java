package ru.yofik.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.security.Principal;

@Entity
@SequenceGenerator(name = "userSeq", allocationSize = 1)
@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User implements Principal {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSeq")
    private int id;

    @Column
    private String login;

    @Column
    private String password;

    @Column
    private long lastAuthed;

    @Override
    public String getName() {
        return login;
    }
}
