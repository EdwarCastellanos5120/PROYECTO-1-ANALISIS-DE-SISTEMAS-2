import React, { useEffect, useState } from "react";
import {
  getLimpieza,
  crearLimpieza,
  actualizarLimpieza,
  eliminarLimpieza,
} from "../Api/consumoLimpieza";
import "../Styles/DataCard.css";
import CreateLimpiezaModal from "../components/modalCreateLimpieza";

const DataCard = () => {
  const [limpieza, setLimpieza] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [editLimpieza, setEditLimpieza] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Obtener los datos de limpieza cuando se monta el componente
    getLimpieza()
      .then((data) => {
        setLimpieza(data);
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
    // Limpiar los datos temporales del modal cuando se cierra
    setDescripcion("");
    setFecha("");
  };
  const handleCreate = (limpiezaData) => {
    // Verificar si la variable limpiezaData está definida
    if (!limpiezaData) {
      // Si la variable limpiezaData no está definida, devolver un error
      return console.error("La variable limpiezaData no está definida");
    }
  
    // Validar que los campos requeridos estén llenos antes de crear una nueva limpieza
    if (limpiezaData.descripcion.trim() !== "" && limpiezaData.fecha.trim() !== "") {
      // Crear la limpieza
      crearLimpieza(limpiezaData)
        .then((newLimpieza) => {
          // Actualizar el estado con la nueva limpieza
          setLimpieza([...limpieza, newLimpieza]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  

  const handleEdit = (Limpieza) => {
    // Establecer la limpieza que se está editando y cargar sus datos en los campos de entrada
    setEditLimpieza(Limpieza);
    setDescripcion(Limpieza.descripcion);
    setFecha(Limpieza.fecha);
  };

  const handleUpdate = () => {
    // Validar que se esté editando una limpieza y que los campos tengan valores válidos
    if (editLimpieza && descripcion.trim() !== "" && fecha.trim() !== "") {
      // Actualizar la limpieza
      actualizarLimpieza(editLimpieza.id, {
        descripcion: descripcion,
        fecha: fecha,
        tanqueID: editLimpieza.tanque.id,
      })
        .then((updatedLimpieza) => {
          // Actualizar el estado con la limpieza actualizada
          const updatedLimpiezas = limpieza.map((Limpieza) =>
            Limpieza.id === updatedLimpieza.id ? updatedLimpieza : Limpieza
          );
          setLimpieza(updatedLimpiezas);
          setEditLimpieza(null);
          setDescripcion("");
          setFecha("");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleDelete = (LimpiezaId) => {
    // Eliminar la limpieza por su ID
    eliminarLimpieza(LimpiezaId)
      .then(() => {
        // Actualizar el estado excluyendo la limpieza eliminada
        const updatedLimpiezas = limpieza.filter(
          (Limpieza) => Limpieza.id !== LimpiezaId
        );
        setLimpieza(updatedLimpiezas);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="data-card-container">
      <h1 className="data-card-title">Solicitudes de Limpieza</h1>
      <table className="data-card-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {limpieza.map((Limpieza) => (
            <tr key={Limpieza.id}>
              <td>{Limpieza.id}</td>
              <td>
                {editLimpieza === Limpieza ? (
                  <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                ) : (
                  Limpieza.descripcion
                )}
              </td>
              <td>
                {editLimpieza === Limpieza ? (
                  <input
                    type="text"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                ) : (
                  Limpieza.fecha
                )}
              </td>
              <td>
                {editLimpieza === Limpieza ? (
                  <>
                    <button
                      className="data-card-button data-card-button-save"
                      onClick={handleUpdate}
                    >
                      Guardar
                    </button>
                    <button
                      className="data-card-button data-card-button-cancel"
                      onClick={() => setEditLimpieza(null)}
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="data-card-button data-card-button-edit"
                      onClick={() => handleEdit(Limpieza)}
                    >
                      Editar
                    </button>
                    <button
                      className="data-card-button data-card-button-delete"
                      onClick={() => handleDelete(Limpieza.id)}
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
          Crear Nueva Limpieza
        </button>
        <button
          className="data-card-button data-card-button-cancel"
          onClick={() => (window.location.href = "/home")}
        >
          Cancelar
        </button>
      </div>
      {isModalOpen && (
        <CreateLimpiezaModal
          onClose={closeModal}
          onCreatelimpieza={handleCreate} // Asegúrate de que esta línea sea correcta
          descripcion={descripcion}
          fecha={fecha}
        />
      )}
    </div>
  );
};

export default DataCard;
