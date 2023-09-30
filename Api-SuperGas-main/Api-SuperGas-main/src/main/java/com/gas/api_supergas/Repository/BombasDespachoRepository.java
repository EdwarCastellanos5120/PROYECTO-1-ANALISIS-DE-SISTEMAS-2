package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.BombasDespacho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BombasDespachoRepository extends JpaRepository<BombasDespacho, Long> {

    BombasDespacho findByNombre(String nombre);

    List<BombasDespacho> findByUbicacion(String ubicacion);

    List<BombasDespacho> findByTanqueAlmacenamientoID(Long tanqueAlmacenamientoID);
}
