package com.ihub.www.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column private String firstName;
    @Column private String lastName;
    @Column private String email;
}
