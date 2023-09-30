package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.Destinos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DestinosRepository extends JpaRepository<Destinos,Long> {

    List<Destinos> findByNombre(String nombre);

    List<Destinos> findByDireccion(String direccion);

    List<Destinos> findByDescripcion(String descripcion);



}
