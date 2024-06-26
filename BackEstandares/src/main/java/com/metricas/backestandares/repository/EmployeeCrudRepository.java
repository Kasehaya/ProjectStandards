package com.metricas.backestandares.repository;

import com.metricas.backestandares.model.Employee;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface EmployeeCrudRepository extends CrudRepository<Employee, Integer> {
// DAO
}
