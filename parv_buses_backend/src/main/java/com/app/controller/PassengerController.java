package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GetPassengersDto;
import com.app.dto.RemovePassengerDto;
import com.app.entities.Passenger;
import com.app.service.PassengerService;
import com.app.service.UserService;

@RestController
@RequestMapping("/passenger")
@CrossOrigin("*")

public class PassengerController {
	
	@Autowired
	private PassengerService passService;
	
	@PostMapping("/addpassenger/{userid}")
	public String addPassenger(@RequestBody Passenger p,@PathVariable long userid) {
		
		return passService.addPassenger(p, userid);
	
	}
	
	@PostMapping("/removepassenger")
	public String removePassenger(@RequestBody RemovePassengerDto rpd) {
		return passService.removePassenger(rpd.getUserid(), rpd.getPassengerid());
	}
	
	@GetMapping("/getpassengers/{userid}")
	public List<GetPassengersDto> getPassengers(@PathVariable long userid){
		
		return passService.getAllPasssengers(userid);
	}
	

}
