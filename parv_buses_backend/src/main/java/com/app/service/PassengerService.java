package com.app.service;

import java.util.List;

import com.app.dto.GetPassengersDto;
import com.app.entities.Passenger;

public interface PassengerService {
	
	String addPassenger(Passenger p,long id);
	
	String removePassenger(long userid,long passid);
	
	List<GetPassengersDto> getAllPasssengers(long userid);
	


}
