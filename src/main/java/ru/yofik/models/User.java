package ru.yofik.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.yofik.api.validator.BeforeHash;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.security.Principal;

@Table(name = "users")
@Entity
@SequenceGenerator(name = "userSeq", allocationSize = 1)
@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@NamedQuery(name = "User.findByLogin", query = "SELECT user FROM User user WHERE user.login=:login")
public class User implements Principal {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSeq")
    private int id;

    @Column(nullable = false)
    @NotBlank
    @Pattern(regexp = "[\\w\u0410-\u044F]{3,20}")
    private String login;

    @Column(nullable = false)
    @NotBlank
    @Pattern(regexp = "[\\w\u0410-\u044F!\"#$%&'()*+,./:;<=>?@^_`{|}~]{3,20}", groups = BeforeHash.class)
    private String password;

    @Column(nullable = false)
    private long lastAuthed;

    @Override
    public String getName() {
        return login;
    }
}
