import React, { useState } from "react";
import '../Styles/DataCard.css'

export const ButtonModel = ({ handleCreate, stringButton, Form }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prevIsOpen) => !prevIsOpen);
    };
    const handleCancelar =()=>{
        setIsMenuOpen(false);
    }

    const handleDestinoCreate = (newObject) => {
        handleCreate(newObject)

        setIsMenuOpen(false);
    };
    return (
        <div >
            <button onClick={handleMenuToggle} className="data-card-button data-card-button-create">Crear {stringButton}</button>
            {isMenuOpen && (
                <Form onCreate={handleDestinoCreate}
                handleCancelEdit={handleCancelar} />

            )
            }

        </div>
    )
}