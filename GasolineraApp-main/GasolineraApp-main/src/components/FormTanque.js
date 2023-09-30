import React, { useState, useEffect } from "react";
import '../Styles/DataCard.css';

export const FormTanque = ({ onCreate, tanqueToEdit, handleEditCancel }) => {
    const [capacidadGalones, setCapacidadGalones] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (tanqueToEdit) {
            setCapacidadGalones(tanqueToEdit.capacidadGalones);
            setDescripcion(tanqueToEdit.descripcion);
        }
    }, [tanqueToEdit])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tanqueToEdit) {
            const updateTanque = {
                id: tanqueToEdit.id,
                capacidadGalones: capacidadGalones,
                descripcion: descripcion
            }
            onCreate(updateTanque);
        }
        else {
            const newTanque = {
                capacidadGalones: capacidadGalones,
                descripcion: descripcion
            }
            onCreate(newTanque);
        }
    }

    return (
        <div className='form-container'>
            <form className="form-group" onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="galones">Capacidad en Galones</label>
                    <input id="galones" className="form-control" type="number" value={capacidadGalones} onChange={(e) => setCapacidadGalones(e.target.value)} />
                </div>
                <div>
                    <label className="label" htmlFor="">Descripcion</label>
                    <input id='descripcion' className="form-control" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div className='div-submit-buttons'>
                    <button className="data-card-button data-card-button-edit" type="submit">{tanqueToEdit ? 'Guardar cambios' : 'Crear tanque'}</button>
                    <button className="button" type="data-card-button data-card-button-delete" onClick={handleEditCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}