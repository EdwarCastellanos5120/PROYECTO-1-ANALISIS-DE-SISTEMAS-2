import React, { useState, useEffect } from "react";
import { getTanques, getDestinos, getCisternas } from '../Api/consumoDistribucion'
import '../Styles/DataCard.css'

export const FormDistri = ({ onCreate, distribucionToEdit, handleCancelEdit }) => {
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');
    const [cisterna, setCisterna] = useState('');
    const [tanque, setTanque] = useState('');

    // Variables d input
    const [destino_selected, setDestino_selected] = useState('');
    const [cisterna_selected, setCisterna_selected] = useState('');
    const [tanque_selected, setTanque_selected] = useState('');

    useEffect(() => {
        getTanques()
            .then((data) => {
                setTanque(data);
            }).catch((err) => console.error(err));

        getDestinos()
            .then((data) => {
                setDestino(data);
            }).catch((err) => console.error(err));

        getCisternas()
            .then((data) => {
                setCisterna(data);
            }).catch((err) => console.error(err));
        if (distribucionToEdit) {
            setFecha(distribucionToEdit.fecha);
            setDestino_selected(distribucionToEdit.destinoID.toString());
            setCisterna_selected(distribucionToEdit.cisternaID.toString());
            setTanque_selected(distribucionToEdit.tanqueAlmacenamientoID.toString());
        }
    }, [distribucionToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtener los objetos seleccionados
        const destinoSeleccionado = destino.find((dest) => dest.id === Number(destino_selected));
        const cisternaSeleccionado = cisterna.find((cist) => cist.id === Number(cisterna_selected));
        const tanqueSeleccionado = tanque.find((tanq) => tanq.id === Number(tanque_selected));

        if (distribucionToEdit) {
            if (destinoSeleccionado && cisternaSeleccionado && tanqueSeleccionado) {

                const distribucionActualizada = {
                    id: distribucionToEdit.id,
                    fecha: fecha,
                    destinoID: Number(destinoSeleccionado.id),
                    cisternaID: Number(cisternaSeleccionado.id),
                    tanqueAlmacenamientoID: Number(tanqueSeleccionado.id),
                    destino: destinoSeleccionado,
                    cisterna: cisternaSeleccionado,
                    tanqueAlmacenamiento: tanqueSeleccionado
                }
                onCreate(distribucionActualizada)
            }
        }
        else {
            // Verificar que se hayan seleccionado todos los elementos
            if (destinoSeleccionado && cisternaSeleccionado && tanqueSeleccionado) {
                const nuevaDistribucion = {
                    "fecha": fecha,
                    "destinoID": Number(destinoSeleccionado.id),
                    "cisternaID": Number(cisternaSeleccionado.id),
                    "tanqueAlmacenamientoID": Number(tanqueSeleccionado.id),
                    "destino": destinoSeleccionado,
                    "cisterna": cisternaSeleccionado,
                    "tanqueAlmacenamiento": tanqueSeleccionado
                };

                console.log('Nueva distribución:', nuevaDistribucion);
                onCreate(nuevaDistribucion);
            } else {
                console.error('Por favor, seleccione todos los elementos necesarios.');
            }

        }
    };



    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    }

    const handleCisternaChange = (e) => {
        setCisterna_selected(e.target.value);
    }

    const handleTanqueChange = (e) => {
        setTanque_selected(e.target.value);
    }

    const handleDestinoChange = (e) => {
        setDestino_selected(e.target.value);
    }
    return (
        <div className='form-container'>
            <form className='form-group' onSubmit={handleSubmit}>
                <div>
                    <label className='label' htmlFor='fecha'>Fecha</label>
                    <input type="date" id="fecha" value={fecha} onChange={handleFechaChange} />
                </div>
                <div>
                    <label className='label' htmlFor='cisterna'>Selecciona la Cisterna:</label>
                    <select className='select-field' id="cisterna" value={cisterna_selected} onChange={handleCisternaChange}>
                        <option value="">Selecciona una cisterna</option>
                        {cisterna && cisterna.map((opcion) => (
                            <option key={opcion.id} value={opcion.id}>{`${opcion.tamanioGalones} ${opcion.placa}`}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='label' htmlFor='tanque'>Capacidad en Galones:</label>
                    <select className='select-field' id="tanque" value={tanque_selected} onChange={handleTanqueChange}>
                        <option value="">Selecciona un tanque</option>
                        {tanque && tanque.map((opcion) => (
                            <option key={opcion.id} value={opcion.id}>{opcion.capacidadGalones}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='label' htmlFor='destino'>Destino</label>
                    <select className='select-field' id="destino" value={destino_selected} onChange={handleDestinoChange}>
                        <option value="">Selecciona un destino</option>
                        {destino && destino.map((opcion) => (
                            <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>

                </div>
                <div className='div-submit-buttons'>
                    <button type="submit" className="data-card-button data-card-button-edit">{distribucionToEdit ? 'Guardar cambios' : 'Crear distribucion'}</button>
                    <button type="button" className="data-card-button data-card-button-delete" onClick={handleCancelEdit}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}