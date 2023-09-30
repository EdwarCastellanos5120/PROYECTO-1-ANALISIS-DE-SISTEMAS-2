package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.LimpiezaTanques;

import java.util.Date;
import java.util.List;

public interface ILimpiezaTaquesService {

    List<LimpiezaTanques> listarLimpiezaTanques();

    LimpiezaTanques guardarLimpiezaTanques(LimpiezaTanques limpiezaTanques);

    LimpiezaTanques actualizarLimpiezaTanques(LimpiezaTanques limpiezaTanques);

    void eliminarLimpiezaTanques(Long id);

    LimpiezaTanques buscarLimpiezaTanques(Long id);

    LimpiezaTanques buscarLimpiezaTanquesDescripcion(String descripcion);

    LimpiezaTanques buscarLimpiezaTanquesFecha(Date fecha);

    List<LimpiezaTanques> buscarLimpiezaTanquesTanqueID(Long tanqueID);

    List<LimpiezaTanques> buscarLimpiezaTanquesFechaEntre(Date fechaInicio, Date fechaFin);
}
