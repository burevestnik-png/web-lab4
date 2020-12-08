package ru.yofik.api.validator;

import ru.yofik.models.exceptions.BadDataException;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.util.Set;

public class CustomValidator {
    private static final Validator VALIDATOR = Validation.buildDefaultValidatorFactory().getValidator();


    public static <T> void validate(T t, Class<?> ...groups) {
        Set<ConstraintViolation<T>> constraintViolations = VALIDATOR.validate(t, groups);

        for (ConstraintViolation<T> constraintViolation : constraintViolations) {
            throw new BadDataException(constraintViolation.getPropertyPath().toString()  + " " + constraintViolation.getMessage());
        }
    }
}
