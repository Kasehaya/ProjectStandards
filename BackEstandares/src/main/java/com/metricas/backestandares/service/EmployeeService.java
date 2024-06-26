package com.metricas.backestandares.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.metricas.backestandares.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import com.metricas.backestandares.repository.EmployeeCrudRepository;


@Service
public class EmployeeService {

    @Autowired
    private EmployeeCrudRepository employeeCrudRepository;

    public Optional<Employee> getEmployee(int idEmployee) {
        return employeeCrudRepository.findById(idEmployee);
    }

    public List<Employee> getEmployees() {
        return (List<Employee>) employeeCrudRepository.findAll();
    }

    public Employee saveEmployee(Employee employee) {
        if (employee.getIdEmployee() == null) {
            return employeeCrudRepository.save(employee);
        } else {
            Optional<Employee> tempEmployee = employeeCrudRepository.findById(employee.getIdEmployee());
            if (tempEmployee.isEmpty()) {
                return employeeCrudRepository.save(employee);
            } else {
                return employee;
            }
        }
    }

    public Employee updateEmployee(Employee employee) {
        if (employee.getIdEmployee() != null) {
            Optional<Employee> c = employeeCrudRepository.findById(employee.getIdEmployee());
            if (!c.isEmpty()) {
                if (employee.getDocument() != null) {
                    c.get().setDocument(employee.getDocument());
                }
                if (employee.getFirstName() != null) {
                    c.get().setFirstName(employee.getFirstName());
                }
                if (employee.getLastName() != null) {
                    c.get().setLastName(employee.getLastName());
                }
                if (employee.getAddress() != null) {
                    c.get().setAddress(employee.getAddress());
                }
                if (employee.getCountry() != null) {
                    c.get().setCountry(employee.getCountry());
                }
                if (employee.getPhone() != null) {
                    c.get().setPhone(employee.getPhone());
                }
                if (employee.getRegion() != null) {
                    c.get().setRegion(employee.getRegion());
                }
                employeeCrudRepository.save(c.get());
                return c.get();
            } else {
                return employee;
            }
        } else {
            return employee;
        }
    }

    public boolean deleteEmployee(int idEmployee) {
        Boolean aBoolean = getEmployee(idEmployee).map(employee -> {
            employeeCrudRepository.delete(employee);
            return true;
        }).orElse(false);
        return aBoolean;
    }

}
