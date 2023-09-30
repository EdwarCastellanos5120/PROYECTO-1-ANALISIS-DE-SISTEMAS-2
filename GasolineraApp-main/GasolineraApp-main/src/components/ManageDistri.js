import React, { useState, useEffect } from "react";
import { createDistribucion, delDistribucion, getDistribucion, updateDistribucion } from '../Api/consumoDistribucion'
import { Table } from '../components/TableCard'
import { FormDistri } from '../components/FormDistri';
import { ButtonModel } from '../components/ButtonModel'
import GenerarPDF from './modelPDF';
export const ManageDistri = () => {
    const [distribucion, setDistribucion] = useState([]);
    const [buttonEditForm, setButtonEditForm] = useState(false);
    const [distribucionToEdit, setDistribucionToEdit] = useState(null);

    const flattenData = (data) => {
        const flattenedData = [];

        for (const item of data) {
            const flattenedItem = {
                id: item.id,
                fecha: item.fecha,
                destinoID: (item.destino && item.destino.id),
                cisternaID: (item.cisterna && item.cisterna.id),
                tanqueAlmacenamientoID: (item.tanqueAlmacenamiento && item.tanqueAlmacenamiento.id) || null,
                destino_nombre: (item.destino && item.destino.nombre) || null,
                cisterna_tamanioGalones: (item.cisterna && item.cisterna.tamanioGalones) || null,
                cisterna_placa: (item.cisterna && item.cisterna.placa) || null,
                empleado_nombre: (item.cisterna.empleados && item.cisterna.empleados.nombre) || null,
                empleado_apellido: (item.cisterna.empleados && item.cisterna.empleados.apellido) || null,
                empleado_dpi: (item.cisterna.empleados && item.cisterna.empleados.dpi) || null,
                empleado_cargo: (item.cisterna.empleados && item.cisterna.empleados.cargo) || null,
                empleado_departamento: (item.cisterna.empleados && item.cisterna.empleados.departamento) || null,
                empleado_telefono: (item.cisterna.empleados && item.cisterna.empleados.telefono) || null,
                galones: (item.tanqueAlmacenamiento && item.tanqueAlmacenamiento.capacidadGalones)
            };
            flattenedData.push(flattenedItem);
        }

        return flattenedData;
    };
    useEffect(() => {
        getDistribucion()
            .then((data) => {
                const result = flattenData(data);
                setDistribucion(result);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleCreate = (data) => {
        createDistribucion(data)
            .then((distribucionCreada) => {
                setDistribucion((prevDistribucion) => [...prevDistribucion, distribucionCreada]);
            })
    };

    const handleDelete = (id) => {
        delDistribucion(id)
            .then((data) => {
                const result = flattenData(data);
                setDistribucion(result);
            })
            .catch((err) => console.error(err));
    }

    const handleEdit = (editDistribucion) => {
        setDistribucionToEdit(editDistribucion);
        setButtonEditForm(true);

    }

    const handleCancelEdit = () => {
        setDistribucionToEdit(null);
        setButtonEditForm(false);
    }

    const handleUpdate = (distribucion) => {
        const id = Number(distribucion.id);

        // Llama a la función para actualizar la distribución
        updateDistribucion(id, distribucion)
            .then((updatedData) => {
                setButtonEditForm(false);

                // Actualiza el estado con los datos actualizados
                setDistribucion((prevDistribuciones) =>
                    prevDistribuciones.map((dist) =>
                        dist.id === id ? { ...dist, ...updatedData } : dist
                    )
                );
            })
            .catch((err) => console.error('Error al actualizar distribución:', err));
    };

    return (
        <>
            <h1>ManageDistri</h1>
            <ButtonModel
                Form={FormDistri}
                handleCreate={handleCreate}
                modelName={'Distribucion'}
            />
            <GenerarPDF
                pdfName={'ReporteDistibucion'}
                titulo={'Administracion de distribuciones'}
                data={distribucion}
                descripcion={'Reporte de distribuciones'}
                columnas={['Fecha', 'Destino', 'Tamaño Cisterna', 'Placa Cisterna', 'Nombre Empleado', 'Apellido Empleado', 'DPI Empleado', 'Cargo Empleado', 'Departamento Empleado', 'Telefono Empleado', 'Galones']}
                propiedades={['fecha', 'destino_nombre', 'cisterna_tamanioGalones', 'cisterna_placa', 'empleado_nombre', 'empleado_apellido', 'empleado_dpi', 'empleado_cargo', 'empleado_departamento', 'empleado_telefono', 'galones']}
            />
            {
                buttonEditForm && 
                (<FormDistri
                    distribucionToEdit={distribucionToEdit}
                    handleCancelEdit={handleCancelEdit}
                    onCreate={handleUpdate}
                />)
            }
            <Table
                data={distribucion}
                columns={['ID', 'Fecha', 'Destino', 'Tamaño Cisterna', 'Placa Cisterna', 'Nombre Empleado', 'Apellido Empleado', 'DPI Empleado', 'Cargo Empleado', 'Departamento Empleado', 'Telefono Empleado', 'Galones']}
                columnsBD={['id', 'fecha', 'destino_nombre', 'cisterna_tamanioGalones', 'cisterna_placa', 'empleado_nombre', 'empleado_apellido', 'empleado_dpi', 'empleado_cargo', 'empleado_departamento', 'empleado_telefono', 'galones']}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </>
    )
};