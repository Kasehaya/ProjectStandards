package com.metricas.backestandares.model;


import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {

    String documentId;
    String username;
    String password;
    String firstName;
    String lastName;
    String country;

}
