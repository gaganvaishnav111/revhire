package org.revature.revhire.repository;

import org.revature.revhire.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    User findById(int id);
    Optional<User> findByEmail(String email);
}
