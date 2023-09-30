package com.gas.api_supergas.Controller;


import com.gas.api_supergas.Models.LimpiezaTanques;
import com.gas.api_supergas.Servicios.ILimpiezaTaquesService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping("api/limpiezaTanques")
@RequiredArgsConstructor
public class LimpiezaTanquesController {

    @Autowired
    private ILimpiezaTaquesService limpiezaTaquesService;

    @GetMapping("/listar")
    public List<LimpiezaTanques> listarLimpiezaTanques(){
        return limpiezaTaquesService.listarLimpiezaTanques();
    }

    @PostMapping("/agregar")
    public LimpiezaTanques agregarLimpiezaTanques(@RequestBody LimpiezaTanques limpiezaTanques){
        return limpiezaTaquesService.guardarLimpiezaTanques(limpiezaTanques);
    }

    @PutMapping("/actualizar/{id}")
    public LimpiezaTanques actualizarLimpiezaTanques(@RequestBody LimpiezaTanques limpiezaTanques, @PathVariable Long id){
        limpiezaTanques.setId(id);
        return limpiezaTaquesService.actualizarLimpiezaTanques(limpiezaTanques);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarLimpiezaTanques(@PathVariable Long id){
        limpiezaTaquesService.eliminarLimpiezaTanques(id);
    }

    @GetMapping("/buscar/{id}")
    public LimpiezaTanques buscarLimpiezaTanques(@PathVariable Long id){
        return limpiezaTaquesService.buscarLimpiezaTanques(id);
    }

    @GetMapping("/buscarDescripcion/{descripcion}")
    public LimpiezaTanques buscarLimpiezaTanquesDescripcion(@PathVariable String descripcion){
        return limpiezaTaquesService.buscarLimpiezaTanquesDescripcion(descripcion);
    }

    @GetMapping("/buscarFecha/{fechaStr}")
    public LimpiezaTanques buscarLimpiezaTanquesFecha(@PathVariable String fechaStr) {
        try {
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd-MM-yyyy");
            LocalDate fecha = LocalDate.parse(fechaStr, formato);
            java.sql.Date fechaSQL = java.sql.Date.valueOf(fecha);
            return limpiezaTaquesService.buscarLimpiezaTanquesFecha(fechaSQL);
        } catch (DateTimeParseException e) {
            return null;
        }
    }


    @GetMapping("/buscarTanqueID/{tanqueID}")
    public List<LimpiezaTanques> buscarLimpiezaTanquesTanqueID(@PathVariable Long tanqueID){
        return limpiezaTaquesService.buscarLimpiezaTanquesTanqueID(tanqueID);
    }

    @GetMapping("/buscarFechaEntre/{fechaInicioStr}/{fechaFinStr}")
    public List<LimpiezaTanques> buscarLimpiezaTanquesFechaEntre(@PathVariable String fechaInicioStr, @PathVariable String fechaFinStr) {
        try {
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd-MM-yyyy");
            LocalDate fechaInicio = LocalDate.parse(fechaInicioStr, formato);
            LocalDate fechaFin = LocalDate.parse(fechaFinStr, formato);
            java.sql.Date fechaInicioSQL = java.sql.Date.valueOf(fechaInicio);
            java.sql.Date fechaFinSQL = java.sql.Date.valueOf(fechaFin);
            return limpiezaTaquesService.buscarLimpiezaTanquesFechaEntre(fechaInicioSQL, fechaFinSQL);
        } catch (DateTimeParseException e) {
            return null;
        }
    }
}
