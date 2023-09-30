package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Cisternas;

import java.util.List;

public interface ICisternasService {

    List<Cisternas> listarCisternas();

    Cisternas crearCisterna(Cisternas cisterna);

    Cisternas actualizarCisterna(Cisternas cisterna);

    void eliminarCisterna(Long id);

    Cisternas obtenerCisternaPorId(Long id);

    Cisternas obtenerCisternaPorPlaca(String placa);

    List<Cisternas> obtenerCisternaPorDescripcion(String descripcion);

    List<Cisternas> obtenerCisternaPorTamanioGalones(Integer tamanioGalones);

    List<Cisternas> obtenerCisternaPorEmpleadoID(Long empleadoID);

    List<Cisternas> obtenerCisternaPorEmpleadoIDIsNull();

    List<Cisternas> obtenerCisternaPorEmpleadoIDIsNotNull();


}
