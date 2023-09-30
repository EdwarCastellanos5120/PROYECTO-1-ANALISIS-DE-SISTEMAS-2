package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Empleados;

import java.util.List;
import java.util.Optional;

public interface IEmpleadosService {

    List<Empleados> listarEmpleados();

    Empleados crearEmpleado(Empleados empleado);

    Empleados actualizarEmpleado(Empleados empleado);

    void eliminarEmpleado(Long id);

    Optional<Empleados> buscarId(Long id);
    List<Empleados> buscarNombre(String nombre);

    List<Empleados> buscarApellido(String apellido);

    List<Empleados> buscarDepartamento(String departamento);

    List<Empleados> buscarCargo(String cargo);

    Optional<Empleados> buscarCorreo(String correo);

    Optional<Empleados> buscarDpi(String dpi);

    Optional<Empleados> buscarTelefono(String telefono);

    Optional<Empleados> buscarDireccion(String direccion);

    List<Empleados> buscarSalario(float salario);

    List<Empleados> buscarSalarioLessThan(float salario);

    List<Empleados> buscarSalarioGreaterThan(float salario);






}
