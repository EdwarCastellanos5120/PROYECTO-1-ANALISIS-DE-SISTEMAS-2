import React, { useState, useEffect } from "react";
import { deleteTanque, createTanque, updateTanque, getTanques } from '../Api/consumoTanques'
import { Table } from '../components/TableCard'
import { ButtonModel } from '../components/ButtonModel'
import { FormTanque } from '../components/FormTanque'
import GenerarPDF from './modelPDF';

export const ManageTanques = () => {
    const [tanques, setTanques] = useState([]);
    const [buttonEditForm, setButtonEditForm] = useState(false);
    const [tanqueToEdit, setTanqueToEdit] = useState(null);
    useEffect(() => {
        getTanques()
            .then((data) => {
                setTanques(data);
            })
    }, [])

    const handleEdit = (tanqueEdit) => {
        setTanqueToEdit(tanqueEdit);
        setButtonEditForm(true);
    }

    const handleCancelEdit =()=>{
        setTanqueToEdit(null);
        setButtonEditForm((prevButtonEditForm)=>!prevButtonEditForm);
    }

    const handleUpdate = (editTanqueTable) =>{
        const id = Number(editTanqueTable.id);
        updateTanque(id, editTanqueTable)
            .then((data) => {
                setButtonEditForm(false);
                setTanques((prevTanques) => prevTanques.map((tanque) => tanque.id === id ? data : tanque))
            }).catch((err) => console.error(err));
    }

    const handleDelete = (id) => {
        deleteTanque(id)
            .then(() => {
                setTanques((prevTanques) => prevTanques.filter((tanque) => tanque.id !== id));
            }).catch((err) => console.error(err));
    }

    const handleCreate = (data) => {
        createTanque(data)
            .then((response) => {
                setTanques((prevTanques) => [...prevTanques, response])
            }).catch((err) => console.error(err));
    }

    return (
        <>
            <h1>Manage Tanques</h1>
            <ButtonModel
                Form={FormTanque}
                handleCreate={handleCreate}
                stringButton={'Tanque'}
            />
            <GenerarPDF
                pdfName={'ReporteTanques'}
                titulo={'Administracion de Tanques'}
                data={tanques}
                descripcion={'Reporte de Tanques'}
                columnas={['Descripcion', 'Galones']}
                propiedades={["descripcion","capacidadGalones"]}
            />
            {
                buttonEditForm && (
                    <FormTanque
                        onCreate={handleUpdate}
                        tanqueToEdit={tanqueToEdit}
                        handleEditCancel={handleCancelEdit}
                    />
                )
            }
            <Table
                data={tanques}
                columns={['ID', 'Galones', 'Descripcion']}
                columnsBD={["id","capacidadGalones","descripcion"]}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </>
    )
}