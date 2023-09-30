import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';

const GenerarPDF = ({ pdfName, titulo, descripcion, columnas, data, propiedades }) => {
    console.log('Generacion del pdf')
    const generarPDF = () => {
        const doc = new jsPDF();

        // Obtener la fecha actual
        const fechaActual = new Date();
        const formattedDate = format(fechaActual, 'dd/MM/yyyy HH:mm');

        // Definir la posición inicial
        let yPos = 5;

        // Insertar imagen centrada
        const img = new Image();
        img.src = '/logo192.png';  // Reemplaza con la ruta de tu imagen (ruta relativa a la carpeta "public")

        // Espera a que la imagen se cargue antes de agregarla al PDF
        img.onload = function () {
            const imgWidth = 25;  // Ancho de la imagen
            const imgHeight = 25;  // Altura de la imagen
            const xPos = (doc.internal.pageSize.getWidth() - imgWidth) / 2;

            doc.addImage(img, 'PNG', xPos, yPos, imgWidth, imgHeight);

            // Ajustar la posición vertical después de agregar la imagen
            yPos += imgHeight + 10;

            // Agregar título
            doc.setFontSize(18);
            doc.text(titulo, 10, yPos);

            // Ajustar la posición vertical después de agregar el título
            yPos += 10;

            // Agregar descripción
            doc.setFontSize(12);
            doc.text(descripcion, 10, yPos);

            // Crear la tabla
            doc.autoTable({
                startY: yPos + 20,
                head: [columnas],
                body: data.map(obj => {
                    return propiedades.map(prop => obj[prop]);
                }),
            });

            const pdfNameWithDate = `${pdfName}_${formattedDate}.pdf`;

            // Agregar la fecha en el pie de página de cada página
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(10);
                doc.text(`Fecha de creación: ${formattedDate}`, 10, doc.internal.pageSize.height - 10);
            }
            doc.save(pdfNameWithDate);  // Guardar nuevamente para asegurar que las fechas se muestren en todas las páginas
        };
    };

    return (
        <>
            <button className='button-generar-pdf' onClick={generarPDF}>Generar PDF</button>
        </>
    );
};

export default GenerarPDF;
