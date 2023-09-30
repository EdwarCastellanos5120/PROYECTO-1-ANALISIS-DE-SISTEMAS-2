package com.gas.api_supergas.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "promociones")
public class Promociones {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "nombre_oferta")
    private String nombreOferta;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "fecha_inicio")
    @Temporal(TemporalType.DATE)
    private Date fechaInicio;

    @Column(name = "fecha_fin")
    @Temporal(TemporalType.DATE)
    private Date fechaFin;

    @Column(name = "precio")
    private float precio;

    @Column(name = "descuento")
    private float descuento;

    @Column(name = "cantidad_disponible")
    private Integer cantidadDisponible;

    @Column(name = "tipo_oferta")
    private String tipoOferta;

    // Getters and setters

    public Promociones(Long id, String nombreOferta, String descripcion, Date fechaInicio, Date fechaFin, float precio, float descuento, Integer cantidadDisponible, String tipoOferta) {
        this.id = id;
        this.nombreOferta = nombreOferta;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.precio = precio;
        this.descuento = descuento;
        this.cantidadDisponible = cantidadDisponible;
        this.tipoOferta = tipoOferta;
    }

    public Promociones() {
    }
}
