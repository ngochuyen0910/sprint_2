package vn.codegym.pig_farm.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.pig_farm.entity.UserRole;
import vn.codegym.pig_farm.repository.UserRepository;
import vn.codegym.pig_farm.repository.UserRoleRepository;
import vn.codegym.pig_farm.service.IUserRoleService;

import java.util.List;

@Service
public class UserRoleService implements IUserRoleService {

    @Autowired
    UserRoleRepository userRoleRepository;

    @Autowired
    UserRepository userRepository;

    /**
     * @return list UserRole (test list)
     * @creator LongNT
     * @day 12/09/2022
     */

    @Override
    public List<UserRole> findAll() {
        return userRoleRepository.findAll();
    }

    /**
     * @param userRole
     * @creator LongNT
     * @day 12/09/2022
     */

    @Override
    public void save(UserRole userRole) {
        userRoleRepository.save(userRole.getAppRole().getId(), userRole.getAppUser().getId());
    }


    @Override
    public void deleteUserRole(int id) {
        userRoleRepository.deleteUserRole(id);
    }
}
