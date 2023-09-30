package com.gas.api_supergas.Controller;

import com.gas.api_supergas.Models.Cisternas;
import com.gas.api_supergas.Models.Empleados;
import com.gas.api_supergas.Repository.EmpleadosRepository;
import com.gas.api_supergas.Servicios.ICisternasService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cisternas")
@RequiredArgsConstructor
public class CisternasController {

    @Autowired
    private ICisternasService cisternasService;

    @Autowired
    private EmpleadosRepository empleadosRepository;

    @GetMapping("/listar")
    public List<Cisternas> listar() {
       return cisternasService.listarCisternas();
    }

    @PostMapping("/agregar")
    public Cisternas agregar(@RequestBody Cisternas cisternas) {
        Empleados empleado = empleadosRepository.findById(cisternas.getEmpleadoID())
                .orElseThrow(() -> new IllegalArgumentException("Empleado no encontrado con ID: " + cisternas.getEmpleadoID()));
        cisternas.setEmpleados(empleado);
        return cisternasService.crearCisterna(cisternas);
    }

    @PutMapping("/actualizar/{id}")
    public Cisternas actualizar(@RequestBody Cisternas cisternas, @PathVariable Long id) {
        Cisternas cisternaExistente = cisternasService.obtenerCisternaPorId(id);

        if (cisternaExistente == null) {
            throw new IllegalArgumentException("Cisterna no encontrada con ID: " + id);
        }
        Empleados empleado = empleadosRepository.findById(cisternas.getEmpleadoID())
                .orElseThrow(() -> new IllegalArgumentException("Empleado no encontrado con ID: " + cisternas.getEmpleadoID()));
        cisternas.setEmpleados(empleado);
        cisternas.setId(id);
        return cisternasService.actualizarCisterna(cisternas);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminar(@PathVariable Long id) {
        cisternasService.eliminarCisterna(id);
    }

    @GetMapping("/buscar/{id}")
    public Cisternas buscar(@PathVariable Long id) {
        return cisternasService.obtenerCisternaPorId(id);
    }

    @GetMapping("/buscarPlaca/{placa}")
    public Cisternas buscarPlaca(@PathVariable String placa) {
        return cisternasService.obtenerCisternaPorPlaca(placa);
    }

    @GetMapping("/buscarDescripcion/{descripcion}")
    public List<Cisternas> buscarDescripcion(@PathVariable String descripcion) {
        return cisternasService.obtenerCisternaPorDescripcion(descripcion);
    }

    @GetMapping("/buscarTamanioGalones/{tamanioGalones}")
    public List<Cisternas> buscarTamanioGalones(@PathVariable Integer tamanioGalones) {
        return cisternasService.obtenerCisternaPorTamanioGalones(tamanioGalones);
    }

    @GetMapping("/buscarEmpleadoID/{empleadoID}")
    public List<Cisternas> buscarEmpleadoID(@PathVariable Long empleadoID) {
        return cisternasService.obtenerCisternaPorEmpleadoID(empleadoID);
    }

    @GetMapping("/buscarEmpleadoIDIsNull")
    public List<Cisternas> buscarEmpleadoIDIsNull() {
        return cisternasService.obtenerCisternaPorEmpleadoIDIsNull();
    }

    @GetMapping("/buscarEmpleadoIDIsNotNull")
    public List<Cisternas> buscarEmpleadoIDIsNotNull() {
        return cisternasService.obtenerCisternaPorEmpleadoIDIsNotNull();
    }

}
