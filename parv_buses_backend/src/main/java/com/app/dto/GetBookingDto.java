package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GetBookingDto {
	
	private long id;
	private int busNo;
	private String start;
	private String end;
	private String passengerName;
	private LocalDate date;

}
