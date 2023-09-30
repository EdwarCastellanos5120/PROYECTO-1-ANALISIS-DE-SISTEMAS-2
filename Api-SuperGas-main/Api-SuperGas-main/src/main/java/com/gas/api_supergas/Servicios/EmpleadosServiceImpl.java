package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Empleados;
import com.gas.api_supergas.Repository.EmpleadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadosServiceImpl implements IEmpleadosService {

    @Autowired
    private EmpleadosRepository empleadosRepository;

    @Override
    public List<Empleados> listarEmpleados() {
        return empleadosRepository.findAll();
    }

    @Override
    public Empleados crearEmpleado(Empleados empleado) {
        return empleadosRepository.save(empleado);
    }

    @Override
    public Empleados actualizarEmpleado(Empleados empleado) {
        return empleadosRepository.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Long id) {
        empleadosRepository.deleteById(id);

    }

    @Override
    public Optional<Empleados> buscarId(Long id) {
        return empleadosRepository.findById(id);
    }

    @Override
    public List<Empleados> buscarNombre(String nombre) {
        return empleadosRepository.findByNombre(nombre);
    }

    @Override
    public List<Empleados> buscarApellido(String apellido) {
        return empleadosRepository.findByApellido(apellido);
    }

    @Override
    public List<Empleados> buscarDepartamento(String departamento) {
        return empleadosRepository.findByDepartamento(departamento);
    }

    @Override
    public List<Empleados> buscarCargo(String cargo) {
        return empleadosRepository.findByCargo(cargo);
    }

    @Override
    public Optional<Empleados> buscarCorreo(String correo) {
       return empleadosRepository.findByCorreo(correo);
    }

    @Override
    public Optional<Empleados> buscarDpi(String dpi) {
       return empleadosRepository.findByDpi(dpi);
    }

    @Override
    public Optional<Empleados> buscarTelefono(String telefono) {
        return empleadosRepository.findByTelefono(telefono);
    }

    @Override
    public Optional<Empleados> buscarDireccion(String direccion) {
     return empleadosRepository.findByDireccion(direccion);
    }

    @Override
    public List<Empleados> buscarSalario(float salario) {
        return empleadosRepository.findBySalario(salario);
    }

    @Override
    public List<Empleados> buscarSalarioLessThan(float salario) {
       return  empleadosRepository.findBySalarioLessThan(salario);
    }

    @Override
    public List<Empleados> buscarSalarioGreaterThan(float salario) {
       return empleadosRepository.findBySalarioGreaterThan(salario);
    }


}
