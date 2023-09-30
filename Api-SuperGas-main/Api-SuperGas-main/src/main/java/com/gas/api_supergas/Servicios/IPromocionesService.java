package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Promociones;

import java.util.List;

public interface IPromocionesService {

    List<Promociones> listarPromociones();

    Promociones guardarPromociones(Promociones promociones);

    Promociones buscarPromociones(Long id);

    Promociones actualizarPromociones(Promociones promociones);

    void eliminarPromociones(Long id);

    List<Promociones> buscarPorDescripcion(String descripcion);
}
