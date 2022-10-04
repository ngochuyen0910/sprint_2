package vn.codegym.pig_farm.service;


import vn.codegym.pig_farm.entity.UserRole;

import java.util.List;

public interface IUserRoleService {

    /**
     * @return list UserRole (test list)
     * @creator LongNT
     * @day 12/09/2022
     */

    List<UserRole> findAll();

    /**
     * @param userRole
     * @creator LongNT
     * @day 12/09/2022
     */
    void save(UserRole userRole);

    void deleteUserRole(int id);

}
