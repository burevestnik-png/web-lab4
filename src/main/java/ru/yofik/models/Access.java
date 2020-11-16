package ru.yofik.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Access {
    private String accessToken;
    private String refreshToken;
}
