package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Destinos;
import com.gas.api_supergas.Repository.DestinosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinosServiceImpl implements IDestinosService{

    @Autowired
    private DestinosRepository destinosRepository;

    @Override
    public List<Destinos> listarDestinos() {
       return destinosRepository.findAll();
    }

    @Override
    public Destinos guardarDestino(Destinos destino) {
        return destinosRepository.save(destino);
    }

    @Override
    public Destinos actualizarDestino(Destinos destino) {
        return destinosRepository.save(destino);
    }

    @Override
    public void eliminarDestino(Long id) {
        destinosRepository.deleteById(id);
    }

    @Override
    public Destinos buscarDestino(Long id) {
        return destinosRepository.findById(id).orElse(null);
    }

    @Override
    public List<Destinos> buscarNombre(String nombre) {
        return destinosRepository.findByNombre(nombre);
    }

    @Override
    public List<Destinos> buscarDireccion(String direccion) {
        return destinosRepository.findByDireccion(direccion);
    }

    @Override
    public List<Destinos> buscarDescripcion(String descripcion) {
        return destinosRepository.findByDescripcion(descripcion);
    }
}
