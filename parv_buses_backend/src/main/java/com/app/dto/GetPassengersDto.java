package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GetPassengersDto {
	
	private long id;
	private String firstName;
	private String lastName;
	private String gender;
	private int age;

}
