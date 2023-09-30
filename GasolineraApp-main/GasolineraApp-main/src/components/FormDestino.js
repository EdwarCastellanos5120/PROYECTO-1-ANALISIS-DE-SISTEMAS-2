import React, { useState, useEffect } from 'react';
import '../Styles/DataCard.css'

export const FormDestino = ({ onCreate, destinoToEdit, handleCancelEdit }) => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (destinoToEdit) {
            setId(destinoToEdit.id);
            setNombre(destinoToEdit.nombre);
            setDireccion(destinoToEdit.direccion);
            setDescripcion(destinoToEdit.descripcion);
        }
    }, [destinoToEdit])

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value)
    };

    const handleDireccionChange = (event) => {
        setDireccion(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (destinoToEdit) {
            const destinoEditado = {
                id,
                nombre,
                direccion,
                descripcion
            };
            onCreate(destinoEditado);
        }
        else {
            const nuevoDestino = {
                nombre,
                direccion,
                descripcion
            };
            onCreate(nuevoDestino);
        }
    };
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form-group'>
                <div>
                    <label className='label' htmlFor='nombre'>Nombre</label>
                    <input className="input-field" type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                    <label className='label' htmlFor='descripcion'>Descripcion</label>
                    <input className="input-field" type="text" id="descripcion" value={descripcion} onChange={handleDescripcionChange} />
                </div>
                <div>
                    <label className='label' htmlFor='direccion'>Direccion</label>
                    <input className="input-field" type="text" id="direccion" value={direccion} onChange={handleDireccionChange} />
                </div>
                <div className='div-submit-buttons'>
                    <button type="submit" className="data-card-button data-card-button-edit">{destinoToEdit ? 'Guardar cambios' : 'Crear Destino'}</button>
                    <button type="button" className="data-card-button data-card-button-delete" onClick={handleCancelEdit}>Cancelar</button>
                </div>



            </form>
        </div>

    )

};