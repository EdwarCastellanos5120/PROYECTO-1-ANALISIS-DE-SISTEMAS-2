package com.gas.api_supergas.Controller;

import com.gas.api_supergas.Models.Promociones;
import com.gas.api_supergas.Servicios.IPromocionesService;
import com.gas.api_supergas.Servicios.PromocionesImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/promociones")
@RequiredArgsConstructor
public class PromocionesController {

    @Autowired
    private IPromocionesService promocionesService;

    @GetMapping("/listar")
    public List<Promociones> listarPromociones(){
        return promocionesService.listarPromociones();
    }

    @PostMapping("/agregar")
    public Promociones guardarPromociones(@RequestBody Promociones promociones){
        return promocionesService.guardarPromociones(promociones);
    }

    @PutMapping("/actualizar/{id}")
    public Promociones actulizarPromociones(@RequestBody Promociones promociones, @PathVariable Long id){
        promociones.setId(id);
        return promocionesService.actualizarPromociones(promociones);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarPromociones(@PathVariable Long id){
        promocionesService.eliminarPromociones(id);
    }

    @GetMapping("/buscar/{id}")
    public Promociones buscarPromociones(@PathVariable Long id){
        return promocionesService.buscarPromociones(id);
    }

    @GetMapping("/buscarDescripcion/{descripcion}")
    public List<Promociones> buscarPorDescripcion(@PathVariable String descripcion){
        return promocionesService.buscarPorDescripcion(descripcion);
    }

}
