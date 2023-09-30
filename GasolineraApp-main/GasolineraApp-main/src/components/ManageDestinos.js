import React, { useState, useEffect } from "react";
import { createDestino, getDestinos, delDestino, updateDestino } from '../Api/consumoDestino';
import '../Styles/DistriPage.css'
import "../Styles/DataCard.css";
import { Table } from '../components/TableCard';
import { ButtonModel } from '../components/ButtonModel'
import { FormDestino } from '../components/FormDestino'
import GenerarPDF from './modelPDF';


export const ManageDestinos = () => {
    const [destinos, setDestinos] = useState([]);
    const [buttonEditForm, setButtonEditForm] = useState(false);
    const [destinoToEdit, setDestinoToEdit] = useState(null);

    const handleCreate = (nuevoDestino) => {
        createDestino(nuevoDestino)
            .then((destinoCreado) => {
                setDestinos((prevDestinos) => [...prevDestinos, destinoCreado]);
            })
            .catch((err) => console.error(err));
    };

    const handleDelete = (id) => {
        delDestino(id)
            .then(() => {
                setDestinos((prevDestinos) => prevDestinos.filter((destino) => destino.id !== id));
            })
    };

    const handleEdit = (editDestino) => {
        setDestinoToEdit(editDestino);
        setButtonEditForm(true);
    };

    const handleCancelEdit = () => {
        setDestinoToEdit(null);
        setButtonEditForm(false);  // Oculta el botón "Editar" después de cancelar
    };
    

    const handleUpdateDestino = (destinoEditado) => {
        const id = Number(destinoEditado.id);
        updateDestino(id, destinoEditado)
            .then((updateDestino) => {
                setButtonEditForm(false);
                setDestinos((prevDestinos) => prevDestinos.map((destino) => destino.id === id ? updateDestino : destino));
            }).catch((err) => console.error(err));
    }

    useEffect(() => {
        getDestinos()
            .then((data) => {
                setDestinos(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1>Manage Destinos</h1>
            <ButtonModel
                Form={FormDestino}
                handleCreate={handleCreate}
                modelName={'Destino'}

            />
            <GenerarPDF
                data={destinos}
                titulo={'Administracion de cisternas'}
                descripcion={'Hoja para administrar fisicamente las cisternas'}
                pdfName={'ReporteDestinos'}
                columnas={['Nombre', 'Direccion', 'Descripcion']}
                propiedades={['nombre', 'direccion', 'descripcion']}
            />
            {
                buttonEditForm &&
                <FormDestino
                    onCreate={handleUpdateDestino}
                    destinoToEdit={destinoToEdit}
                    handleCancelEdit={handleCancelEdit}
                />
            }
            <Table
                columns={['Nombre', 'Direccion', 'Descripcion']}
                data={destinos} columnsBD={['nombre', 'direccion', 'descripcion']}
                modelName='Destino'
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    )
}