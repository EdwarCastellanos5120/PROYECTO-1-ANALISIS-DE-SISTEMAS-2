package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.TanquesAlmacenamiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TanquesAlmacenamientoRepository extends JpaRepository<TanquesAlmacenamiento, Long> {

    TanquesAlmacenamiento findByDescripcion(String descripcion);

    TanquesAlmacenamiento findByCapacidadGalones(Integer capacidadGalones);

}
