package ru.yofik.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class User {
    private int id;

    private String login;

    private String password;

    private int lastAuthed;
}
