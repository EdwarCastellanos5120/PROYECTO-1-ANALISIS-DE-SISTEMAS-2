package com.gas.api_supergas.Repository;

import com.gas.api_supergas.Models.Empleados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface EmpleadosRepository  extends JpaRepository<Empleados,Long> {

    List<Empleados> findByNombre( @Param("nombre") String  nombre);

    List<Empleados> findByApellido( @Param("apellido") String  apellido);

    List<Empleados> findByDepartamento(String departamento);

    List<Empleados> findByCargo(String cargo);

    Optional<Empleados> findByCorreo(String correo);

    Optional<Empleados> findByDpi(String dpi);

    Optional<Empleados> findByTelefono(String telefono);

    Optional<Empleados> findByDireccion(String direccion);

    List<Empleados> findBySalario(float salario);

    List<Empleados> findBySalarioLessThan(float salario);

    List<Empleados> findBySalarioGreaterThan(float salario);








}
