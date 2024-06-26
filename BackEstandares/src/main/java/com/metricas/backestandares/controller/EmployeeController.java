package com.metricas.backestandares.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import com.metricas.backestandares.model.Employee;
import org.springframework.web.bind.annotation.*;
import com.metricas.backestandares.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/all")
    public List<Employee> getAll() {
        return employeeService.getEmployees();
    }

    @GetMapping("/id/{idEmployee}")
    public Optional<Employee> getEmployee(@PathVariable("idEmployee") int idEmployee) {
        System.out.println(idEmployee);
        return employeeService.getEmployee(idEmployee);
    }

    @PostMapping("/nuevoEmployee")
    @ResponseStatus(HttpStatus.CREATED)
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @PostMapping("/actualizarEmployee")
    @ResponseStatus(HttpStatus.CREATED)
    public Employee updateEmployee(@RequestBody Employee employee) {
        return employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/delete/{idEmployee}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteEmployee(@PathVariable("idEmployee") int idEmployee) {
        return employeeService.deleteEmployee(idEmployee);
    }

}
