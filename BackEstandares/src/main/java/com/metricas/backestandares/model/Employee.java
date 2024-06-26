package com.metricas.backestandares.model;

import java.io.Serializable;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@Entity
@Table(name = "employee")
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmployee;
    private String document;
    private String firstName;
    private String lastName;
    private String address;
    private String country;
    private String phone;
    private String region;

}
