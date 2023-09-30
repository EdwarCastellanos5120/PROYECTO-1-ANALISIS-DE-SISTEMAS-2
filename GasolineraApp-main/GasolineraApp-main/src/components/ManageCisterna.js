import React,{useState, useEffect} from "react";
import {getCisternas, deleteCisterna, updateCisterna, createCisterna} from '../Api/consumoCisterna';
import {Table} from '../components/TableCard';
import {FormCisterna} from '../components/FormCisterna'
import {ButtonModel} from '../components/ButtonModel';
import GenerarPDF from "./modelPDF";

export const ManageCisterna = ()=>{
    const [cisternas, setCisternas] = useState([]);
    const [buttonEditForm, setButtonEditForm] = useState(false);
    const [cisternaToEdit, setCisternaToEdit] = useState(null);

    const flattenData = (data)=>{
        const flattenedData =[];
        for (const item of data){
            const flattenedItem ={
                id: item.id,
                placa: item.placa,
                capacidad: item.tamanioGalones,
                descripcion: item.descripcion,
                empleadoID: item.empleadoID,
                empleado_nombre: (item.empleados && `${item.empleados.nombre} ${item.empleados.apellido}`)||null,
                empleado_telefono: (item.empleados && item.empleados.telefono)||null,
                empleado_correo: (item.empleados && item.empleados.correo)||null,
                empleado_cargo: (item.empleados && item.empleados.cargo)
            }
            flattenedData.push(flattenedItem);
        }
        return flattenedData;
    }

    useEffect(()=>{
        getCisternas()
        .then((data)=>{
            const result = flattenData(data);
            setCisternas(result);
        })
    },[])

    const handleCreate = (data)=>{
        createCisterna(data)
        .then((response)=>{
            setCisternas((prevCisternas)=>[...prevCisternas, response])
        }).catch((err)=>console.error(err));
    }

    const handleDelete = (id)=>{
        deleteCisterna(id)
        .then(()=>{
            setCisternas((prevCisternas)=>prevCisternas.filter((cisterna)=>cisterna.id !== id));
        }).catch((err)=>console.error(err));
    }

    const handleEdit = (cisternaToEdit)=>{
        setCisternaToEdit(cisternaToEdit);
        setButtonEditForm(true);
    }

    const handleCancelEdit=()=>{
        setButtonEditForm(false);
        setCisternaToEdit(null);
    }

    const handleUpdate = (data)=>{
        const id = Number(data.id);
        updateCisterna(id,data)
        .then((data)=>{
            setButtonEditForm(false);
            setCisternas((prevCisternas)=>prevCisternas.map((cisterna)=> cisterna.id === id ? data : cisterna));
        }).catch((err)=>console.error(err));
    }

    return (
        <>
            <h1>Manage Cisterna</h1>
            <ButtonModel
                Form={FormCisterna}
                handleCreate={handleCreate}
                stringButton={'Cisterna'}
            />
            <GenerarPDF
            data={cisternas}
            pdfName={'ReporteCisternas'}
            titulo={'Administracion de cisternas'}
            descripcion={'Reporte de cisternas'}
            propiedades={['placa','capacidad','descripcion','empleado_nombre','empleado_telefono','empleado_correo','empleado_cargo']}
            columnas={['Placa','Galones','Descripcion','Empleado','Telefono','Correo','Cargo']}
            />
            {
                buttonEditForm &&
                <FormCisterna
                    onCreate={handleUpdate}
                    cisternaToEdit={cisternaToEdit}
                    handleCancelEdit={handleCancelEdit}
                />
            }
            <Table
                data={cisternas}
                columns={['Placa','Capacidad','Empleado', 'Telefono', 'Correo','Cargo']}
                columnsBD={['placa','capacidad','empleado_nombre','empleado_telefono','empleado_correo','empleado_cargo']}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    )



}

