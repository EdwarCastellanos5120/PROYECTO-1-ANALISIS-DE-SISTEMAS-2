import {setData, getData} from './IData'

export async function getDestinos(){
    return await getData('/api/destinos/listar','getDestinos','GET');
}

export async function delDestino(destinoId){
    return await getData(`/api/destinos/eliminar/${destinoId}`,'deleteDestino','DELETE')
}

export async function updateDestino(destinoId, destino){
    return await setData(`/api/destinos/actualizar/${destinoId}`,'updateDestino','PUT',destino)
}

export async function createDestino(destino){
    return await setData(`/api/destinos/agregar`,'createDesntino','POST',destino)
}