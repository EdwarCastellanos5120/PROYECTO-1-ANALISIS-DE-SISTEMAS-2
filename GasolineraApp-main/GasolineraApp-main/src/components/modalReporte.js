//modal para reportes
import React, { useState } from 'react';
import Modal from 'react-modal';
import { format, addDays } from 'date-fns';


Modal.setAppElement('#root'); // Establece el elemento raíz de la aplicación para el modal

function ReportModal({ isOpen, onRequestClose, onPrintReport }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 7));

  const handleStartDateChange = (e) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEndDateChange = (e) => {
    setEndDate(new Date(e.target.value));
  };

  const handlePrintClick = () => {
    
    // Puedes realizar cualquier lógica adicional aquí antes de imprimir el informe
    //funcion que tome los 
    onPrintReport(startDate, endDate);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Seleccionar Rango de Fechas"
    >
      <h2>Seleccionar Rango de Fechas</h2>
      <div>
        <label>Fecha de inicio:</label>
        <input
          type="date"
          value={format(startDate, 'yyyy-MM-dd')}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label>Fecha de fin:</label>
        <input
          type="date"
          value={format(endDate, 'yyyy-MM-dd')}
          onChange={handleEndDateChange}
        />
      </div>
      <button onClick={handlePrintClick} className='btn-imprimir'>Imprimir Informe</button>
      <button onClick={onRequestClose} className='btn-cancelar' >Cancelar</button>

    </Modal>
  );
}

export default ReportModal;
