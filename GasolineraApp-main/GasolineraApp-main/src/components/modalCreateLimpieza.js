import React, { useState } from "react";
import "../Styles/DataCard.css";

const CreateLimpiezaModal = ({ onClose, onCreatelimpieza }) => {
  const [limpiezaData, setLimpiezaData] = useState({
    descripcion: "",
    fecha: "",
  });

  const handleSubmit = () => {
    onCreatelimpieza({
      descripcion: limpiezaData.descripcion,
      fecha: limpiezaData.fecha,
    });
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLimpiezaData({
      ...limpiezaData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <h2>Programar Limpieza</h2>
        <label className="label" htmlFor="descripcion">
          Descripcion
        </label>
        <input
          type="text"
          placeholder="Descripción"
          className="input-field"
          name="descripcion"
          value={limpiezaData.descripcion}
          onChange={handleInputChange}
        />

        <label className="label" htmlFor="fechaInicio">Fecha de Inicio</label>
        <input
          type="text"
          placeholder="Fecha de Inicio"
          className="input-field"
          name="fecha"
          value={limpiezaData.fecha}
          onChange={handleInputChange}
        />

        <button onClick={handleSubmit} className="button">
          Crear
        </button>
        <button onClick={onClose} className="data-card-button data-card-button-cancel">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default CreateLimpiezaModal;