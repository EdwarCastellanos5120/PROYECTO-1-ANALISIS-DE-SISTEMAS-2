import {getData,setData} from '../Api/IData';

export async function getCisternas (){
    return await getData('/api/cisternas/listar','getCisternas','GET')
}

export async function createCisterna(data){
    return await setData('/api/cisternas/agregar','createCisterna','POST',data)
}

export async function updateCisterna(id,data){
    return await setData(`/api/cisternas/actualizar/${id}`,'updateCisterna','PUT',data)
}

export async function deleteCisterna(id){
    return await getData(`/api/cisternas/eliminar/${id}`,'DeleteCisterna','DELETE')
}

export async function getEmpleados(){
    return await getData('/api/empleados/listar','getEmpleados','GET')
}