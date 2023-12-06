package com.example.crwn_clothing.Controller;

import com.example.crwn_clothing.Model.User;
import com.example.crwn_clothing.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UsersController {
    @Autowired
    UserServices userServices;

    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getallUsers()
    {
        return userServices.getAllClients();
    }
}
