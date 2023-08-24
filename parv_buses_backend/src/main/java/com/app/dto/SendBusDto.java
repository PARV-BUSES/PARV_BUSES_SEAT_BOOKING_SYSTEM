package com.app.dto;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SendBusDto {
	
	private int busno;
	private long id;
	private LocalTime time;
	private String from;
	private String to;
	private int cost;
	private int availableSeats;
	private String duration;
	

}
