package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.Cisternas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CisternasRepository extends JpaRepository<Cisternas,Long>
{
    Cisternas findByPlaca(String placa);

    List<Cisternas> findByDescripcion(String descripcion);

    List<Cisternas> findByTamanioGalones(Integer tamanioGalones);

    List<Cisternas> findByEmpleadoID(Long empleadoID);

    List<Cisternas> findByEmpleadoIDIsNull();

    List<Cisternas> findByEmpleadoIDIsNotNull();


}
