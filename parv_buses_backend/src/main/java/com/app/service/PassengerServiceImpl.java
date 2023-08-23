package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PassengerDao;
import com.app.dao.UserDao;
import com.app.dto.GetPassengersDto;
import com.app.dto.GetStationsDto;
import com.app.entities.Passenger;
import com.app.entities.Station;
import com.app.entities.User;

@Service
@Transactional
public class PassengerServiceImpl implements PassengerService {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PassengerDao passengerDao;
	
	public List<GetPassengersDto> mapToDtoList(List<Passenger> entityList) {
	    List<GetPassengersDto> dtoList = new ArrayList<>();
	    
	    for (Passenger entity : entityList) {
	    	GetPassengersDto dto = new GetPassengersDto();
	    	dto.setAge(entity.getAge());
	    	dto.setFirstName(entity.getFirstName());
	    	dto.setLastName(entity.getLastName());
	    	dto.setGender(entity.getGender());
	    	dto.setId(entity.getId());
	        
	        dtoList.add(dto);
	    }
	    
	    return dtoList;
	}

	@Override
	public String addPassenger(Passenger p, long id) {
		
		User u = userDao.findById(id).orElseThrow(()->new RuntimeException("User Not Found"));
		u.addPassenger(p);
		return "Passenger added";
	}

	@Override
	public String removePassenger(long userid, long passid) {
		User u = userDao.findById(userid).orElseThrow(()->new RuntimeException("passenger not found.."));
		Passenger p = passengerDao.findById(passid).orElseThrow(()->new RuntimeException("Passenger not found.."));
		u.removePassenger(p);
		return "passenger removed..";
	}

	@Override
	public List<GetPassengersDto> getAllPasssengers(long userid) {
		User u = userDao.findById(userid).orElseThrow(()->new RuntimeException("User Not found."));
//		List<Passenger> list = passengerDao.findAll();
		
		return mapToDtoList(u.getPassengers());
	}


}
