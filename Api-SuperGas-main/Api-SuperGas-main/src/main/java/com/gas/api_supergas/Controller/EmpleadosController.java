package com.gas.api_supergas.Controller;


import com.gas.api_supergas.Models.Empleados;
import com.gas.api_supergas.Servicios.IEmpleadosService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/empleados")
@RequiredArgsConstructor
public class EmpleadosController {

    @Autowired
    private IEmpleadosService empleadosService;

    @GetMapping("/listar")
    public List<Empleados> listar() {
        return empleadosService.listarEmpleados();
    }

    @PostMapping("/agregar")
    public void agregar(@RequestBody Empleados empleados) {
        empleadosService.crearEmpleado(empleados);
    }

    @PutMapping("/actualizar/{id}")
    public void actualizar(@PathVariable Long id, @RequestBody Empleados empleados) {
        empleados.setId(id);
        empleadosService.actualizarEmpleado(empleados);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminar(@PathVariable Long id) {
        empleadosService.eliminarEmpleado(id);
    }

    @GetMapping("/buscarNombre/{nombre}")
    public List<Empleados> buscarNombre(@PathVariable String nombre) {
        return empleadosService.buscarNombre(nombre);
    }

    @GetMapping("/buscarApellido/{apellido}")
    public List<Empleados> buscarApellido(@PathVariable String apellido) {
        return empleadosService.buscarApellido(apellido);
    }

    @GetMapping("/buscarDepartamento/{departamento}")
    public List<Empleados> buscarDepartamento(@PathVariable String departamento) {
        return empleadosService.buscarDepartamento(departamento);
    }

    @GetMapping("/buscarCargo/{cargo}")
    public List<Empleados> buscarCargo(@PathVariable String cargo) {
        return empleadosService.buscarCargo(cargo);
    }

    @GetMapping("/buscarId/{id}")
    public Optional<Empleados> buscarId(@PathVariable Long id) {
        return empleadosService.buscarId(id);
    }

    @GetMapping("/buscarCorreo/{correo}")
    public Optional<Empleados> buscarCorreo(@PathVariable String correo) {
        return empleadosService.buscarCorreo(correo);
    }

    @GetMapping("/buscarDpi/{dpi}")
    public Optional<Empleados> buscarDpi(@PathVariable String dpi) {
        return empleadosService.buscarDpi(dpi);
    }

    @GetMapping("/buscarTelefono/{telefono}")
    public Optional<Empleados> buscarTelefono(@PathVariable String telefono) {
        return empleadosService.buscarTelefono(telefono);
    }

    @GetMapping("/buscarDireccion/{direccion}")
    public Optional<Empleados> buscarDireccion(@PathVariable String direccion) {
        return empleadosService.buscarDireccion(direccion);
    }

    @GetMapping("/buscarSalario/{salario}")
    public List<Empleados> buscarSalario(@PathVariable float salario) {
        return empleadosService.buscarSalario(salario);
    }

    @GetMapping("/buscarSalarioLessThan/{salario}")
    public List<Empleados> buscarSalarioLessThan(@PathVariable float salario) {
        return empleadosService.buscarSalarioLessThan(salario);
    }

    @GetMapping("/buscarSalarioGreaterThan/{salario}")
    public List<Empleados> buscarSalarioGreaterThan(@PathVariable float salario) {
        return empleadosService.buscarSalarioGreaterThan(salario);
    }


}
