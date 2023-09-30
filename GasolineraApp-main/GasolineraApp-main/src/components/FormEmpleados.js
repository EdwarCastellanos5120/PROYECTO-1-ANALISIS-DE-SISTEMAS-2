import React, { useState, useEffect } from 'react';
import '../Styles/DataCard.css';

export const FormEmpleado = ({ onCreate, empleadoToEdit, handleCancelEdit }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dpi, setDpi] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [salario, setSalario] = useState('');
    const [cargo, setCargo] = useState('');
    const [departamento, setDepartamento] = useState('');

    useEffect(() => {
        if (empleadoToEdit) {
            setNombre(empleadoToEdit.nombre);
            setApellido(empleadoToEdit.apellido);
            setDpi(empleadoToEdit.dpi);
            setTelefono(empleadoToEdit.telefono);
            setCorreo(empleadoToEdit.correo);
            setDireccion(empleadoToEdit.direccion);
            setSalario(empleadoToEdit.salario);
            setCargo(empleadoToEdit.cargo);
            setDepartamento(empleadoToEdit.departamento);
        }
    }, [empleadoToEdit])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (empleadoToEdit) {
            const updateEmpleado = {
                id: empleadoToEdit.id,
                nombre: nombre,
                apellido: apellido,
                dpi: dpi,
                telefono: telefono,
                correo: correo,
                direccion: direccion,
                salario: Number(salario),
                cargo: cargo,
                departamento: departamento
            }

            onCreate(updateEmpleado);
        }
        else {
            const nuevoEmpleado = {
                nombre: nombre,
                apellido: apellido,
                dpi: dpi,
                telefono: telefono,
                correo: correo,
                direccion: direccion,
                salario: Number(salario),
                cargo: cargo,
                departamento: departamento
            }
            onCreate(nuevoEmpleado);
        }
    }

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    }

    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
    }

    const handleDpiChange = (e) => {
        setDpi(e.target.value);
    }

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value);
    }

    const handleCorreoChange = (e) => {
        setCorreo(e.target.value);
    }

    const handleDireccionChange = (e) => {
        setDireccion(e.target.value);
    }

    const handleSalarioChange = (e) => {
        setSalario(e.target.value);
    }

    const handleCargoChange = (e) => {
        setCargo(e.target.value);
    }

    const handleDepartamentoChange = (e) => {
        setDepartamento(e.target.value);
    }

    return (
        <div className='form-container'>
            <form className="form-group" onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="nombre">Ingresa nombre</label>
                    <input className="input-field" type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                    <label className="label" htmlFor="apellido">Ingresa apellido</label>
                    <input className="input-field" type="text" id="apellido" value={apellido} onChange={handleApellidoChange} />
                </div>
                <div>
                    <label className="label" htmlFor="dpi">Ingresa DPI</label>
                    <input className="input-field" type="text" id="dpi" value={dpi} onChange={handleDpiChange} maxLength={13} />
                </div>
                <div>
                    <label className="label" htmlFor="telefono">Ingresa telefono</label>
                    <input className="input-field" type="text" id="telefono" value={telefono} onChange={handleTelefonoChange} maxLength={8} />
                </div>
                <div>
                    <label className="label" htmlFor="correo">Ingresa correo</label>
                    <input className="input-field" type="email" id="correo" value={correo} onChange={handleCorreoChange} />
                </div>
                <div>
                    <label className="label" htmlFor="direccion">Ingresa direccion</label>
                    <input className="input-field" type="text" id="direccion" value={direccion} onChange={handleDireccionChange} />
                </div>
                <div>
                    <label className="label" htmlFor="salario">Ingresa salario</label>
                    <input className="input-field" type="number" id="salario" value={salario} onChange={handleSalarioChange} />
                </div>
                <div>
                    <label className="label" htmlFor="cargo">Ingresa cargo</label>
                    <input className="input-field" type="text" id="cargo" value={cargo} onChange={handleCargoChange} />
                </div>
                <div>
                    <label className="label" htmlFor="departamento">Ingresa departamento</label>
                    <input className="input-field" type="text" id="departamento" value={departamento} onChange={handleDepartamentoChange} />
                </div>
                <div className='div-submit-buttons'>
                    <button className="data-card-button data-card-button-edit" type="submit">{empleadoToEdit ? 'Guardar cambios' : 'Crear empleado'}</button>
                    <button className="button" type="data-card-button data-card-button-delete" onClick={handleCancelEdit}>Cancelar</button>
                </div>

            </form>
        </div>
    )


}