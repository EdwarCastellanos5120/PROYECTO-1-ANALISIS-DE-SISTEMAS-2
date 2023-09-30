import {getData, setData} from '../Api/IData';

export async function getEmpleados (){
    return await getData('/api/empleados/listar','getEmpleados','GET')
}

export async function updateEmpleado (id, data){
    return await setData(`/api/empleados/actualizar/${id}`,'updateEmpleado', 'PUT', data)
}

export async function createEmpleado (data){
    return await setData('/api/empleados/agregar','createEmpleado','POST', data)
}

export async function deleteEmpleado(id){
    return await setData(`/api/empleados/eliminar/${id}`,'DeleteEmpleado','DELETE')
}