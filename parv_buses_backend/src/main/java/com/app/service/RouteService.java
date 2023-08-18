package com.app.service;

import com.app.dto.AddRouteDto;
import com.app.dto.ApiResponse;

public interface RouteService {
	
	ApiResponse addRoute(AddRouteDto ard);

	boolean deleteRoute(long routeid);

}
