package ru.yofik.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Principal;

@Data
@NoArgsConstructor
public class User implements Principal {
    private int id;

    private String login;

    private String password;

    private int lastAuthed;

    @Override
    public String getName() {
        return login;
    }
}
