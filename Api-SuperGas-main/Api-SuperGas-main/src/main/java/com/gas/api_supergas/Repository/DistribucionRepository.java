package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.Distribucion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface DistribucionRepository extends JpaRepository<Distribucion,Long> {

    List<Distribucion> findByDestinoID(Long destinoID);
    List<Distribucion> findByCisternaID(Long cisternaID);

    List<Distribucion> findByTanqueAlmacenamientoID(Long tanqueAlmacenamientoID);

    List<Distribucion> findByFecha(Date fecha);

    List<Distribucion> findByFechaBetween(Date fecha1, Date fecha2);


}
