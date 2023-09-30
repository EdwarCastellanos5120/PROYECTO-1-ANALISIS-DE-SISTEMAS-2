package com.gas.api_supergas.Controller;

import com.gas.api_supergas.Models.TanquesAlmacenamiento;
import com.gas.api_supergas.Servicios.ITanquesAlmacenamientoService;
import com.gas.api_supergas.Servicios.TanquesAlmacenamientoImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/tanquesAlmacenamiento")
@RequiredArgsConstructor
public class TanquesAlmacenamientoController {

    @Autowired
    private ITanquesAlmacenamientoService tanquesAlmacenamientoService;

    @GetMapping("/listar")
    public List<TanquesAlmacenamiento> listarTanquesAlmacenamiento(){
        return tanquesAlmacenamientoService.listarTanquesAlmacenamiento();
    }

    @PostMapping("/agregar")
    public TanquesAlmacenamiento agregarTanquesAlmacenamiento(@RequestBody TanquesAlmacenamiento tanquesAlmacenamiento){
        return tanquesAlmacenamientoService.guardarTanquesAlmacenamiento(tanquesAlmacenamiento);
    }

    @PutMapping("/actualizar/{id}")
    public TanquesAlmacenamiento actualizarTanquesAlmacenamiento(@RequestBody TanquesAlmacenamiento tanquesAlmacenamiento, @PathVariable Long id){
        tanquesAlmacenamiento.setId(id);
        return tanquesAlmacenamientoService.actualizarTanquesAlmacenamiento(tanquesAlmacenamiento);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarTanquesAlmacenamiento(@PathVariable Long id){
        tanquesAlmacenamientoService.eliminarTanquesAlmacenamiento(id);
    }

    @GetMapping("/buscar/{id}")
    public TanquesAlmacenamiento buscarTanquesAlmacenamiento(@PathVariable Long id){
        return tanquesAlmacenamientoService.buscarTanquesAlmacenamiento(id);
    }

    @GetMapping("/buscarPorDescripcion/{descripcion}")
    public TanquesAlmacenamiento buscarTanquesAlmacenamientoPorDescripcion(@PathVariable String descripcion){
        return tanquesAlmacenamientoService.buscarTanquesAlmacenamientoPorDescripcion(descripcion);
    }

    @GetMapping("/buscarPorCapacidadGalones/{capacidadGalones}")
    public TanquesAlmacenamiento buscarTanquesAlmacenamientoPorCapacidadGalones(@PathVariable Integer capacidadGalones){
        return tanquesAlmacenamientoService.buscarTanquesAlmacenamientoPorCapacidadGalones(capacidadGalones);
    }
}
