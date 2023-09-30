package com.gas.api_supergas.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@Table(name = "Destinos")
public class Destinos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Nombre", length = 255)
    private String nombre;

    @Column(name = "Direccion", length = 255)
    private String direccion;

    @Column(name = "Descripcion", columnDefinition = "TEXT")
    private String descripcion;

    public Destinos(Long id, String nombre, String direccion, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.descripcion = descripcion;
    }

    public Destinos() {
    }
}





