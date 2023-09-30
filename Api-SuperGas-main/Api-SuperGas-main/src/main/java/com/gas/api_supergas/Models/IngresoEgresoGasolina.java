package com.gas.api_supergas.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
@Table(name = "IngresoEgresoGasolina")
public class IngresoEgresoGasolina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;

    @Column(name = "TipoTransaccion")
    private String tipoTransaccion;

    @Column(name = "CantidadGalones")
    private float cantidadGalones;

    @Column(name = "BombasDespachoID")
    private Long bombasDespachoID;

    @ManyToOne
    @JoinColumn(name = "BombasDespachoID", referencedColumnName = "ID", insertable = false, updatable = false)
    private BombasDespacho bombasDespacho;

    @Column(name = "CisternasID")
    private Long cisternasID;

    @ManyToOne
    @JoinColumn(name = "CisternasID", referencedColumnName = "ID", insertable = false, updatable = false)
    private Cisternas cisternas;

    public IngresoEgresoGasolina(Long id, Date fecha, String tipoTransaccion, float cantidadGalones, Long bombasDespachoID, Long cisternasID) {
        this.id = id;
        this.fecha = fecha;
        this.tipoTransaccion = tipoTransaccion;
        this.cantidadGalones = cantidadGalones;
        this.bombasDespachoID = bombasDespachoID;
        this.cisternasID = cisternasID;
    }

    public IngresoEgresoGasolina() {
    }
}
