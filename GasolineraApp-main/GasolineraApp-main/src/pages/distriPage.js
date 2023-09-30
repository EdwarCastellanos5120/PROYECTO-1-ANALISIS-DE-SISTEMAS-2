import React, { useState } from "react";
import '../Styles/DistriPage.css'
import "../Styles/DataCard.css";
import {
    Bombas,
    ManageCisterna,
    ManageDistri,
    ManageEmpleados,
    ManageGasollina,
    ManageTanques,
    ManageDestinos
} from '../components/agregatorComponents'


const DistriPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleButtonClick = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <div className="distri-page-container">
            <div className="buttons-container">
                <button className="data-card-button data-card-button-menu" onClick={() => handleButtonClick('Destinos')}>Destinos</button>
                <button className="data-card-button data-card-button-menu" onClick={() => handleButtonClick('Bombas')}>Bombas</button>
                <button className="data-card-button data-card-button-menu" onClick={() => handleButtonClick('Distribucion')}>Distribucion</button>
                <button className="data-card-button data-card-button-menu" onClick={() => handleButtonClick('Gasolina')}>Gasolina</button>
                <button className="data-card-button data-card-button-menu" onClick={() => handleButtonClick('Cisterna')}>Cisterna</button>
                <button className="data-card-button data-card-button-menu" onClick={() => handleButtonClick('Empleados')}>Empleados</button>
                <button className="data-card-button data-card-button-menu" onClick={() => handleButtonClick('Tanques')}>Tanques</button>
            </div>

            <div className="content-container">
                {selectedOption === 'Destinos' && (
                    <div className="data-card-container">
                        <ManageDestinos />
                    </div>
                )}

                {selectedOption === 'Bombas' && (
                    <div className="data-card-container">
                        <Bombas />
                    </div>
                )

                }

                {selectedOption === 'Distribucion' && (
                    <div className="data-card-container">
                        <ManageDistri />
                    </div>
                )}

                {selectedOption === 'Gasolina' && (
                    <div className="data-card-container">
                        <ManageGasollina />
                    </div>
                )}
                {
                    selectedOption === 'Cisterna' && (
                        <div className="data-card-container">
                            <ManageCisterna />
                        </div>
                    )}
                {
                    selectedOption === 'Empleados' && (
                        <div className="data-card-container">
                            <ManageEmpleados />
                        </div>
                    )}
                {
                    selectedOption === 'Tanques' && (
                        <div className="data-card-container">
                            <ManageTanques />
                        </div>
                    )}
            </div>
        </div>
    );
};

export default DistriPage;