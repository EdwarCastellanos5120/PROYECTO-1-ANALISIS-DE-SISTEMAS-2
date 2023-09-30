package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Distribucion;

import java.util.Date;
import java.util.List;

public interface IDistribucionService {

    List<Distribucion> listarDistribucion();

    Distribucion guardarDistribucion(Distribucion distribucion);

    Distribucion actualizarDistribucion(Distribucion distribucion);


    void eliminarDistribucion(Long id);

    Distribucion buscarDistribucion(Long id);

    List<Distribucion> buscarDistribucionPorDestino(Long destinoID);

    List<Distribucion> buscarDistribucionPorCisterna(Long cisternaID);

    List<Distribucion> buscarDistribucionPorTanqueAlmacenamiento(Long tanqueAlmacenamientoID);

    List<Distribucion> buscarDistribucionPorFecha(Date fecha);

    List<Distribucion> buscarDistribucionPorFechaEntre(Date fecha1, Date fecha2);

}
