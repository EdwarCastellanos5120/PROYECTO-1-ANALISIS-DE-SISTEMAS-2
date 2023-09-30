package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.Promociones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PromocionesRepository  extends JpaRepository<Promociones, Long>{

    //Metodo para buscar descripcion
    List<Promociones> findByDescripcion(String descripcion);
}
