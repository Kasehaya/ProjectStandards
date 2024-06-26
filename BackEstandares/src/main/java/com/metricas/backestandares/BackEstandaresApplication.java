package com.metricas.backestandares;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;
import com.metricas.backestandares.repository.EmployeeCrudRepository;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEstandaresApplication implements CommandLineRunner {

    @Autowired
    private EmployeeCrudRepository clientCrudRepository;

    public static void main(String[] args) {
        SpringApplication.run(BackEstandaresApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // clienteCrudRepositorio.deleteAll();
    }

}
