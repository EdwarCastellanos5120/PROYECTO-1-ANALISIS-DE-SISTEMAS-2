package com.gas.api_supergas.Controller;

import com.gas.api_supergas.Models.*;
import com.gas.api_supergas.Repository.CisternasRepository;
import com.gas.api_supergas.Repository.DestinosRepository;
import com.gas.api_supergas.Repository.TanquesAlmacenamientoRepository;
import com.gas.api_supergas.Servicios.ICisternasService;
import com.gas.api_supergas.Servicios.IDistribucionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping("api/distribucion")
@RequiredArgsConstructor
public class DistribucionController {

    @Autowired
    private IDistribucionService distribucionService;

    @Autowired
    private CisternasRepository cisternasRepository;

    @Autowired
    private DestinosRepository destinosRepository;

    @Autowired
    private TanquesAlmacenamientoRepository tanquesAlmacenamientoRepository;

    @GetMapping("/listar")
    public List<Distribucion> listar() {
       return distribucionService.listarDistribucion();
    }

    @PostMapping("/agregar")
    public Distribucion agregar(@RequestBody Distribucion distribucion) {
        Cisternas cisternas = cisternasRepository.findById(distribucion.getCisternaID())
                .orElseThrow(() -> new IllegalArgumentException("Cisterna no encontrada con ID: " + distribucion.getCisternaID()));
        distribucion.setCisterna(cisternas);
        Destinos destino = destinosRepository.findById(distribucion.getDestinoID())
                .orElseThrow(() -> new IllegalArgumentException("Destino no encontrado con ID: " + distribucion.getDestinoID()));
        distribucion.setDestino(destino);
        TanquesAlmacenamiento tanqueAlmacenamiento = tanquesAlmacenamientoRepository.findById(distribucion.getTanqueAlmacenamientoID())
                .orElseThrow(() -> new IllegalArgumentException("Tanque de almacenamiento no encontrado con ID: " + distribucion.getTanqueAlmacenamientoID()));
        distribucion.setTanqueAlmacenamiento(tanqueAlmacenamiento);
        return distribucionService.guardarDistribucion(distribucion);
    }

    @PutMapping("/actualizar/{id}")
    public Distribucion actualizar(@RequestBody Distribucion distribucion, @PathVariable Long id) {
        Distribucion distribucionExistente = distribucionService.buscarDistribucion(id);

        if (distribucionExistente == null) {
            throw new IllegalArgumentException("Distribucion no encontrada con ID: " + id);
        }
        Cisternas cisternas = cisternasRepository.findById(distribucion.getCisternaID())
                .orElseThrow(() -> new IllegalArgumentException("Cisterna no encontrada con ID: " + distribucion.getCisternaID()));
        distribucion.setCisterna(cisternas);
        Destinos destino = destinosRepository.findById(distribucion.getDestinoID())
                .orElseThrow(() -> new IllegalArgumentException("Destino no encontrado con ID: " + distribucion.getDestinoID()));
        distribucion.setDestino(destino);
        TanquesAlmacenamiento tanqueAlmacenamiento = tanquesAlmacenamientoRepository.findById(distribucion.getTanqueAlmacenamientoID())
                .orElseThrow(() -> new IllegalArgumentException("Tanque de almacenamiento no encontrado con ID: " + distribucion.getTanqueAlmacenamientoID()));
        distribucion.setTanqueAlmacenamiento(tanqueAlmacenamiento);
        distribucion.setId(id);
        return distribucionService.actualizarDistribucion(distribucion);
    }


    @DeleteMapping("/eliminar/{id}")
    public void eliminar(@PathVariable Long id) {
        distribucionService.eliminarDistribucion(id);
    }

    @GetMapping("/buscar/{id}")
    public Distribucion buscar(@PathVariable Long id) {
        return distribucionService.buscarDistribucion(id);
    }

    @GetMapping("/buscarPorDestino/{destinoID}")
    public List<Distribucion> buscarPorDestino(@PathVariable Long destinoID) {
        return distribucionService.buscarDistribucionPorDestino(destinoID);
    }

    @GetMapping("/buscarPorCisterna/{cisternaID}")
    public List<Distribucion> buscarPorCisterna(@PathVariable Long cisternaID) {
        return distribucionService.buscarDistribucionPorCisterna(cisternaID);
    }

    @GetMapping("/buscarPorTanqueAlmacenamiento/{tanqueAlmacenamientoID}")
    public List<Distribucion> buscarPorTanqueAlmacenamiento(@PathVariable Long tanqueAlmacenamientoID) {
        return distribucionService.buscarDistribucionPorTanqueAlmacenamiento(tanqueAlmacenamientoID);
    }

    @GetMapping("/buscarPorFecha/{fechaString}")
    public List<Distribucion> buscarLimpiezaTanquesFecha(@PathVariable String fechaString) {
        try {
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd-MM-yyyy");
            LocalDate fecha = LocalDate.parse(fechaString, formato);
            java.sql.Date fechaSQL = java.sql.Date.valueOf(fecha);
            return distribucionService.buscarDistribucionPorFecha(fechaSQL);
        } catch (DateTimeParseException e) {
            return null;
        }
    }


    @GetMapping("/buscarFechaEntre/{fechaInicioStr}/{fechaFinStr}")
        public List<Distribucion> buscarLimpiezaTanquesFechaEntre(@PathVariable String fechaInicioStr, @PathVariable String fechaFinStr) {
        try {
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd-MM-yyyy");
            LocalDate fechaInicio = LocalDate.parse(fechaInicioStr, formato);
            LocalDate fechaFin = LocalDate.parse(fechaFinStr, formato);
            java.sql.Date fechaInicioSQL = java.sql.Date.valueOf(fechaInicio);
            java.sql.Date fechaFinSQL = java.sql.Date.valueOf(fechaFin);
            return distribucionService.buscarDistribucionPorFechaEntre(fechaInicioSQL, fechaFinSQL);
        } catch (DateTimeParseException e) {
            return null;
        }
    }
}
