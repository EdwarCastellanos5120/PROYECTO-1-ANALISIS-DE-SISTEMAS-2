package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Cisternas;
import com.gas.api_supergas.Repository.CisternasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CisternasServiceImpl implements ICisternasService{

    @Autowired
    private CisternasRepository cisternasRepository;
    @Override
    public List<Cisternas> listarCisternas() {
        return cisternasRepository.findAll();
    }

    @Override
    public Cisternas crearCisterna(Cisternas cisterna) {
        return cisternasRepository.save(cisterna);
    }

    @Override
    public Cisternas actualizarCisterna(Cisternas cisterna) {
        return cisternasRepository.save(cisterna);
    }

    @Override
    public void eliminarCisterna(Long id) {
        cisternasRepository.deleteById(id);
    }

    @Override
    public Cisternas obtenerCisternaPorId(Long id) {
        return cisternasRepository.findById(id).orElse(null);
    }

    @Override
    public Cisternas obtenerCisternaPorPlaca(String placa) {
        return cisternasRepository.findByPlaca(placa);
    }

    @Override
    public List<Cisternas> obtenerCisternaPorDescripcion(String descripcion) {
        return cisternasRepository.findByDescripcion(descripcion);
    }

    @Override
    public List<Cisternas> obtenerCisternaPorTamanioGalones(Integer tamanioGalones) {
        return cisternasRepository.findByTamanioGalones(tamanioGalones);
    }

    @Override
    public List<Cisternas> obtenerCisternaPorEmpleadoID(Long empleadoID) {
        return cisternasRepository.findByEmpleadoID(empleadoID);
    }

    @Override
    public List<Cisternas> obtenerCisternaPorEmpleadoIDIsNull() {
        return  cisternasRepository.findByEmpleadoIDIsNull();
    }

    @Override
    public List<Cisternas> obtenerCisternaPorEmpleadoIDIsNotNull() {
        return cisternasRepository.findByEmpleadoIDIsNotNull();
    }
}
