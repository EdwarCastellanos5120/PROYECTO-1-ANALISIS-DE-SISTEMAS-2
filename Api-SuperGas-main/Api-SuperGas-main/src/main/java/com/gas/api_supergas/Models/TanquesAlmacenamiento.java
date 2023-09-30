package com.gas.api_supergas.Models;


import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "TanquesAlmacenamiento")
public class TanquesAlmacenamiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "CapacidadGalones")
    private Integer capacidadGalones;

    @Column(name = "Descripcion", columnDefinition = "TEXT")
    private String descripcion;

    public TanquesAlmacenamiento(Long id, Integer capacidadGalones, String descripcion) {
        this.id = id;
        this.capacidadGalones = capacidadGalones;
        this.descripcion = descripcion;
    }

    public TanquesAlmacenamiento() {
    }
}






