package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.SeatAvailabilityDto;
import com.app.entities.SeatAvailability;

public interface SeatAvailabilityService {

	ApiResponse deductseats(SeatAvailabilityDto seats);

}
