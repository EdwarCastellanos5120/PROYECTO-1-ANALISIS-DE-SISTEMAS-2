package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.LimpiezaTanques;
import com.gas.api_supergas.Repository.LimpiezaTanquesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class LimpiezaTanquesServiceImpl implements ILimpiezaTaquesService {

    @Autowired
    private LimpiezaTanquesRepository limpiezaTanquesRepository;

    @Override
    public List<LimpiezaTanques> listarLimpiezaTanques() {
        return limpiezaTanquesRepository.findAll();
    }

    @Override
    public LimpiezaTanques guardarLimpiezaTanques(LimpiezaTanques limpiezaTanques) {
        return limpiezaTanquesRepository.save(limpiezaTanques);
    }

    @Override
    public LimpiezaTanques actualizarLimpiezaTanques(LimpiezaTanques limpiezaTanques) {
        return limpiezaTanquesRepository.save(limpiezaTanques);
    }

    @Override
    public void eliminarLimpiezaTanques(Long id) {
        limpiezaTanquesRepository.deleteById(id);
    }

    @Override
    public LimpiezaTanques buscarLimpiezaTanques(Long id) {
        return limpiezaTanquesRepository.findById(id).orElse(null);
    }

    @Override
    public LimpiezaTanques buscarLimpiezaTanquesDescripcion(String descripcion) {
        return limpiezaTanquesRepository.findByDescripcion(descripcion);
    }

    @Override
    public LimpiezaTanques buscarLimpiezaTanquesFecha(Date fecha) {
        return limpiezaTanquesRepository.findByFecha(fecha);
    }

    @Override
    public List<LimpiezaTanques> buscarLimpiezaTanquesTanqueID(Long tanqueID) {
        return limpiezaTanquesRepository.findByTanqueID(tanqueID);
    }

    @Override
    public List<LimpiezaTanques> buscarLimpiezaTanquesFechaEntre(Date fechaInicio, Date fechaFin) {
        return limpiezaTanquesRepository.findByFechaBetween(fechaInicio, fechaFin);
    }
}
