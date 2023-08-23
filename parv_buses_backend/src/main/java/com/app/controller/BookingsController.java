package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.BookingsDao;
import com.app.dto.ApiResponse;
import com.app.dto.BookingsDto;
import com.app.entities.Bookings;
import com.app.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin("*")

public class BookingsController {
    @Autowired
    private BookingService bookingService;

    @PostMapping("/book")
    public ResponseEntity<?> createBookings(@RequestBody  BookingsDto booking) {
        ApiResponse createdBooking = bookingService.createBooking(booking);
        return new ResponseEntity<>(createdBooking, HttpStatus.CREATED);
    }
    
    @GetMapping("/getbooking/{userid}")
    public ResponseEntity<?> getAllBookings(@PathVariable long userid){
    	
    	return ResponseEntity.ok(bookingService.getAllBookings(userid));
    }
    
   
    @DeleteMapping("/cancelbooking/{bookingid}")
    public  ApiResponse cancelBooking(@PathVariable long bookingid)
    {
    	return bookingService.cancelBookings(bookingid);
    }
    
}
