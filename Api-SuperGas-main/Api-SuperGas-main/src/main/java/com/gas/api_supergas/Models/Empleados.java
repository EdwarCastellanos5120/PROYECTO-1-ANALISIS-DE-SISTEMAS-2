package com.gas.api_supergas.Models;


import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "empleados")
public class Empleados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Nombre")
    private String nombre;

    @Column(name = "Apellido")
    private String apellido;

    @Column(name = "DPI")
    private String dpi;

    @Column(name = "telefono")
    private String telefono;

    @Column(name = "correo")
    private String correo;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "salario")
    private float salario;

    @Column(name = "Cargo")
    private String cargo;

    @Column(name = "Departamento")
    private String departamento;

    public Empleados(Long id, String nombre, String apellido, String dpi, String telefono, String correo, String direccion, float salario, String cargo, String departamento) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dpi = dpi;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
        this.salario = salario;
        this.cargo = cargo;
        this.departamento = departamento;
    }

    public Empleados() {
    }
}
