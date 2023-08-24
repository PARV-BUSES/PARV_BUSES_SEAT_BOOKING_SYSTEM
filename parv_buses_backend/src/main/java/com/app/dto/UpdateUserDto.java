package com.app.dto;

import java.util.List;

import com.app.entities.Passenger;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserDto {
	private long id;
	private String firstname;
	private String lastname;
	private String mobile;
	private String email;
	private int age;
	private String gender;

}
