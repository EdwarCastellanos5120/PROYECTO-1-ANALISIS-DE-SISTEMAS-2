package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Promociones;
import com.gas.api_supergas.Repository.PromocionesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromocionesImpl implements IPromocionesService {

    @Autowired
    private PromocionesRepository promocionesRepository;
    @Override
    public List<Promociones> listarPromociones() {
        return promocionesRepository.findAll();
    }

    @Override
    public Promociones guardarPromociones(Promociones promociones) {
        return promocionesRepository.save(promociones);
    }

    @Override
    public Promociones buscarPromociones(Long id) {
        return promocionesRepository.findById(id).orElse(null);
    }

    @Override
    public Promociones actualizarPromociones(Promociones promociones) {
        return promocionesRepository.save(promociones);
    }

    @Override
    public void eliminarPromociones(Long id) {
        promocionesRepository.deleteById(id);
    }

    @Override
    public List<Promociones> buscarPorDescripcion(String descripcion) {
        return promocionesRepository.findByDescripcion(descripcion);
    }
}
