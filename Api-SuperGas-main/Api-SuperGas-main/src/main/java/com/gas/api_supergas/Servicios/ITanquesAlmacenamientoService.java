package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.TanquesAlmacenamiento;

import java.util.List;

public interface ITanquesAlmacenamientoService {

    List<TanquesAlmacenamiento> listarTanquesAlmacenamiento();

    TanquesAlmacenamiento guardarTanquesAlmacenamiento(TanquesAlmacenamiento tanquesAlmacenamiento);

    TanquesAlmacenamiento actualizarTanquesAlmacenamiento(TanquesAlmacenamiento tanquesAlmacenamiento);

    void eliminarTanquesAlmacenamiento(Long id);

    TanquesAlmacenamiento buscarTanquesAlmacenamiento(Long id);

    TanquesAlmacenamiento buscarTanquesAlmacenamientoPorDescripcion(String descripcion);

    TanquesAlmacenamiento buscarTanquesAlmacenamientoPorCapacidadGalones(Integer capacidadGalones);

}
