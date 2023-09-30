package com.gas.api_supergas.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "LimpiezaTanques")
public class LimpiezaTanques {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;

    @Column(name = "Descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @Column(name = "TanqueID")
    private Long tanqueID;

    @ManyToOne
    @JoinColumn(name = "TanqueID", referencedColumnName = "ID", insertable = false, updatable = false)
    private TanquesAlmacenamiento tanque;

    public LimpiezaTanques(Long id, Date fecha, String descripcion, Long tanqueID) {
        this.id = id;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.tanqueID = tanqueID;
    }

    public LimpiezaTanques() {
    }
}





