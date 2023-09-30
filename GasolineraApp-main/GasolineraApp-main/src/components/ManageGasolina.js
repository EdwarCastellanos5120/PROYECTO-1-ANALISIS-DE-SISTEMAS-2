import React, { useState, useEffect } from 'react';

import { Table } from '../components/TableCard';
import { getGasolina, updateGasolina, createGasolina, delGasolina } from '../Api/consumoGasolina';
import { ButtonModel } from '../components/ButtonModel';
import { FormGasolina } from '../components/FormGasolina'
import GenerarPDF from './modelPDF';

export const ManageGasollina = () => {
    const [gasolina, setGasolina] = useState([]);
    const [buttonEditForm, setButtonEditForm] = useState(false);
    const [gasolinaToEdit, setGasolinaToEdit] = useState(null);

    const flattenData = (data) => {
        const flattenedData = [];

        for (const item of data) {
            const flattenedItem = {
                id: item.id,
                fecha: item.fecha,
                galones: item.cantidadGalones,
                bombaDespachoID: item.bombasDespachoID,
                cisternaID: item.cisternasID,
                tipo_transaccion: item.tipoTransaccion,
                bomba_nombre: (item.bombasDespacho && item.bombasDespacho.nombre) || null,
                bomba_ubicacion: (item.bombasDespacho && item.bombasDespacho.ubicacion) || null,
                bomba_capacidad: (item.bombasDespacho.tanqueAlmacenamiento && item.bombasDespacho.tanqueAlmacenamiento.capacidadGalones) || null,
                cisterna: (item.cisternas && item.cisternas.placa) || null,
                empleado: (item.cisternas.empleados && `${item.cisternas.empleados.nombre} ${item.cisternas.empleados.apellido}`) || null,
                empleado_cargo: (item.cisternas.empleados && item.cisternas.empleados.cargo) || null,
            };
            flattenedData.push(flattenedItem);
        }

        return flattenedData;
    };

    useEffect(() => {
        getGasolina()
            .then((data) => {
                const result = flattenData(data);
                setGasolina(result);
            })
    }, []);

    const handleEdit = (editGasolina) => {
        setGasolinaToEdit(editGasolina);
        setButtonEditForm(true);
    }

    const handleCancelEdit = () => {
        setGasolinaToEdit(null);
        setButtonEditForm(false);
    }
    const handleUpdate = (gasolina)=>{
        const id = Number(gasolina.id);
        updateGasolina(id,gasolina)
            .then((updateData) => {
                setButtonEditForm(false);
                setGasolina((prevGasolina)=>
                    prevGasolina.map((dist)=>
                    dist.id === id ? {...updateData, updateData} : dist)
                )
                
            })
            .catch((err) => console.error(err));
    }

    const handleDelete = (id) => {
        delGasolina(id)
        .then(()=>{
            setGasolina((prevGasolina) => prevGasolina.filter((gasolina) => gasolina.id !== id));   
        }).catch((err) => console.error(err));
    }
    

    const handleCreate = async (data) => {
        createGasolina(data)
        .then((response)=>{
            setGasolina((prevGasolina) => [...prevGasolina, response]);   
        }).catch((err) => console.error(err));

    }

    return (
        <>
            <h1>Control de Gasolina</h1>
            <ButtonModel
                Form={FormGasolina}
                handleCreate={handleCreate}
                stringButton={'Gasolina'}
            />
            <GenerarPDF
            data={gasolina}
            pdfName={'Reporte'}
            titulo={'Ingeso y Egreso de gasolina'}
            descripcion={'Reporte de Gasolina'}
            propiedades={['fecha','galones','tipo_transaccion','bomba_nombre','bomba_ubicacion','bomba_capacidad','cisterna','empleado','empleado_cargo']}
            columnas={['Fecha', 'Galones', 'Tipo Transaccion', 'Bomba', 'Ubicacion', 'Capacidad', 'Cisterna', 'Empleado', 'Cargo']}
            />
            {
                buttonEditForm && (
                    <FormGasolina
                        onCreate={handleUpdate}
                        gasolinaToEdit={gasolinaToEdit}
                        handleCancelEdit={handleCancelEdit}
                    />
                )
            }
            <Table
                data={gasolina}
                columns={['ID', 'Fecha', 'Galones', 'Tipo Transaccion', 'Bomba', 'Ubicacion', 'Capacidad', 'Cisterna', 'Empleado', 'Cargo']}
                columnsBD={['id', 'fecha', 'galones', 'tipo_transaccion', 'bomba_nombre', 'bomba_ubicacion', 'bomba_capacidad', 'cisterna', 'empleado', 'empleado_cargo']}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </>
    )
}