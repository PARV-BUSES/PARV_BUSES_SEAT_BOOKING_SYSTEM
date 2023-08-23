package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GetBusDto;
import com.app.dto.SendBusDto;
import com.app.entities.BusDetails;
import com.app.service.BusService;

@RestController
@RequestMapping("/bus")
public class BusController {
	
	@Autowired
	private BusService busService;
	
	@PostMapping("/addbus/{routeid}")
	public ResponseEntity<?> addBus(@RequestBody BusDetails abd,@PathVariable long routeid){
		
		System.out.println(abd.toString());
		return ResponseEntity.ok(busService.addBus(abd,routeid));
	}
	
	@DeleteMapping("/removebus/{busNo}")
	public ResponseEntity<?> removeBus(@PathVariable int busNo){
		
		return ResponseEntity.ok(busService.removeBus(busNo));
	}
	
	@PostMapping("/getbus")
	public List<SendBusDto> getBus(@RequestBody  GetBusDto gbd) {
//		System.out.println(gbd.toString());
		
		return busService.getBus(gbd);
	}
	
	
	

}
