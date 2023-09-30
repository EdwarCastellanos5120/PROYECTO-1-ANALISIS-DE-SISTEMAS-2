import {getData, setData} from '../Api/IData';

export async function getTanques(){
    return await getData('/api/tanquesAlmacenamiento/listar','getTanques','GET')
}

export async function createTanque(data){
    return await setData('/api/tanquesAlmacenamiento/agregar','createTanque','POST',data)
}

export async function updateTanque(id, data){
    return await setData(`/api/tanquesAlmacenamiento/actualizar/${id}`,'updateTanque','PUT',data)
}

export async function deleteTanque(id){
    return await setData(`/api/tanquesAlmacenamiento/eliminar/${id}`,'deleteTanque','DELETE')
}