package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Destinos;

import java.util.List;

public interface IDestinosService {

    List<Destinos> listarDestinos();

    Destinos guardarDestino(Destinos destino);

    Destinos actualizarDestino(Destinos destino);

    void eliminarDestino(Long id);

    Destinos buscarDestino(Long id);

    List<Destinos> buscarNombre(String nombre);

    List<Destinos> buscarDireccion(String direccion);

    List<Destinos> buscarDescripcion(String descripcion);






}
