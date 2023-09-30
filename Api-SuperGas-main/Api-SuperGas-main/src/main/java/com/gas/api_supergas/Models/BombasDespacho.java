package com.gas.api_supergas.Models;

import jakarta.persistence.EntityListeners;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@Table(name = "BombasDespacho")
public class BombasDespacho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Nombre", length = 255)
    private String nombre;

    @Column(name = "Ubicacion", length = 255)
    private String ubicacion;

    @Column(name = "TanqueAlmacenamientoID")
    private Long tanqueAlmacenamientoID;

    @ManyToOne
    @JoinColumn(name = "TanqueAlmacenamientoID", referencedColumnName = "ID", insertable = false, updatable = false)
    private TanquesAlmacenamiento tanqueAlmacenamiento;

    public BombasDespacho(Long id, String nombre, String ubicacion, Long tanqueAlmacenamientoID) {
        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tanqueAlmacenamientoID = tanqueAlmacenamientoID;
    }

    public BombasDespacho() {
    }
}