import {setData, getData} from './IData'

export async function getBombas(){
    return await getData('/api/bombasDespacho/listar','getBombas','GET');
}

export async function delBomba(bombaId){
    return await getData(`/api/bombasDespacho/eliminar/${bombaId}`,'deleteBomba','DELETE')
}

export async function updateBomba(bombaId, bomba){
    return await setData(`/api/bombasDespacho/actualizar/${bombaId}`,'updateBomba','PUT',bomba)
}

export async function createBomba(bomba){
    return await setData(`/api/bombasDespacho/guardar`,'createBomba','POST',bomba)
}

export async function getTanques(){
    return await getData('/api/tanquesAlmacenamiento/listar', 'getTanques', 'GET')
}