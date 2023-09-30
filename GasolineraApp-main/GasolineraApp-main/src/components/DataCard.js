import React from "react";
import styled from "styled-components";


const PromotionsContainer = styled.div`
    text-align: center;
    padding: 20px;
    background-color: #0074E4; /* Color de fondo para la página de promociones */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const PromotionsTitle = styled.h1`
    font-size: 2rem;
    margin: 20px 0;
    color: #fff; /* Color del texto */
    `;

const PromotionsPage = () => {
    return (
        <PromotionsContainer>
        <PromotionsTitle>Promociones</PromotionsTitle>
        </PromotionsContainer>
    );
    }

export default PromotionsPage;