package vn.codegym.pig_farm.service;

import vn.codegym.pig_farm.entity.AppUser;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

public interface IUserService {

    AppUser findByName(String name);

    String existsByUserName(String username) throws MessagingException, UnsupportedEncodingException;

    void saveNewPassword(String password, String name);

    /**
     * @return list User (test list)
     * @creator LongNT
     * @day 12/09/2022
     */

    List<AppUser> findAll();

    /**
     * @param appUser
     * @creator LongNT
     * @day 12/09/2022
     */

    void save(AppUser appUser);

    /**
     * @param id
     * @return User
     * @creator LongNT
     * @day 12/09/2022
     */

    Optional<AppUser> findById(Integer id);

    /**
     * @param appUser
     * @creator LongNT
     * @day 12/09/2022
     */
    void edit(AppUser appUser);

    void deleteUser(int id);


    /**
     * @param username
     * @return
     * @creator LongNT
     * @day 15/09/2022
     */
    Boolean existsUsername(String username);

    /**
     * @param email
     * @return
     * @creator LongNT
     * @day 15/09/2022
     */
    Boolean existsEmail(String email);
}
