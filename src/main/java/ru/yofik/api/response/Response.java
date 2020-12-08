package ru.yofik.api.response;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

public class Response {
    @Getter
    private Status status;

    @Getter
    private Map<String, Object> data;


    private Response() {
        data = new HashMap<>();
    }


    public static Response failure(Status status, String description) {
        Response response = new Response();
        response.status = status;
        response.data.put("description", description);

        return response;
    }

    public static Response failure(Status status) {
        Response response = new Response();
        response.status = status;
        response.data.put("description", "");

        return response;
    }

    public static Response success() {
        Response response = new Response();
        response.status = Status._200_OK;

        return response;
    }

    public Response add(String topic, Object object) {
        data.put(topic, object);

        return this;
    }

    @Getter
    @RequiredArgsConstructor
    public enum  Status {
        _200_OK("2R00"),

        _400_BODY_FORMAT("4R00"),
        _401_AUTHORIZATION_FORMAT("4R10"),

        _400_EXIST("4R01"),
        _400_UNIQUE("4R02"),
        _400_UNIQUE_LOGIN("4R03"),

        _401_PASSWORD("4R11"),
        _401_ACCESS_TOKEN("4R12"),
        _401_REFRESH_TOKEN("4R13");

        @JsonValue
        private final String code;


        public static Status of(String code) {
            for (Status status : values()) {
                if (status.code.equals(code)) {
                    return status;
                }
            }

            throw new IllegalArgumentException("No such status.");
        }


        @Override
        public String toString() {
            return code;
        }
    }
}
