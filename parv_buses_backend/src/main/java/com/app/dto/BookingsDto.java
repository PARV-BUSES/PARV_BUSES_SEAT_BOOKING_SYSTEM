package com.app.dto;
import java.time.LocalDate;

import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class BookingsDto {

	
	private int busNo;
	private int start;
	private int end ;
	private long passengerId;
	private long routesId;
	private long userId;
	private LocalDate date;
	
	
	


}
