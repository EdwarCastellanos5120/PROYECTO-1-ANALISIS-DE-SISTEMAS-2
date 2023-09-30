package com.gas.api_supergas.Servicios;

import com.gas.api_supergas.Models.Distribucion;
import com.gas.api_supergas.Repository.DistribucionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DistribucionImpl implements IDistribucionService{

    @Autowired
    private DistribucionRepository distribucionRepository;

    @Override
    public List<Distribucion> listarDistribucion() {
        return distribucionRepository.findAll();
    }

    @Override
    public Distribucion guardarDistribucion(Distribucion distribucion) {
        return distribucionRepository.save(distribucion);
    }

    @Override
    public Distribucion actualizarDistribucion(Distribucion distribucion) {
        return distribucionRepository.save(distribucion);
    }

    @Override
    public void eliminarDistribucion(Long id) {
        distribucionRepository.deleteById(id);
    }

    @Override
    public Distribucion buscarDistribucion(Long id) {
        return distribucionRepository.findById(id).orElse(null);
    }

    @Override
    public List<Distribucion> buscarDistribucionPorDestino(Long destinoID) {
        return distribucionRepository.findByDestinoID(destinoID);
    }

    @Override
    public List<Distribucion> buscarDistribucionPorCisterna(Long cisternaID) {
        return distribucionRepository.findByCisternaID(cisternaID);
    }

    @Override
    public List<Distribucion> buscarDistribucionPorTanqueAlmacenamiento(Long tanqueAlmacenamientoID) {
      return distribucionRepository.findByTanqueAlmacenamientoID(tanqueAlmacenamientoID);
    }

    @Override
    public List<Distribucion> buscarDistribucionPorFecha(Date fecha) {
        return distribucionRepository.findByFecha(fecha);
    }

    @Override
    public List<Distribucion> buscarDistribucionPorFechaEntre(Date fecha1, Date fecha2) {
       return distribucionRepository.findByFechaBetween(fecha1, fecha2);
    }
}
