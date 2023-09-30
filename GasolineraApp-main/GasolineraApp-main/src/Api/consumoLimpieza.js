//import api  from '../Utils/constant/Apis';

export async function getLimpieza() {

    try {
        const url = '/api/limpiezaTanques/listar';
        const response = await fetch(url,{
            method:'GET',
            mode: 'cors'
        });
        console.log('response', response.url);
        if (response.ok) {
            const data = await response.json();
            //console.log('consumoLimpiezaes', data);
            return data;
        }

    } catch (error) {
        console.log('consumoLimpiezaes error', error);

    }
}

export async function crearLimpieza(Limpieza) {
    try {
        const url = '/api/limpiezaTanques/agregar';
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(Limpieza)
        });
        if (response.ok) {
            const data = await response.json();
            console.log('crearLimpieza', data);
            return data;
        }
    } catch (error) {
        console.log('crearLimpieza error', error);
    }
}

export async function actualizarLimpieza(LimpiezaId, Limpieza) {
    try {
        const url = `/api/limpiezaTanques/actualizar/${LimpiezaId}`;
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(Limpieza)
        });
        if (response.ok) {
            const data = await response.json();
            console.log('actualizarLimpieza', data);
            return data;
        }
    } catch (error) {
        console.log('actualizarLimpieza error', error);
    }
}

export async function eliminarLimpieza(LimpiezaId) {
    try {
        const url = `/api/limpiezaTanques/eliminar/${LimpiezaId}`;
        const response = await fetch(url, {
            method: 'DELETE',
            mode: 'cors'
        });
        if (response.ok) {
            const data = await response.json();
            console.log('eliminarLimpieza', data);
            return data;
        }
    } catch (error) {
        console.log('eliminarLimpieza error', error);
    }
}