package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.IngresoEgresoGasolina;

import java.util.Date;
import java.util.List;

public interface IIngresoEgresoGasolinaService {

    List<IngresoEgresoGasolina> listarIngresoEgresoGasolina();

    IngresoEgresoGasolina guardarIngresoEgresoGasolina(IngresoEgresoGasolina ingresoEgresoGasolina);

    IngresoEgresoGasolina buscarIngresoEgresoGasolina(Long id);

    IngresoEgresoGasolina actualizarIngresoEgresoGasolina(IngresoEgresoGasolina ingresoEgresoGasolina);

    void eliminarIngresoEgresoGasolina(Long id);

    List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorFecha(Date fecha);

    List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorTipoTransaccion(String tipoTransaccion);

    List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorCantidadGalones(float cantidadGalones);

    List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorBombasDespachoID(Long bombasDespachoID);

    List<IngresoEgresoGasolina> buscarIngresoEgresoGasolinaPorCisternasID(Long cisternasID);



}
