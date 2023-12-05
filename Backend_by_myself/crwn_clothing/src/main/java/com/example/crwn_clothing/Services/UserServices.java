package com.example.crwn_clothing.Services;

import com.example.crwn_clothing.Model.User;
import com.example.crwn_clothing.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    List<User> clients=new ArrayList<>();
    public List<User> getAllClients()
    {
        userRepository.findAll().forEach(user -> clients.add(user));
        return clients;
    }
}
