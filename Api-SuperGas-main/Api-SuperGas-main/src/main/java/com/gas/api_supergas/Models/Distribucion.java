package com.gas.api_supergas.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;


@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "Distribucion")
public class Distribucion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;

    @Column(name = "DestinoID")
    private Long destinoID;

    @Column(name = "CisternaID")
    private Long cisternaID;

    @Column(name = "TanqueAlmacenamientoID")
    private Long tanqueAlmacenamientoID;

    @ManyToOne
    @JoinColumn(name = "DestinoID", referencedColumnName = "ID", insertable = false, updatable = false)
    private Destinos destino;

    @ManyToOne
    @JoinColumn(name = "CisternaID", referencedColumnName = "ID", insertable = false, updatable = false)
    private Cisternas cisterna;

    @ManyToOne
    @JoinColumn(name = "TanqueAlmacenamientoID", referencedColumnName = "ID", insertable = false, updatable = false)
    private TanquesAlmacenamiento tanqueAlmacenamiento;

    public Distribucion(Long id, Date fecha, Long destinoID, Long cisternaID, Long tanqueAlmacenamientoID) {
        this.id = id;
        this.fecha = fecha;
        this.destinoID = destinoID;
        this.cisternaID = cisternaID;
        this.tanqueAlmacenamientoID = tanqueAlmacenamientoID;
    }

    public Distribucion() {
    }
}



