import React, { useEffect, useState } from 'react';
import { getBombas, getCisternas } from '../Api/consumoGasolina';
import '../Styles/DataCard.css'

export const FormGasolina = ({ onCreate, gasolinaToEdit, handleCancelEdit }) => {
    const [fecha, setFecha] = useState('');
    const [tipoTransaccion, setTipoTransaccion] = useState('');
    const [cantidadGalones, setCantidadGalones] = useState('');
    const [bombaDespacho, setBombaDespacho] = useState('');
    const [cisterna, setCisterna] = useState('');

    const [bomba_selected, setBomba_selected] = useState('');
    const [cisterna_selected, setCisterna_selected] = useState('');

    useEffect(() => {
        getBombas()
            .then((data) => {
                setBombaDespacho(data);
            }).catch((err) => console.error(err));

        getCisternas()
            .then((data) => {
                setCisterna(data);
            }).catch((err) => console.error(err));

        if (gasolinaToEdit) {
            setFecha(gasolinaToEdit.fecha);
            setTipoTransaccion(gasolinaToEdit.tipo_transaccion);
            setCantidadGalones(Number(gasolinaToEdit.galones));
            setBomba_selected(String(gasolinaToEdit.bombaDespachoID));
            setCisterna_selected(String(gasolinaToEdit.cisternaID));
        }
    }, [gasolinaToEdit])

    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    }

    const handleTipoTransaccionChange = (e) => {
        setTipoTransaccion(e.target.value);
    }

    const handleCantidadGalonesChange = (e) => {
        setCantidadGalones(e.target.value);
    }

    const handleBombaChange = (e) => {
        setBomba_selected(e.target.value);
    }

    const handleCisternaChange = (e) => {
        setCisterna_selected(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const bombaSeleccionada = bombaDespacho.find((bomba) => bomba.id === Number(bomba_selected));
        const cisternaSeleccionada = cisterna.find((cist) => cist.id === Number(cisterna_selected));

        if (gasolinaToEdit) {
            if (bombaSeleccionada && cisternaSeleccionada) {
                const gasolinaActualizada = {
                    id: gasolinaToEdit.id,
                    fecha: fecha,
                    tipoTransaccion: tipoTransaccion,
                    cantidadGalones: Number(cantidadGalones),
                    bombasDespachoID: Number(bombaSeleccionada.id),
                    bombasDespacho: bombaSeleccionada,
                    cisternasID: Number(cisternaSeleccionada.id),
                    cisternas: cisternaSeleccionada
                }
                onCreate(gasolinaActualizada);
            }
        }
        else {
            if (bombaSeleccionada && cisternaSeleccionada) {
                const nuevaGasolina = {
                    fecha: fecha,
                    tipoTransaccion: tipoTransaccion,
                    cantidadGalones: Number(cantidadGalones),
                    bombasDespachoID: Number(bombaSeleccionada.id),
                    bombasDespacho: bombaSeleccionada || {},
                    cisternasID: Number(cisterna_selected),
                    cisternas: cisternaSeleccionada
                }
                onCreate(nuevaGasolina);
            }
        }
    }


    return (
        <div className='form-container'>
            <form className='form-group' onSubmit={handleSubmit}>
                <div>
                    <label className='label' htmlFor='fecha'>Fecha</label>
                    <input type='date' id='fecha' value={fecha} onChange={handleFechaChange} />
                </div>
                <div>
                    <label className='label' htmlFor='tipoTransaccion'>Tipo transaccion</label>
                    <input className='input-field' type='text' id='tipoTransaccion' value={tipoTransaccion} onChange={handleTipoTransaccionChange} />
                </div>
                <div>
                    <label className='label' htmlFor='cantidadGalones'>Cantidad de Galones</label>
                    <input className='input-field' type='number' id='cantidadGalones' value={cantidadGalones} onChange={handleCantidadGalonesChange} />
                </div>
                <div>
                    <label className='label' htmlFor='bomba'>Selecciona la Bomba:</label>
                    <select className='select-field' id="cisterna" value={bomba_selected} onChange={handleBombaChange}>
                        <option value="">Selecciona una bomba</option>
                        {bombaDespacho && bombaDespacho.map((opcion) => (
                            <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='label' htmlFor='cisterna'>Selecciona la Cisterna:</label>
                    <select className='select-field' id="cisterna" value={cisterna_selected} onChange={handleCisternaChange}>
                        <option value="">Selecciona una cisterna</option>
                        {cisterna && cisterna.map((opcion) => (
                            <option key={opcion.id} value={opcion.id}>{opcion.placa}</option>
                        ))}
                    </select>
                </div>
                <div className='div-submit-buttons'>
                    <button type='submit' className='data-card-button data-card-button-edit'>{gasolinaToEdit ? 'Guardar cambios' : 'Crear I/O Gasolina'}</button>
                    <button type='button' className='data-card-button data-card-button-delete' onClick={handleCancelEdit}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}