package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.IngresoEgresoGasolina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IngresoEgresoGasolinaRepository extends JpaRepository<IngresoEgresoGasolina, Long> {

    List<IngresoEgresoGasolina> findByFecha(Date fecha);

    List<IngresoEgresoGasolina> findByTipoTransaccion(String tipoTransaccion);

    List<IngresoEgresoGasolina> findByCantidadGalones(float cantidadGalones);

    List<IngresoEgresoGasolina> findByBombasDespachoID(Long bombasDespachoID);

    List<IngresoEgresoGasolina> findByCisternasID(Long cisternasID);


}
