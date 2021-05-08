package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("api/")
public class UserController {

	@Autowired
	private UserService userService;

	@CrossOrigin
	@GetMapping("users")
	public List<User> getUsers() {
		return userService.getUsers();
	}

}
