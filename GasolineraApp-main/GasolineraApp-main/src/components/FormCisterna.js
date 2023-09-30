import React, { useState, useEffect } from "react";
import { getEmpleados } from '../Api/consumoCisterna';
import '../Styles/DataCard.css';

export const FormCisterna = ({ onCreate, cisternaToEdit, handleCancelEdit }) => {
    const [tamanioGalones, setTamanioGalones] = useState('');
    const [placa, setPlaca] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [empleado, setEmpleado] = useState([]);

    const [empleado_selected, setEmpleado_selected] = useState('');

    useEffect(() => {
        getEmpleados()
            .then((data) => {
                setEmpleado(data);
            }).catch((err) => console.error(err));

        if (cisternaToEdit) {
            console.log(cisternaToEdit)
            setTamanioGalones(Number(cisternaToEdit.capacidad));
            setPlaca(cisternaToEdit.placa);
            setDescripcion((cisternaToEdit.descripcion));
            setEmpleado_selected(String(cisternaToEdit.empleadoID));
        }
    }, [cisternaToEdit])

    const handleTamanioGalonesChange = (e) => {
        setTamanioGalones(e.target.value);
    }

    const handlePlacaChange = (e) => {
        setPlaca(e.target.value);
    }

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    }

    const handleEmpleadoChange = (e) => {
        setEmpleado_selected(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const empleadoSeleccionado = empleado.find((empleado) => empleado.id === Number(empleado_selected));

        if (cisternaToEdit) {
            if (empleadoSeleccionado) {
                const updateCisterna = {
                    id: cisternaToEdit.id,
                    tamanioGalones: Number(tamanioGalones),
                    descripcion: descripcion,
                    placa: placa,
                    empleadoID: Number(empleadoSeleccionado.id),
                    empleados: empleadoSeleccionado
                }
                onCreate(updateCisterna);
            }
        }
        else {
            if (empleadoSeleccionado) {
                const nuevaCisterna = {
                    tamanioGalones: Number(tamanioGalones),
                    descripcion: descripcion,
                    placa: placa,
                    empleadoID: Number(empleado_selected),
                    empleados: empleadoSeleccionado
                }
                onCreate(nuevaCisterna);
            }
        }
    }

    return (
        <div className='form-container'>
            <form className="form-group" onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="galones">Tamanio de Galones</label>
                    <input className="input-field" type="number" id="galones" value={tamanioGalones} onChange={handleTamanioGalonesChange} />
                </div>
                <div>
                    <label className="label" htmlFor="descripcion">Descripcion</label>
                    <input className="input-field" type="text" id="descripcion" value={descripcion} onChange={handleDescripcionChange} />
                </div>
                <div>
                    <label className="label" htmlFor="placa">Placa</label>
                    <input className="input-field" type="text" id="placa" value={placa} onChange={handlePlacaChange} />
                </div>
                <div>
                    <label className="label" htmlFor="empleado">Selecciona un empleado</label>
                    <select className='select-field' id="empleado" value={empleado_selected} onChange={handleEmpleadoChange}>
                        <option value="">Selecciona un empleado</option>
                        {empleado && empleado.map((opcion) => (
                            <option key={opcion.id} value={opcion.id}>{`${opcion.nombre} ${opcion.apellido}`}</option>
                        ))}
                    </select>
                </div>
                <div className='div-submit-buttons'>
                    <button className="data-card-button data-card-button-edit" type="submit">{cisternaToEdit ? 'Guardar cambios' : 'Crear Cistena'}</button>
                    <button className="data-card-button data-card-button-delete" onClick={handleCancelEdit}>Cancelar</button>
                </div>
            </form>
        </div>
    )




}