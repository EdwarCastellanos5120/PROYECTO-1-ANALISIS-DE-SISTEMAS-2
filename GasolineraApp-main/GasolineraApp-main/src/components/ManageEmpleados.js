import React, { useState, useEffect } from 'react';
import { getEmpleados, updateEmpleado, deleteEmpleado, createEmpleado } from '../Api/consumoEmpleados';
import { Table } from '../components/TableCard';
import { ButtonModel } from '../components/ButtonModel';
import { FormEmpleado } from '../components/FormEmpleados';
import GenerarPDF from './modelPDF';

export const ManageEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [buttonEditForm, setButtonEditForm] = useState(false);
    const [empleadoToEdit, setEmpleadoToEdit] = useState(null);

    useEffect(() => {
        getEmpleados()
            .then((data) => {
                setEmpleados(data);
            })
    }, [])

    const handleDelete = (id) => {
        deleteEmpleado(id)
            .then(() => {
                setEmpleados((prevEmpleados) => prevEmpleados.filter((empleado) => empleado.id !== id));
            }).catch((err) => console.error(err));
    }

    const handleCreate = (data) => {
        console.log(data);
        createEmpleado(data)
            .then((response) => {
                setEmpleados((prevEmpleados) => [...prevEmpleados, response]);
                console.log('Empleado creado:', response);
            })
            .catch((err) => console.error(err));
    };

    const handleEdit = (empleadoToEdit) => {
        setEmpleadoToEdit(empleadoToEdit);
        setButtonEditForm(true);
    }

    const handleEditCancel = () => {
        setEmpleadoToEdit(null);
        setButtonEditForm(false);
    }



    const handleUpdate = (empleadoUpdate) => {
        const id = Number(empleadoUpdate.id);
        updateEmpleado(id, empleadoUpdate)
            .then((data) => {
                setButtonEditForm(false);
                setEmpleados((prevEmpleados) => prevEmpleados.map((empleado) => empleado.id === id ? data : empleado))
            }).catch((err) => console.error(err));
    }

    return (
        <>
            <h1>Manage Empleados</h1>
            <ButtonModel
                Form={FormEmpleado}
                handleCreate={handleCreate}
                textButton={'Empleado'}
            />
            <GenerarPDF
                pdfName={'ReporteEmpleados'}
                titulo={'Administracion de Empleados'}
                data={empleados}
                descripcion={'Reporte de Empleados'}
                columnas={['Nombre', 'Apellido', 'DPI', 'Telefono', 'Correo', 'Direccion', 'Salario', 'Cargo', 'Departamento']}
                propiedades={['nombre', 'apellido', 'dpi', 'telefono', 'correo', 'direccion', 'salario', 'cargo', 'departamento']}
            />
            {
                buttonEditForm && 
                <FormEmpleado
                    onCreate={handleUpdate}
                    empleadoToEdit={empleadoToEdit}
                    handleCancelEdit={handleEditCancel}
                />
            }
            <Table
                data={empleados}
                columns={['ID', 'Nombre', 'Apellido', 'DPI', 'Telefono', 'Correo', 'Direccion', 'Salario', 'Cargo', 'Departamento']}
                columnsBD={['id', 'nombre', 'apellido', 'dpi', 'telefono', 'correo', 'direccion', 'salario', 'cargo', 'departamento']}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    )

}