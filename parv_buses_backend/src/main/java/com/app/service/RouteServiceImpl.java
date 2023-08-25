package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.RouteDao;
import com.app.dao.StationDao;
import com.app.dto.AddRouteDto;
import com.app.dto.ApiResponse;
import com.app.entities.Routes;
import com.app.entities.Station;

@Service
@Transactional
public class RouteServiceImpl implements RouteService {

	@Autowired
	private StationDao stationDao;
	
	@Autowired
	private RouteDao routeDao;

	@Override
	public ApiResponse addRoute(AddRouteDto ard) {
		
		Station from = stationDao.findById(ard.getStationIdFrom()).orElseThrow(()->new RuntimeException("Station not found."));
		Station to = stationDao.findById(ard.getStationIdTo()).orElseThrow(()->new RuntimeException("Station not found."));
		Routes r = new Routes();
		r.setStationIdBoarding(from);
		r.setStationIdDestination(to);
		r.setDistance(ard.getDistance());
		
		Routes r1 = routeDao.save(r);
		return new ApiResponse("Route Added");
	}

	@Override
	public ApiResponse deleteRoute(long routeid) {
		routeDao.deleteById(routeid);
		return new ApiResponse("Route Deleted Successfully");
	}

}
