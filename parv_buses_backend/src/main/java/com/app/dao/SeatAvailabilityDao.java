package com.app.dao;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BusDetails;
import com.app.entities.SeatAvailability;

public interface SeatAvailabilityDao extends JpaRepository<SeatAvailability, Long>{
	
	SeatAvailability findByBusDetails(BusDetails b);
	SeatAvailability findByBusDetailsAndDate(BusDetails b,LocalDate d);


}
