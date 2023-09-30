package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.BombasDespacho;
import com.gas.api_supergas.Repository.BombasDespachoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BombasDespachoImpl implements IBombasDespachoService{

    @Autowired
    private BombasDespachoRepository bombasDespachoRepository;


    @Override
    public List<BombasDespacho> listarBombasDespacho() {
        return bombasDespachoRepository.findAll();
    }

    @Override
    public BombasDespacho guardarBombasDespacho(BombasDespacho bombasDespacho) {
        return bombasDespachoRepository.save(bombasDespacho);
    }

    @Override
    public BombasDespacho actualizarBombasDespacho(BombasDespacho bombasDespacho) {
        return bombasDespachoRepository.save(bombasDespacho);
    }

    @Override
    public void eliminarBombasDespacho(Long id) {
        bombasDespachoRepository.deleteById(id);
    }

    @Override
    public BombasDespacho buscarBombasDespacho(Long id) {
       return bombasDespachoRepository.findById(id).orElse(null);
    }

    @Override
    public BombasDespacho buscarBombasDespachoNombre(String nombre) {
        return bombasDespachoRepository.findByNombre(nombre);
    }

    @Override
    public List<BombasDespacho> buscarBombasDespachoUbicacion(String ubicacion) {
        return bombasDespachoRepository.findByUbicacion(ubicacion);
    }

    @Override
    public List<BombasDespacho> buscarBombasDespachoTanqueAlmacenamientoID(Long tanqueAlmacenamientoID) {
        return bombasDespachoRepository.findByTanqueAlmacenamientoID(tanqueAlmacenamientoID);
    }

}
