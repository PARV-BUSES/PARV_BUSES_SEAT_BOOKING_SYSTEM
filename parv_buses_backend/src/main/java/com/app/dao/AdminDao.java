package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Admin;
import com.app.entities.User;

public interface AdminDao extends JpaRepository<Admin, Long> {

	Optional<Admin> findByEmailAndPassword(String email,String password);

}
