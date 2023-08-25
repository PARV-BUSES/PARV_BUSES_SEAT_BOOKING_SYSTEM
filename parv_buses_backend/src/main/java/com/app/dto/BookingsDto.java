package com.app.dto;
import java.time.LocalDate;
import java.time.LocalTime;

import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class BookingsDto {

	
	private int busNo;
	private String start;
	private String end ;
	private long passengerId;
	private long routesId;
	private long userId;
	private LocalDate date;
	private int seatNo;
	
	
	


}
