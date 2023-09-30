import {getData, setData} from '../Api/IData';

export async function getGasolina(){
    return await getData('/api/ingresoEgresoGasolina/listar','getGasolina','GET')
}

export async function delGasolina(id){
    return await getData(`/api/ingresoEgresoGasolina/eliminar/${id}`,'delGasolina','DELETE')
}

export async function createGasolina(data){
    return await setData('/api/ingresoEgresoGasolina/agregar','createGasolina','POST',data)
}

export async function updateGasolina(id,data){
    return await setData(`/api/ingresoEgresoGasolina/actualizar/${id}`,'updateGasolina','PUT',data)
}

export async function getCisternas(){
    return await getData('/api/cisternas/listar','getCisternas','GET')
}

export async function getBombas(){
    return await getData('/api/bombasDespacho/listar','getBombas','GET')
}