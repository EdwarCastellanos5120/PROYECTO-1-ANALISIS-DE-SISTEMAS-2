package com.gas.api_supergas.Controller;

import com.gas.api_supergas.Models.BombasDespacho;
import com.gas.api_supergas.Servicios.IBombasDespachoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/bombasDespacho")
@RequiredArgsConstructor
public class BombasDespachoController {

    @Autowired
    private IBombasDespachoService bombasDespachoService;

    @GetMapping("/listar")
    public List<BombasDespacho> listarBombasDespacho(){
        return bombasDespachoService.listarBombasDespacho();
    }

    @PostMapping("/guardar")
    public BombasDespacho guardarBombasDespacho(@RequestBody BombasDespacho bombasDespacho){
        return bombasDespachoService.guardarBombasDespacho(bombasDespacho);
    }

    @PutMapping("/actualizar/{id}")
    public BombasDespacho actualizarBombasDespacho(@RequestBody BombasDespacho bombasDespacho, @PathVariable Long id){
        bombasDespacho.setId(id);
        return bombasDespachoService.actualizarBombasDespacho(bombasDespacho);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarBombasDespacho(@PathVariable Long id){
        bombasDespachoService.eliminarBombasDespacho(id);
    }

    @GetMapping("/buscar/{id}")
    public BombasDespacho buscarBombasDespacho(@PathVariable Long id){
        return bombasDespachoService.buscarBombasDespacho(id);
    }

    @GetMapping("/buscarNombre/{nombre}")
    public BombasDespacho buscarBombasDespachoNombre(@PathVariable String nombre){
        return bombasDespachoService.buscarBombasDespachoNombre(nombre);
    }

    @GetMapping("/buscarUbicacion/{ubicacion}")
    public List<BombasDespacho> buscarBombasDespachoUbicacion(@PathVariable String ubicacion){
        return bombasDespachoService.buscarBombasDespachoUbicacion(ubicacion);
    }

    @GetMapping("/buscarTanqueAlmacenamientoID/{tanqueAlmacenamientoID}")
    public List<BombasDespacho> buscarBombasDespachoTanqueAlmacenamientoID(@PathVariable Long tanqueAlmacenamientoID){
        return bombasDespachoService.buscarBombasDespachoTanqueAlmacenamientoID(tanqueAlmacenamientoID);
    }



}
