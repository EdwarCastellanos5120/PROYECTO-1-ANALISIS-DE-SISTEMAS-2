import React from "react";
import "../Styles/DataCard.css";
export const Table = ({ columns, data, columnsBD, handleDelete, handleEdit}) => {

    return (
        <>
            <table className="data-card-table">
                <thead>
                    <tr>
                        {columns && columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => (
                        <tr key={item.id}>
                            {columnsBD && columnsBD.map((column, index) => (
                                <td key={index}>{item[column]}</td>
                            ))}
                            <td>
                                <button  className="data-card-button data-card-button-edit" onClick={()=> handleEdit(item)}>Editar</button>
                                <button  className="data-card-button data-card-button-delete" onClick={()=> handleDelete(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};