import React, { useEffect, useState } from "react";
import {
  getPromociones,
  crearPromocion,
  actualizarPromocion,
  eliminarPromocion,
} from "../Api/consumoPromociones";
import "../Styles/DataCard.css";
import CreatePromotionModal from "../components/modalCreate"; // Asegúrate de proporcionar la ruta correcta al componente
import ReportModal from "../components/modalReporte"; // Asegúrate de proporcionar la ruta correcta al componente
import '../Styles/modalReporteStyles.css';
import jsPDF from 'jspdf';
import { format } from 'date-fns';

const DataCard = () => {
  const [isOpenM, setIsOpenM] = useState(false);
  const [promociones, setPromociones] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [editPromocion, setEditPromocion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempPromotionData, setTempPromotionData] = useState({
    descripcion: "",
    precio: "",
    cantidadDisponible: "",
    fechaInicio: "",
    fechaFin: "",
  });

  useEffect(() => {
    getPromociones()
      .then((data) => {
        setPromociones(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Limpia los datos temporales del modal cuando se cierra
    setTempPromotionData({
      descripcion: "",
      precio: "",
      cantidadDisponible: "",
      fechaInicio: "",
      fechaFin: "",
    });
  };

  const handleCreate = (promotionData) => {
    if (
      promotionData.descripcion.trim() !== "" &&
      promotionData.precio.trim() !== "" &&
      promotionData.cantidadDisponible.trim() !== "" &&
      promotionData.fechaInicio.trim() !== "" &&
      promotionData.fechaFin.trim() !== ""
    ) {
      crearPromocion(promotionData)
        .then((newPromocion) => {
          setPromociones([...promociones, newPromocion]);
          closeModal();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleEdit = (promocion) => {
    setEditPromocion(promocion);
    setDescripcion(promocion.descripcion);
    setPrecio(promocion.precio);
    setCantidad(promocion.cantidadDisponible);
    setFechaInicio(promocion.fechaInicio);
    setFechaFin(promocion.fechaFin);
  };

  const handleUpdate = () => {
    if (
      editPromocion &&
      descripcion !== null &&
      descripcion.trim() !== "" &&
      precio !== null &&
      String(precio).trim() !== "" &&
      cantidad !== null &&
      String(cantidad).trim() !== "" &&
      fechaInicio !== null &&
      fechaInicio.trim() !== "" &&
      fechaFin !== null &&
      fechaFin.trim() !== ""
    ) {
      actualizarPromocion(editPromocion.id, {
        descripcion: descripcion,
        precio: parseFloat(precio),
        cantidadDisponible: parseInt(String(cantidad)),
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
      })
        .then((updatedPromocion) => {
          const updatedPromociones = promociones.map((promocion) =>
            promocion.id === updatedPromocion.id ? updatedPromocion : promocion
          );
          setPromociones(updatedPromociones);
          setEditPromocion(null);
          setDescripcion("");
          setPrecio("");
          setCantidad("");
          setFechaInicio("");
          setFechaFin("");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleDelete = (promocionId) => {
    eliminarPromocion(promocionId)
      .then(() => {
        const updatedPromociones = promociones.filter(
          (promocion) => promocion.id !== promocionId
        );
        setPromociones(updatedPromociones);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePrintReport = (startDate, endDate) => {
    // Filtra las promociones que están dentro del rango de fechas
    const promocionesEnRango = promociones.filter((promocion) => {
      const promocionFechaInicio = new Date(promocion.fechaInicio);
      const promocionFechaFin = new Date(promocion.fechaFin);
  
      return (
        promocionFechaInicio >= startDate && promocionFechaFin <= endDate
      );
    });
  
    // Crea un nuevo documento PDF
    const doc = new jsPDF();
    doc.text('Informe de Promociones', 10, 10);
  
    // Agrega las promociones al PDF
    let y = 30;
    promocionesEnRango.forEach((promocion) => {
      doc.text(`ID: ${promocion.id}`, 10, y);
      doc.text(`Descripción: ${promocion.descripcion}`, 10, y + 10);
      doc.text(`Precio: ${promocion.precio}`, 10, y + 20);
      doc.text(`Cantidad: ${promocion.cantidadDisponible}`, 10, y + 30);
      doc.text(`Fecha de Inicio: ${promocion.fechaInicio}`, 10, y + 40);
      doc.text(`Fecha de Fin: ${promocion.fechaFin}`, 10, y + 50);
      y += 70;
    });
  
    // Guarda el PDF con un nombre único (puedes personalizar el nombre)
    const pdfFileName = `Informe_Promociones_${format(startDate, 'yyyyMMdd')}_${format(endDate, 'yyyyMMdd')}.pdf`;
    doc.save(pdfFileName);
  
    // Realiza cualquier otra lógica adicional aquí
  };
  

  


  return (
    <div className="data-card-container">
      <h1 className="data-card-title">Promociones</h1>
      <table className="data-card-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {promociones.map((promocion) => (
            <tr key={promocion.id}>
              <td>{promocion.id}</td>
              <td>
                {editPromocion === promocion ? (
                  <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                ) : (
                  promocion.descripcion
                )}
              </td>
            
              <td>
                {editPromocion === promocion ? (
                  <input
                    type="text"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                  />
                ) : (
                  promocion.cantidadDisponible
                )}
              </td>
              <td>
                {editPromocion === promocion ? (
                  <input
                    type="text"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                  />
                ) : (
                  promocion.fechaInicio
                )}
              </td>
              <td>
                {editPromocion === promocion ? (
                  <input
                    type="text"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                  />
                ) : (
                  promocion.fechaFin
                )}
              </td>
              <td>
                {editPromocion === promocion ? (
                  <>
                    <button
                      className="data-card-button data-card-button-save"
                      onClick={handleUpdate}
                    >
                      Guardar
                    </button>

                    <button
                      className="data-card-button data-card-button-cancel"
                      onClick={() => setEditPromocion(null)}
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="data-card-button data-card-button-edit"
                      onClick={() => handleEdit(promocion)}
                    >
                      Editar
                    </button>
                    <button
                      className="data-card-button data-card-button-delete"
                      onClick={() => handleDelete(promocion.id)}
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={openModal}
          className="data-card-button data-card-button-create"
        >
          Crear Nueva Promoción
        </button>
        <button
          className="data-card-button data-card-button-reports"
          onClick={()=>{setIsOpenM(true)}} // Abre el modal de reportes
        >
          Reportes
        </button>
        <button
          className="data-card-button data-card-button-cancel"
          onClick={() => window.location.href="/home"}
        >
          Cancelar
        </button>
        <div className="custom-modal-container">
        <ReportModal
          isOpen={isOpenM}
          onRequestClose={() => setIsOpenM(false)}
          onPrintReport={handlePrintReport}
          
        />
        </div>
      </div>
      {isModalOpen && (
        <CreatePromotionModal
          onClose={closeModal}
          onCreatePromotion={handleCreate}
          // Pasa los datos temporales al modal
          descripcion={tempPromotionData.descripcion}
          cantidad={tempPromotionData.cantidadDisponible}
          fechaInicio={tempPromotionData.fechaInicio}
          fechaFin={tempPromotionData.fechaFin}
        />
      )}
    </div>
  );
};

export default DataCard;
