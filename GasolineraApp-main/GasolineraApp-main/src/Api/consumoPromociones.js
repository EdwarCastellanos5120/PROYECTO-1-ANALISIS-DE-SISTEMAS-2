//import api  from '../Utils/constant/Apis';

export async function getPromociones() {

    try {
        const url = '/api/promociones/listar';
        const response = await fetch(url,{
            method:'GET',
            mode: 'cors'
        });
        console.log('response', response.url);
        if (response.ok) {
            const data = await response.json();
            //console.log('consumoPromociones', data);
            return data;
        }

    } catch (error) {
        console.log('consumoPromociones error', error);

    }
}

export async function crearPromocion(promocion) {
    try {
        const url = '/api/promociones/agregar';
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(promocion)
        });
        if (response.ok) {
            const data = await response.json();
            console.log('crearPromocion', data);
            return data;
        }
    } catch (error) {
        console.log('crearPromocion error', error);
    }
}

export async function actualizarPromocion(promocionId, promocion) {
    try {
        const url = `/api/promociones/actualizar/${promocionId}`;
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(promocion)
        });
        if (response.ok) {
            const data = await response.json();
            console.log('actualizarPromocion', data);
            return data;
        }
    } catch (error) {
        console.log('actualizarPromocion error', error);
    }
}

export async function eliminarPromocion(promocionId) {
    try {
        const url = `/api/promociones/eliminar/${promocionId}`;
        const response = await fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        });
        if (response.ok) {
            const data = await response.json();
            console.log('eliminarPromocion', data);
            return data;
        }
    } catch (error) {
        console.log('eliminarPromocion error', error);
    }
}