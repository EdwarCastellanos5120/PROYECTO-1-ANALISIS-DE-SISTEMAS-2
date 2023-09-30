import {getData,setData} from '../Api/IData'

export async function getDistribucion (){
    return await getData('/api/distribucion/listar','getDistribucion','GET');
}

export async function delDistribucion(distribucionId){
    return await getData(`/api/distribucion/eliminar/${distribucionId}`,'deleteDistribucion','DELETE')
}

export async function updateDistribucion(distribucionId, distribucion){
    return await setData(`/api/distribucion/actualizar/${distribucionId}`,'updateDistribucion','PUT',distribucion)
}

export async function createDistribucion(distribucion){
    return await setData(`/api/distribucion/agregar`,'createDistribucion','POST',distribucion)
}

export async function getEmployees(){
    return await getData('/api/empleados/listar','getEmployees','GET');
}

export async function getDestinos(){
    return await getData('/api/destinos/listar','getDestinos','GET');
}

export async function getCisternas(){
    return await getData('/api/cisternas/listar','getCisternas','GET');
}

export async function getTanques(){
    return await getData('/api/tanquesAlmacenamiento/listar','getTanques','GET');
}