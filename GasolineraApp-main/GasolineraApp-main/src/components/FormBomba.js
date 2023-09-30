import React, { useState, useEffect } from 'react';
import { getTanques } from '../Api/consumoBombas'
import '../Styles/DataCard.css'

export const FormBomba = ({ onCreate, bombaToEdit, handleCancelEdit }) => {
    const [nombre, setNombre] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [seleccion, setSeleccion] = useState('');
    const [tanques, setTanques] = useState([]);

    useEffect(() => {
        getTanques()
            .then((data) => {
                setTanques(data);
            }).catch((err) => console.error(err));

        if (bombaToEdit) {
            setNombre(bombaToEdit.nombre);
            setUbicacion(bombaToEdit.ubicacion);
            setSeleccion(bombaToEdit.tanqueAlmacenamientoID);
        }
    }, [bombaToEdit]);

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleUbicacionChange = (e) => {
        setUbicacion(e.target.value);
    };

    const handleSeleccionChange = (e) => {
        setSeleccion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Encontrar el tanque seleccionado
        const tanqueSeleccionado = tanques.find((tanque) => tanque.id === Number(seleccion));
        if (bombaToEdit) {
            const bombaEditada = {
                id: bombaToEdit.id,
                nombre: nombre,
                ubicacion: ubicacion,
                tanqueAlmacenamientoID: Number(seleccion),
                tanqueAlmacenamiento: tanqueSeleccionado,
            }
            onCreate(bombaEditada);
        }
        else {
            // Verificar si se encontró el tanque y actualizar el estado
            if (tanqueSeleccionado) {
                const nuevaBomba = {
                    nombre: nombre,
                    ubicacion: ubicacion,
                    tanqueAlmacenamientoID: Number(seleccion),
                    tanqueAlmacenamiento: tanqueSeleccionado,
                };
                console.log(nuevaBomba);
                onCreate(nuevaBomba);
            }

        }
    }


    return (
        <div className='form-container'>
            <form className='form-group' onSubmit={handleSubmit}>
                <div>
                    <label className='label' htmlFor='nombre'>Nombre</label>
                    <input className="input-field" type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                    <label className='label' htmlFor='ubicacion'>Ubicacion</label>
                    <input className="input-field" type="text" id="ubicacion" value={ubicacion} onChange={handleUbicacionChange} />
                </div>
                <div>
                    <label className='label' htmlFor='seleccion'>Selecciona la capacidad:</label>
                    <select className='select-field' id="seleccion" value={seleccion} onChange={handleSeleccionChange}>
                        {tanques && tanques.map((opcion) => (
                            <option key={opcion.id} value={opcion.id}>{opcion.capacidadGalones}</option>
                        ))}
                    </select>
                </div>
                <div className='div-submit-buttons'>
                    <button type="submit" className="data-card-button data-card-button-edit">{bombaToEdit ? 'Guardar cambios' : 'Crear Bomba'}</button>
                    <button type="button" className="data-card-button data-card-button-delete" onClick={handleCancelEdit}>Cancelar</button>
                </div>

            </form>
        </div>
    )
};