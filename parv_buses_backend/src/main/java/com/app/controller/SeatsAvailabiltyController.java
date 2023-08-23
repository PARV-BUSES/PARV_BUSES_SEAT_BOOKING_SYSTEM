package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SeatAvailabilityDto;
import com.app.entities.SeatAvailability;
import com.app.service.SeatAvailabilityService;

@RestController
@RequestMapping("/seats")
public class SeatsAvailabiltyController {
	@Autowired
	private SeatAvailabilityService seatAvailability;
	@PostMapping("/seatbooking/{seatnos}")
	public ResponseEntity<?> seatAvailable(@RequestBody SeatAvailabilityDto seats,@PathVariable int seatnos)
	{
	   return ResponseEntity.ok(seatAvailability.deductseats(seats,seatnos));	
	}

}
