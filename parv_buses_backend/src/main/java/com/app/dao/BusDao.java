package com.app.dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BusDetails;
import com.app.entities.Routes;

public interface BusDao extends JpaRepository<BusDetails, Long>{
	
	Optional<BusDetails> findByBusNo(int busNo);
	
	List<BusDetails> findByRoute(Routes r);
	Optional<BusDetails> findByBusNoAndDate(int busNo,LocalDate date);

}
