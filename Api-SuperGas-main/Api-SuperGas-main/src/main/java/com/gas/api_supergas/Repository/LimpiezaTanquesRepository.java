package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.LimpiezaTanques;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface LimpiezaTanquesRepository extends JpaRepository<LimpiezaTanques, Long> {

    LimpiezaTanques findByDescripcion(String descripcion);

    LimpiezaTanques findByFecha(Date fecha);

    List<LimpiezaTanques> findByTanqueID(Long tanqueID);

    //Metodo para buscar entre dos fechas
    List<LimpiezaTanques> findByFechaBetween(Date fechaInicio, Date fechaFin);


}
