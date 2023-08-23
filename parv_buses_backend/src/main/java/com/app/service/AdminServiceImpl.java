package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminDao;
import com.app.entities.Admin;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminDao adminDao;

	@Override
	public Admin adminSideLogIn(Admin admin) {
		Admin a=adminDao.findByEmailAndPassword(admin.getEmail(), admin.getPassword())
				.orElseThrow(()-> new RuntimeException("Invalid Admin Credentials"));
		return a;
	}
	
	
	
	
}
