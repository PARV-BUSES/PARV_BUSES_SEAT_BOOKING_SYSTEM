package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingsDao;
import com.app.dao.BusDao;
import com.app.dao.PassengerDao;
import com.app.dao.RouteDao;
import com.app.dao.SeatAllocationDao;
import com.app.dao.SeatAvailabilityDao;
import com.app.dao.StationDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.BookingsDto;
import com.app.dto.GetBookingDto;
import com.app.dto.SeatAllocationRequestDto;
import com.app.entities.Bookings;
import com.app.entities.BusDetails;
import com.app.entities.Passenger;
import com.app.entities.Routes;
import com.app.entities.SeatAllocation;
import com.app.entities.SeatAvailability;
import com.app.entities.Station;
import com.app.entities.User;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingsDao bookingDao;

	@Autowired
	PassengerDao passengerDao;
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	RouteDao routeDao;
	
	@Autowired
	private StationDao stationDao;
	
	@Autowired
	private BusDao busDao;
	
	@Autowired
	private SeatAvailabilityDao seatAvailabilityDao;
	@Autowired
	private SeatAllocationDao seatAllocationDao;
	@Override
	public ApiResponse createBooking(BookingsDto booking) {
		
	//	Bookings b = bookingDao.findById(booking.)
		
		Passenger p = passengerDao.findById(booking.getPassengerId()).
				orElseThrow(()->new RuntimeException("passenger not found"));
		
		User u = userDao.findById(booking.getUserId()).
				orElseThrow(()->new RuntimeException("User Not found"));
		
//		Routes r = routeDao.findById(booking.getRoutesId()).
//				orElseThrow(()->new RuntimeException("Route Not Found"));
		
//		System.out.println(booking.getSeatNo());
		
		
		
		Station start = stationDao.findByStationName(booking.getStart()).orElseThrow(()->new RuntimeException("start station not found."));
		Station end = stationDao.findByStationName(booking.getEnd()).orElseThrow(()->new RuntimeException("End station not found"));
		
		Routes r = routeDao.findByStationIdBoardingAndStationIdDestination(start, end).orElseThrow(()->new RuntimeException("Route not found"));
		
		
//		if (start.getId() >= Integer.MIN_VALUE && start.getId() <= Integer.MAX_VALUE) {
//		    int intValue = Integer.valueOf(String.valueOf(start.getId())); // Casting to int
//		}
		
		Bookings b = new Bookings();
		b.setDate(booking.getDate());
		b.setEnd(Integer.valueOf(String.valueOf(end.getId())));
		b.setStart(Integer.valueOf(String.valueOf(start.getId())));
		b.setBusNo(booking.getBusNo());
		b.setPassenger(p);
		p.addBooking(b);
		b.setUser(u);
		u.addBooking(b);
		b.setRoutes(r);
		r.addBooking(b);
		
		Bookings b1 = bookingDao.save(b);
//		System.out.println(b1.getId());
//		SeatAllocationImpl sai = new SeatAllocationImpl();
//		SeatAllocationRequestDto seatAllocationRequestDto = new SeatAllocationRequestDto(booking.getSeatNo(), booking.getDate(), p, b1);
//		sai.allocateSeat(seatAllocationRequestDto);
		
		SeatAllocation seat = new SeatAllocation(b1, booking.getSeatNo(), p, booking.getDate());
		//seat.setBooking(b1); //added
		seatAllocationDao.save(seat);
		
	    return new ApiResponse("Booking Succesful.");
	 		
}

	@Override
	public List<GetBookingDto> getAllBookings(long userid) throws RuntimeException{
		User u = userDao.findById(userid).orElseThrow(()->new RuntimeException("User Not Found"));
		List<Bookings> bookinglist = bookingDao.findByUser(u).orElseThrow(()->new RuntimeException("No Bookings found"));
		
		List<GetBookingDto> bookedDtolist = new ArrayList<GetBookingDto>();
		
		for (Bookings booking : bookinglist) {
			Station start = stationDao.findById((long)booking.getStart()).orElseThrow(()->new RuntimeException("Start Station not found."));
			Station end = stationDao.findById((long)booking.getEnd()).orElseThrow(()->new RuntimeException("End Station not found."));
			Passenger p = booking.getPassenger();
			SeatAllocation s=seatAllocationDao.findById(p.getId()).orElseThrow(()-> new RuntimeException("Seat not allocated"));
			
			GetBookingDto bookDto = new GetBookingDto(booking.getId(), s.getSeatNo(),p.getAge(),booking.getBusNo(), start.getStationName(),
					end.getStationName(), p.getFirstName()+" "+p.getLastName(),booking.getDate());
			
			bookedDtolist.add(bookDto);
		}
		return bookedDtolist;
	}

	@Override
	public ApiResponse cancelBookings(long bookingid) {
		Bookings b=bookingDao.findById(bookingid).orElseThrow(()-> new RuntimeException("Booking Not Found"));
		
		SeatAllocation seat = seatAllocationDao.findByBooking(b);
		if(seat != null) {
			seat.setBooking(null);
			seat.setPassenger(null);
			System.out.println(seat.getSeatNo());
			b.removeSeat(seat);
			seatAllocationDao.delete(seat);
			System.out.println(seat.getId());
		}
		
        BusDetails bus=busDao.findByBusNoAndDate(b.getBusNo(), b.getDate()).orElseThrow(()-> new RuntimeException("Bus Not Found"));
        System.out.println(bus.getId());
		SeatAvailability s=seatAvailabilityDao.findByBusDetailsAndDate(bus, b.getDate());
		System.out.println(s.getId());
		s.setAvailable_seats(s.getAvailable_seats()+1);
		b.setUser(null);
		b.setPassenger(null);
		b.setRoutes(null);
		bookingDao.delete(b);
		return new ApiResponse("Booking Cancel");
	}
}