package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.ChangePasswordDto;
import com.app.dto.LoggedInUserData;
import com.app.dto.LoginDto;
import com.app.dto.UpdateUserDto;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse signUpUser(User user) {
		userDao.save(user);
		
		return new ApiResponse("SignUp Successfully");
	}

	@Override
	public LoggedInUserData loginUser(LoginDto ld) {
		User u = userDao.findByEmailAndPassword(ld.getEmail(), ld.getPassword()).orElseThrow(()-> new RuntimeException("User Not Found.."));
		
		return mapper.map(u, LoggedInUserData.class);
	}

	@Override
	public ApiResponse ChangePassword(ChangePasswordDto pass) {
	User user=userDao.findByEmail(pass.getEmail());
	
		if(user.getPassword().equals(pass.getPassword()))
		{
			user.setPassword(pass.getNew_pass());
			return new ApiResponse(" Password Changed SuccessFully");

		}
		
			return new ApiResponse("Old Password Not Matched");
		
}
	@Override
	public UpdateUserDto updateEmpDetails(UpdateUserDto user,long userid) {
		User u=userDao.findById(userid).orElseThrow(() -> new RuntimeException("User Not Found"));
		u.setAge(user.getAge());
		u.setEmail(user.getEmail());
		u.setFirstname(user.getFirstname());
		u.setLastname(user.getLastname());
		u.setGender(user.getGender());
		u.setMobile(user.getMobile());
		User updatedUser=userDao.save(u);
		return mapper.map(u, UpdateUserDto.class);
	}
	
}
