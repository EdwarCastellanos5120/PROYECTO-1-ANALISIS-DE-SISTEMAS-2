package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.TanquesAlmacenamiento;
import com.gas.api_supergas.Repository.TanquesAlmacenamientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TanquesAlmacenamientoImpl  implements ITanquesAlmacenamientoService{

    @Autowired
    private TanquesAlmacenamientoRepository tanquesAlmacenamientoRepository;

    @Override
    public List<TanquesAlmacenamiento> listarTanquesAlmacenamiento() {
        return tanquesAlmacenamientoRepository.findAll();
    }

    @Override
    public TanquesAlmacenamiento guardarTanquesAlmacenamiento(TanquesAlmacenamiento tanquesAlmacenamiento) {
        return tanquesAlmacenamientoRepository.save(tanquesAlmacenamiento);
    }

    @Override
    public TanquesAlmacenamiento actualizarTanquesAlmacenamiento(TanquesAlmacenamiento tanquesAlmacenamiento) {
        return tanquesAlmacenamientoRepository.save(tanquesAlmacenamiento);
    }

    @Override
    public void eliminarTanquesAlmacenamiento(Long id) {
        tanquesAlmacenamientoRepository.deleteById(id);
    }

    @Override
    public TanquesAlmacenamiento buscarTanquesAlmacenamiento(Long id) {
        return tanquesAlmacenamientoRepository.findById(id).orElse(null);
    }

    @Override
    public TanquesAlmacenamiento buscarTanquesAlmacenamientoPorDescripcion(String descripcion) {
        return tanquesAlmacenamientoRepository.findByDescripcion(descripcion);
    }

    @Override
    public TanquesAlmacenamiento buscarTanquesAlmacenamientoPorCapacidadGalones(Integer capacidadGalones) {
        return tanquesAlmacenamientoRepository.findByCapacidadGalones(capacidadGalones);
    }
}
