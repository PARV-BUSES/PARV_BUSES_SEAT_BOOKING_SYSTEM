package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Admin;
import com.app.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")

public class AdminController {
 
	@Autowired
	private AdminService adminService;
	
	@PostMapping
	public Admin adminLogIn(@RequestBody Admin admin)
	{
        return adminService.adminSideLogIn(admin);
	}
	
	
}
