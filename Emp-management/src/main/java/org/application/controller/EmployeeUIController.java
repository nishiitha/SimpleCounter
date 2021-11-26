package org.application.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EmployeeUIController {
	
	@GetMapping("/")
	public String DashBoard() {
		return "dashboard";
	}
	
	@GetMapping("/add")
	public String addEmployee() {
		return "addEmployee";
	}

}
