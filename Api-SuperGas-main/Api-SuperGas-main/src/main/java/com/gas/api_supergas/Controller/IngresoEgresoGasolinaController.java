package com.gas.api_supergas.Controller;

import com.gas.api_supergas.Models.BombasDespacho;
import com.gas.api_supergas.Models.Cisternas;
import com.gas.api_supergas.Models.IngresoEgresoGasolina;
import com.gas.api_supergas.Repository.BombasDespachoRepository;
import com.gas.api_supergas.Repository.CisternasRepository;
import com.gas.api_supergas.Servicios.IIngresoEgresoGasolinaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping("api/ingresoEgresoGasolina")
@RequiredArgsConstructor
public class IngresoEgresoGasolinaController {

    @Autowired
    private IIngresoEgresoGasolinaService ingresoEgresoGasolinaService;

    @Autowired
    private CisternasRepository cisternasRepository;

    @Autowired
    private BombasDespachoRepository bombasDespachoRepository;

    @GetMapping("/listar")
    public List<IngresoEgresoGasolina> listarIngresoEgresoGasolina(){
        return ingresoEgresoGasolinaService.listarIngresoEgresoGasolina();
    }

    @PostMapping("/agregar")
    public IngresoEgresoGasolina agregarIngresoEgresoGasolina(@RequestBody IngresoEgresoGasolina ingresoEgresoGasolina){
        Cisternas cisternas = cisternasRepository.findById(ingresoEgresoGasolina.getCisternasID())
                .orElseThrow(() -> new IllegalArgumentException("Cisterna no encontrada con ID: " + ingresoEgresoGasolina.getCisternasID()));
        ingresoEgresoGasolina.setCisternas(cisternas);
        BombasDespacho bombasDespacho = bombasDespachoRepository.findById(ingresoEgresoGasolina.getBombasDespachoID())
                .orElseThrow(() -> new IllegalArgumentException("Bomba de despacho no encontrada con ID: " + ingresoEgresoGasolina.getBombasDespachoID()));
        ingresoEgresoGasolina.setBombasDespacho(bombasDespacho);
        return ingresoEgresoGasolinaService.guardarIngresoEgresoGasolina(ingresoEgresoGasolina);
    }

    @PutMapping("/actualizar/{id}")
    public IngresoEgresoGasolina actualizarIngresoEgresoGasolina(@RequestBody IngresoEgresoGasolina ingresoEgresoGasolina, @PathVariable Long id){
        IngresoEgresoGasolina ingresoEgresoGasolinaExistente = ingresoEgresoGasolinaService.buscarIngresoEgresoGasolina(id);

        if (ingresoEgresoGasolinaExistente == null) {
            throw new IllegalArgumentException("IngresoEgresoGasolina no encontrada con ID: " + id);
        }
        Cisternas cisternas = cisternasRepository.findById(ingresoEgresoGasolina.getCisternasID())
                .orElseThrow(() -> new IllegalArgumentException("Cisterna no encontrada con ID: " + ingresoEgresoGasolina.getCisternasID()));
        ingresoEgresoGasolina.setCisternas(cisternas);
        BombasDespacho bombasDespacho = bombasDespachoRepository.findById(ingresoEgresoGasolina.getBombasDespachoID())
                .orElseThrow(() -> new IllegalArgumentException("Bomba de despacho no encontrada con ID: " + ingresoEgresoGasolina.getBombasDespachoID()));
        ingresoEgresoGasolina.setBombasDespacho(bombasDespacho);
        ingresoEgresoGasolina.setId(id);
        return ingresoEgresoGasolinaService.actualizarIngresoEgresoGasolina(ingresoEgresoGasolina);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarIngresoEgresoGasolina(@PathVariable Long id){
        ingresoEgresoGasolinaService.eliminarIngresoEgresoGasolina(id);
    }

    @GetMapping("/buscarPorID/{id}")
    public IngresoEgresoGasolina buscarIngresoEgresoGasolinaPorID(@PathVariable Long id){
        return ingresoEgresoGasolinaService.buscarIngresoEgresoGasolina(id);
    }

    @GetMapping("/buscarPorFecha/{fechaString}")
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorFecha(@PathVariable String fechaString){
        try {
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd-MM-yyyy");
            LocalDate fecha = LocalDate.parse(fechaString, formato);
            java.sql.Date fechaSQL = java.sql.Date.valueOf(fecha);
            return ingresoEgresoGasolinaService.buscarIngresoEgresoGasolinaPorFecha(fechaSQL);
        } catch (DateTimeParseException e) {
            return null;
        }
    }

    @GetMapping("/buscarPorTipoTransaccion/{tipoTransaccion}")
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorTipoTransaccion(@PathVariable String tipoTransaccion){
        return ingresoEgresoGasolinaService.buscarIngresoEgresoGasolinaPorTipoTransaccion(tipoTransaccion);
    }

    @GetMapping("/buscarPorCantidadGalones/{cantidadGalones}")
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorCantidadGalones(@PathVariable float cantidadGalones){
        return ingresoEgresoGasolinaService.buscarIngresoEgresoGasolinaPorCantidadGalones(cantidadGalones);
    }

    @GetMapping("/buscarPorBombasDespachoID/{bombasDespachoID}")
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorBombasDespachoID(@PathVariable Long bombasDespachoID){
        return ingresoEgresoGasolinaService.buscarIngresoEgresoGasolinaPorBombasDespachoID(bombasDespachoID);
    }

    @GetMapping("/buscarPorCisternasID/{cisternasID}")
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorCisternasID(@PathVariable Long cisternasID){
        return ingresoEgresoGasolinaService.buscarIngresoEgresoGasolinaPorCisternasID(cisternasID);
    }



}
