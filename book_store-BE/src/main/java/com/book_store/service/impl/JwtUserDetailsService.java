package com.book_store.service.impl;

import com.book_store.model.AppUser;
import com.book_store.model.UserRole;
import com.book_store.repository.UserRepository;
import com.book_store.repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    /**
     * Create by SangNH
     * Date: 08/09/2022
     * It overrides the loadUserByUsername for fetching user details from the database using the username
     * @param username
     * @return User
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = userRepository.findAppUserByName(username);

        if (appUser == null) {
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }

        List<UserRole> userRoles = userRoleRepository.findAllByAppUser(appUser);

        List<GrantedAuthority> grantList = new ArrayList<>();

        if (userRoles != null) {
            for (UserRole item: userRoles) {
                GrantedAuthority authority = new SimpleGrantedAuthority(item.getAppRole().getRoleName());
                grantList.add(authority);
            }
        }
        return new User(appUser.getUsername(), appUser.getPassword(), grantList);
    }
}
