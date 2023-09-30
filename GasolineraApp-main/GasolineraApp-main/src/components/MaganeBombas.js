import React, { useState, useEffect } from 'react';
import { Table } from './TableCard';
import { createBomba, delBomba, updateBomba, getBombas} from '../Api/consumoBombas'
import { ButtonModel } from '../components/ButtonModel'
import { FormBomba } from './FormBomba';
import GenerarPDF from './modelPDF';

export const Bombas = () => {
    const [bombas, setBombas] = useState([]);
    const [buttonEditForm, setButtonEditForm] = useState(false);
    const [bombaToEdit, setBombaToEdit] = useState(null);

    const flattenData = (data) => {
        const flattenedData = [];

        for (const item of data) {
            const flattenedItem = {
                id: item.id,
                nombre: item.nombre,
                ubicacion: item.ubicacion,
                capacidad: (item.tanqueAlmacenamiento && item.tanqueAlmacenamiento.capacidadGalones) || null,
                descripcion: (item.tanqueAlmacenamiento && item.tanqueAlmacenamiento.descripcion) || null
            };
            flattenedData.push(flattenedItem);
        }

        return flattenedData;
    };

    useEffect(() => {
        getBombas()
            .then((data) => {
                const result = flattenData(data);
                setBombas(result);
            }).catch((err) => console.error(err));
    }, [])

    const handleDelete = (id) => {
        delBomba(id)
            .then(() => {
                setBombas((prevBombas) => prevBombas.filter((bomba) => bomba.id !== id));
            })
    }
    const handleEdit = (editBomba) => {
        setBombaToEdit(editBomba);
        setButtonEditForm(true);
    }
    
    const handleCancelEdit =()=>{
        setBombaToEdit(null);
        setButtonEditForm(false);
    }

    const handleUpdate = (bomba) => {
        const id = Number(bomba.id);
        updateBomba(id, bomba)
            .then((bombaActualizada) => {
                setButtonEditForm(false);
                const result = flattenData([bombaActualizada]);
                setBombas((prevBombas) => prevBombas.map((bomba) => bomba.id === id ? result[0] : bomba));
            })
    };

    const handleCreate = (bomba) => {
        createBomba(bomba)
            .then((bombaCreada) => {
                const result = flattenData([bombaCreada]);
                setBombas((prevBombas) => [...prevBombas, ...result]);
            }).catch((err) => console.error(err));
    };
    return (
        <>
            <h1>Bombas de despacho</h1>
            <ButtonModel stringButton={'Bomba'}
                handleCreate={handleCreate}
                Form={FormBomba}
            />
            <GenerarPDF
                titulo={'Bombas de despacho'}
                descripcion={'Reporte de bombas de despacho'}
                pdfName={'ReporteBombas'}
                data={bombas}
                columnas={['ID','Nombre', 'Ubicacion', 'Capacidad', 'Descripcion']}
                propiedades={['id','nombre', 'ubicacion', 'capacidad', 'descripcion']}
            />
            {
                buttonEditForm &&
                <FormBomba
                    onCreate={handleUpdate}
                    bombaToEdit={bombaToEdit}
                    handleCancelEdit={handleCancelEdit}
                />
            }
            <Table
                columns={['Item', 'Nombre', 'Ubicacion', 'Capacidad', 'Descripcion']}
                data={bombas}
                columnsBD={['id', 'nombre', 'ubicacion', 'capacidad', 'descripcion']}
                handleDelete={handleDelete}
                
                handleEdit={handleEdit}
            />
        </>
    )
}
