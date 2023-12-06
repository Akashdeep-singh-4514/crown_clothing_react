package com.example.crwn_clothing.Controller;

import com.example.crwn_clothing.Model.User;
import com.example.crwn_clothing.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(method = RequestMethod.POST,value = "/verify")
    public String verifyUser(@RequestBody User input){
        return userServices.verifyAuth(input);
    }

}
