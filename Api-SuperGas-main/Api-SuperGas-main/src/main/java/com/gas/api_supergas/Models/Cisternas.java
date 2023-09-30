package com.gas.api_supergas.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "Cisternas")
public class Cisternas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TamanioGalones")
    private Integer tamanioGalones;

    @Column(name = "Descripcion", columnDefinition = "TEXT")
    private String descripcion;


    @Column(name = "Placa")
    private String placa;

    @Column(name = "EmpleadoID")
    private Long empleadoID;

    @ManyToOne
    @JoinColumn(name = "EmpleadoID", referencedColumnName = "ID",insertable=false, updatable=false)
    private Empleados empleados;

    public Cisternas(Long id, Integer tamanioGalones, String descripcion, String placa, Long empleadoID) {
        this.id = id;
        this.tamanioGalones = tamanioGalones;
        this.descripcion = descripcion;
        this.placa = placa;
        this.empleadoID = empleadoID;
    }

    public Cisternas() {
    }
}





