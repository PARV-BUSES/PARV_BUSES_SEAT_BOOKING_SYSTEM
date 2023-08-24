package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.RouteMatcher.Route;

import com.app.dao.BusDao;
import com.app.dao.RouteDao;
import com.app.dao.SeatAvailabilityDao;
import com.app.dao.StationDao;
import com.app.dto.ApiResponse;
import com.app.dto.GetBusDto;
import com.app.dto.SendBusDto;
import com.app.entities.BusDetails;
import com.app.entities.Routes;
import com.app.entities.SeatAvailability;
import com.app.entities.Station;

@Service
@Transactional
public class BusSeviceImpl implements BusService {
	
	@Autowired
	private BusDao busDao;
	
	@Autowired
	private RouteDao routeDao;
	
	@Autowired
	private StationDao stationDao;
	
	
	
	
	@Autowired
	private SeatAvailabilityDao seatAvailabilityDao;
	
	
	
	@Override
	public ApiResponse addBus(BusDetails abd,long routeid) {
		Routes rv= routeDao.findById(routeid).orElseThrow(()->new RuntimeException("Route not found."));
		rv.addBus(abd);
		BusDetails b=busDao.save(abd);
		SeatAvailability s=new SeatAvailability();
		s.setAvailable_seats(30);
		s.setDate(abd.getDate());
		s.setBusDetails(b);
		seatAvailabilityDao.save(s);
		return new ApiResponse("bus added.");
	}

	@Override
	public ApiResponse removeBus(int busNo) {
		BusDetails bd = busDao.findByBusNo(busNo).orElseThrow(()->new RuntimeException("bus details not found."));
		busDao.delete(bd);
		return new ApiResponse("bus details deleted");
	}

	@Override
	public List<SendBusDto> getBus(GetBusDto g) {
		
		List<Routes> list = routeDao.findAll();
		
		Station from = stationDao.findById(g.getFrom()).orElseThrow(()->new RuntimeException("Start Station not found."));
		
		Station to = stationDao.findById(g.getTo()).orElseThrow(()->new RuntimeException("Destination Station not found."));
		
//		list.stream().filter(e -> e.getStation_id_boarding() == from && 
//				e.getStation_id_destination() == to ).forEach(e->System.out.println(e.getDistance()*2));
		
		List<Routes> l= list.stream().filter(e -> e.getStation_id_boarding() == from && 
				e.getStation_id_destination() == to ).collect(Collectors.toList());
		
		List<BusDetails> buses = busDao.findByRoute(l.get(0));
		
		List<SendBusDto> sendBusDtoList = new ArrayList<SendBusDto>();
		
		for (BusDetails bus : buses) {
			int cost = (int)l.get(0).getDistance()*2;
			double d = (double)l.get(0).getDistance()*1.5;
			String duration;
			if(d>=60) {
				duration = String.valueOf(d/60)+"hr";
			}
			else {
				duration = String.valueOf(d)+"min";
			}
			
			String from1 = from.getStation_name();
			String to1 = to.getStation_name();
			SeatAvailability seat = seatAvailabilityDao.findByBusDetails(bus);
			int seats = seat.getAvailable_seats();
			SendBusDto sendbusobj = new SendBusDto(bus.getDate(),bus.getBusNo(),bus.getId(),bus.getTime(),from1, to1, cost, seats,duration);
			sendBusDtoList.add(sendbusobj);
		}
		
		System.out.println(sendBusDtoList.get(0).getCost());
		
     	System.out.println("In get bus service");
//		System.out.println(buses.get(0).getBusNo());
//		Routes s = routeDao.findByBoardingAndDestination(g.getFrom(), g.getTo());
//		System.out.println(r.toString());
		
		return sendBusDtoList;
	}

}
