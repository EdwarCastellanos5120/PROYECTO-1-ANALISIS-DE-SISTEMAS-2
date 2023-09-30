package com.gas.api_supergas.Controller;

import com.gas.api_supergas.Models.Destinos;
import com.gas.api_supergas.Servicios.IDestinosService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/destinos")
@RequiredArgsConstructor
public class DestinosController {

    @Autowired
    private IDestinosService destinosService;

    @GetMapping("/listar")
    public List<Destinos> listar() {
       return destinosService.listarDestinos();
    }

    @PostMapping("/agregar")
    public Destinos agregar(@RequestBody Destinos destino) {
        return destinosService.guardarDestino(destino);
    }

    @PutMapping("/actualizar/{id}")
    public Destinos actualizar(@PathVariable Long id, @RequestBody Destinos destino) {
        destino.setId(id);
        return destinosService.actualizarDestino(destino);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminar(@PathVariable Long id) {
        destinosService.eliminarDestino(id);
    }

    @GetMapping("/buscar/{id}")
    public Destinos buscar(@PathVariable Long id) {
        return destinosService.buscarDestino(id);
    }

    @GetMapping("/buscarNombre/{nombre}")
    public List<Destinos> buscarNombre(@PathVariable String nombre) {
        return destinosService.buscarNombre(nombre);
    }

    @GetMapping("/buscarDireccion/{direccion}")
    public List<Destinos> buscarDireccion(@PathVariable String direccion) {
        return destinosService.buscarDireccion(direccion);
    }

    @GetMapping("/buscarDescripcion/{descripcion}")
    public List<Destinos> buscarDescripcion(@PathVariable String descripcion) {
        return destinosService.buscarDescripcion(descripcion);
    }

}
