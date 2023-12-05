package com.example.crwn_clothing.Repository;

import com.example.crwn_clothing.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Integer> {
}
