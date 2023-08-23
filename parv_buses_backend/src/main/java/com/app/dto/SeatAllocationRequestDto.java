package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SeatAllocationRequestDto {
	private int seatNo;
	private LocalDate dateOfJourney;
	private long passenegerId;
	private long bookingId;



}
