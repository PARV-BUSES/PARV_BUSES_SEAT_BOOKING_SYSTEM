package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.GetBusDto;
import com.app.dto.SendBusDto;
import com.app.entities.BusDetails;


public interface BusService {
	
	ApiResponse addBus(BusDetails abd,long routeid);
	
	ApiResponse removeBus(int busNo);
	
	List<SendBusDto> getBus(GetBusDto gbd);

}
