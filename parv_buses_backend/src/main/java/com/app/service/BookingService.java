package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.BookingsDto;
import com.app.dto.GetBookingDto;
import com.app.entities.Bookings;

public interface BookingService {
	
	public ApiResponse createBooking(BookingsDto booking);
	
	List<GetBookingDto> getAllBookings(long userid);
	public ApiResponse cancelBookings(long bookingid);

}
