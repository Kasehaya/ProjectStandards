package com.metricas.backestandares.service;


import java.util.Optional;


import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import com.metricas.backestandares.model.Employee;
import com.metricas.backestandares.repository.EmployeeCrudRepository;


@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    @InjectMocks
    private EmployeeService employeeService;

    @Mock
    private EmployeeCrudRepository employeeCrudRepository;

    @Test
    public void testGetEmployeeWhenExist() {
        int idEmployee = 1;
        Employee employee = new Employee();
        employee.setIdEmployee(idEmployee);
        when(employeeCrudRepository.findById(idEmployee)).thenReturn(Optional.of(employee));

        // Act
        Optional<Employee> c = employeeService.getEmployee(idEmployee);

        // Assert
        assertTrue(c.isPresent());
        assertEquals(idEmployee, c.get().getIdEmployee().longValue());
        verify(employeeCrudRepository, times(1)).findById(idEmployee);
    }


    @Test
    public void testGetEmployeeWhenNotExist() {
        int idEmployee = 1;
        when(employeeCrudRepository.findById(idEmployee)).thenReturn(Optional.empty());

        //Act
        Optional<Employee> c = employeeService.getEmployee(idEmployee);

        // Assert
        assertFalse(c.isPresent());
        verify(employeeCrudRepository, times(1)).findById(idEmployee);
    }


    @Test
    public void testSaveEmployeeWhenIdIsNull() {
        Employee employee = new Employee();
        employee.setIdEmployee(null);
        when(employeeCrudRepository.save(employee)).thenReturn(employee);

        // Act
        Employee saved = employeeService.saveEmployee(employee);

        // Assert
        assertNotNull(saved);
        verify(employeeCrudRepository, times(1)).save(employee);
    }

    @Test
    public void testSaveEmployeeWhenIdIsNotNullAndEmployeeDoesNotExist() {
        Employee employee = new Employee();
        employee.setIdEmployee(1);
        when(employeeCrudRepository.findById(1)).thenReturn(Optional.empty());
        when(employeeCrudRepository.save(employee)).thenReturn(employee);

        // Act
        Employee saved = employeeService.saveEmployee(employee);

        // Assert
        assertNotNull(saved);
        assertEquals(1, saved.getIdEmployee().longValue());
        verify(employeeCrudRepository, times(1)).findById(1);
        verify(employeeCrudRepository, times(1)).save(employee);
    }

    @Test
    public void testSavedEmployeeWhenIdIsNotNullAndEmployeeExist() {
        int idEmployee = 3;
        Employee employee = new Employee();
        employee.setIdEmployee(idEmployee);
        when(employeeCrudRepository.findById(idEmployee)).thenReturn(Optional.of(employee));

        //Act
        Employee saved = employeeService.saveEmployee(employee);

        // Assert
        assertNotNull(saved);
        assertEquals(idEmployee, saved.getIdEmployee().longValue());
        verify(employeeCrudRepository, times(1)).findById(idEmployee);
        verify(employeeCrudRepository, times(1)).save(employee);
    }

}
