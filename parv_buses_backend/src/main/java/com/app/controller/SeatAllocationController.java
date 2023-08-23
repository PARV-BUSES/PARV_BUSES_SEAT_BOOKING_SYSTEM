package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.SeatAllocationRequestDto;
import com.app.service.SeatAllocationService;

//import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/seats")
@CrossOrigin("*")

public class SeatAllocationController {
	
	@Autowired
	private SeatAllocationService seatAllocationService;
	
	@PostMapping("/allocation")
	private ApiResponse seatAlloacte(@RequestBody SeatAllocationRequestDto seat)
	{
		System.out.println(seat.toString());
		return seatAllocationService.allocateSeat(seat);
	}

}
