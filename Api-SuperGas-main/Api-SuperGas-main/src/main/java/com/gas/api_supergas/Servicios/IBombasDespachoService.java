package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.BombasDespacho;

import java.util.List;

public interface IBombasDespachoService {

    List<BombasDespacho> listarBombasDespacho();

    BombasDespacho guardarBombasDespacho(BombasDespacho bombasDespacho);

    BombasDespacho actualizarBombasDespacho(BombasDespacho bombasDespacho);

    void eliminarBombasDespacho(Long id);

    BombasDespacho buscarBombasDespacho(Long id);

    BombasDespacho buscarBombasDespachoNombre(String nombre);

    List<BombasDespacho> buscarBombasDespachoUbicacion(String ubicacion);

    List<BombasDespacho> buscarBombasDespachoTanqueAlmacenamientoID(Long tanqueAlmacenamientoID);

}
