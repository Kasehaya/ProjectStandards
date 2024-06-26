package com.metricas.backestandares.repository;

import java.util.Optional;

import com.metricas.backestandares.model.User;
import org.springframework.data.repository.CrudRepository;


public interface UserCrudRepository extends CrudRepository<User, Integer> {

    Optional<User> findByUsername(String username);

}
