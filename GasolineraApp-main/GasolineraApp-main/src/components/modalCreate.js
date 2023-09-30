// CreatePromotionModal.js
import React, { useState } from "react";
import "../Styles/DataCard.css";

const CreatePromotionModal = ({ onClose, onCreatePromotion }) => {
  const [promotionData, setPromotionData] = useState({
    descripcion: "",
    precio: "",
    cantidadDisponible: "",
    fechaInicio: "",
    fechaFin: "",
  });

  const handleSubmit = () => {
    onCreatePromotion(promotionData);
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPromotionData({
      ...promotionData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <div className='form-group'>
        <h2>Crear Nueva Promoción</h2>
        <label className='label' htmlFor="descripcion">Descripcion</label>
        <input
          type="text"
          placeholder="Descripción"
          className="input-field"
          name="descripcion"
          value={promotionData.descripcion}
          onChange={handleInputChange}
        />
        <label className='label' htmlFor="precio">Precio</label>
        <input
          type="text"
          placeholder="Precio"
          className="input-field"
          name="precio"
          value={promotionData.precio}
          onChange={handleInputChange}
        />
        <label className='label' htmlFor="cantidadDisponible">Cantidad</label>
        <input
          type="text"
          placeholder="Cantidad"
          className="input-field"
          name="cantidadDisponible"
          value={promotionData.cantidadDisponible}
          onChange={handleInputChange}
        />
        <label className='label' htmlFor="fechaInicio">Fecha de Inicio</label>
        <input
          type="text"
          placeholder="Fecha de Inicio"
          className="input-field"
          name="fechaInicio"
          value={promotionData.fechaInicio}
          onChange={handleInputChange}
        />
        <label className='label' htmlFor="fechaFin">Fecha de Fin</label>
        <input
          type="text"
          placeholder="Fecha de Fin"
          className="input-field"
          name="fechaFin"
          value={promotionData.fechaFin}
          onChange={handleInputChange}
        />

        <button onClick={handleSubmit} className="button">Crear</button>
        <button onClick={onClose} className="data-card-button data-card-button-cancel">Cancelar</button>
      </div>
    </div>
  );
};

export default CreatePromotionModal;
