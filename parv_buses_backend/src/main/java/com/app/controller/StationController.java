package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GetStationsDto;
import com.app.entities.BusDetails;
import com.app.entities.Station;
import com.app.service.StationService;

@RestController
@RequestMapping("/station")
public class StationController {

	@Autowired
	private StationService stationService;
	@PostMapping("/addstation")
	public ResponseEntity<?> addStation(@Valid @RequestBody Station station){
		
		return ResponseEntity.ok(stationService.addStation(station));
	}
	
	@GetMapping("/getstations")
	public List<GetStationsDto> getStations(){
		return stationService.getStations();
	}
	
}
