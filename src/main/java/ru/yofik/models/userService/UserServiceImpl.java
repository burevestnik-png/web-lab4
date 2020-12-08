package ru.yofik.models.userService;

import ru.yofik.api.validator.BeforeHash;
import ru.yofik.api.validator.CustomValidator;
import ru.yofik.models.Access;
import ru.yofik.models.User;
import ru.yofik.models.exceptions.NotExistException;
import ru.yofik.models.userService.passwordHashService.PasswordHashService;
import ru.yofik.models.userService.utils.*;
import ru.yofik.storage.resultDAO.ResultDAO;
import ru.yofik.storage.userDAO.UserDAO;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.Date;

@Stateless
public class UserServiceImpl implements UserService {
    @Inject
    private JWTChecker jwtChecker;

    @Inject
    private JWTFactory jwtFactory;

    @Inject
    private PasswordHashService passwordHashService;

    @Inject
    private UserDAO userDAO;

    @Inject
    private ResultDAO resultDAO;


    @Override
    public User identify(Access access) {
        try {
            jwtChecker
                    .use(access.getAccessToken())
                    .checkSign();

            jwtChecker.checkSubject(JWTFactory.TokenType.ACCESS);

            User user = userDAO.get(jwtChecker.getUserId());

            if (user == null) {
                throw new NotExistException();
            }

            jwtChecker.checkIssuedAt(new Date(user.getLastAuthed()));

            return user;
        } catch (TokenIsExpiredException e) {
            throw new AccessTokenExpiredException();
        } catch (TokenSignatureException | TokenTypeException e) {
            throw new AuthorizationFormatException();
        }
    }

    @Override
    public Access create(User dto) {
        User user = userDAO.get(dto.getLogin());

        if (user != null) {
            throw new LoginInUseException();
        }

        dto.setLastAuthed(System.currentTimeMillis());
        dto.setPassword(passwordHashService.hash(dto.getPassword()));
        user = userDAO.create(dto);

        return Access.of(user, jwtFactory);
    }

    @Override
    public void delete(User user) {
        User existedUser = userDAO.get(user.getId());

        if (existedUser == null) {
            throw new NotExistException();
        }

        resultDAO.deleteAllByUserId(user.getId());
        userDAO.delete(user);
    }

    @Override
    public Access login(User userDto) {
        User user = userDAO.get(userDto.getLogin());
        if (user == null) {
            throw new NotExistException();
        }

        String hashedPassword = passwordHashService.hash(userDto.getPassword());
        if (!user.getPassword().equals(hashedPassword)) {
            throw new BadPasswordException();
        }

        user.setLastAuthed(System.currentTimeMillis());
        userDAO.update(user);

        return Access.of(user, jwtFactory);
    }

    @Override
    public Access refresh(Access access) {
        try {
            jwtChecker
                    .use(access.getRefreshToken())
                    .checkSign();

            jwtChecker
                    .checkSubject(JWTFactory.TokenType.REFRESH);

            User user = userDAO.get(jwtChecker.getUserId());

            jwtChecker.checkIssuedAt(new Date(user.getLastAuthed()));
            user.setLastAuthed(System.currentTimeMillis());
            userDAO.update(user);

            return Access.of(user, jwtFactory);
        } catch (TokenIsExpiredException e) {
            throw new RefreshTokenExpiredException();
        } catch (TokenTypeException | TokenSignatureException e) {
            throw new AuthorizationFormatException();
        }
    }
}
