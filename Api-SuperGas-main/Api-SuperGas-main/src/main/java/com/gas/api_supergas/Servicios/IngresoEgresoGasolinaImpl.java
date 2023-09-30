package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.IngresoEgresoGasolina;
import com.gas.api_supergas.Repository.IngresoEgresoGasolinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class IngresoEgresoGasolinaImpl implements IIngresoEgresoGasolinaService {

    @Autowired
    private IngresoEgresoGasolinaRepository ingresoEgresoGasolinaRepository;


    @Override
    public List<IngresoEgresoGasolina> listarIngresoEgresoGasolina() {
        return ingresoEgresoGasolinaRepository.findAll();
    }

    @Override
    public IngresoEgresoGasolina guardarIngresoEgresoGasolina(IngresoEgresoGasolina ingresoEgresoGasolina) {
        return ingresoEgresoGasolinaRepository.save(ingresoEgresoGasolina);
    }

    @Override
    public IngresoEgresoGasolina buscarIngresoEgresoGasolina(Long id) {
        return ingresoEgresoGasolinaRepository.findById(id).orElse(null);
    }

    @Override
    public IngresoEgresoGasolina actualizarIngresoEgresoGasolina(IngresoEgresoGasolina ingresoEgresoGasolina) {
        return ingresoEgresoGasolinaRepository.save(ingresoEgresoGasolina);
    }

    @Override
    public void eliminarIngresoEgresoGasolina(Long id) {
        ingresoEgresoGasolinaRepository.deleteById(id);
    }

    @Override
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorFecha(Date fecha) {
        return ingresoEgresoGasolinaRepository.findByFecha(fecha);
    }

    @Override
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorTipoTransaccion(String tipoTransaccion) {
        return ingresoEgresoGasolinaRepository.findByTipoTransaccion(tipoTransaccion);
    }

    @Override
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorCantidadGalones(float cantidadGalones) {
        return ingresoEgresoGasolinaRepository.findByCantidadGalones(cantidadGalones);
    }

    @Override
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorBombasDespachoID(Long bombasDespachoID) {
        return ingresoEgresoGasolinaRepository.findByBombasDespachoID(bombasDespachoID);
    }

    @Override
    public List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorCisternasID(Long cisternasID) {
        return ingresoEgresoGasolinaRepository.findByCisternasID(cisternasID);
    }
}
