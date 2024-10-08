import React from 'react';

interface InputErrorMessageProps {
    mensaje: string;
    tipoValidacion: 'numerico' | 'alfanumerico' | 'email' | undefined;
}

const InputErrorMessage = ({ mensaje, tipoValidacion } : InputErrorMessageProps) => {
    const getErrorMessage = () => {
        switch (tipoValidacion) {
            case 'numerico':
                return 'Por favor, ingrese solo números.';
            case 'alfanumerico':
                return 'Por favor, ingrese solo caracteres alfanuméricos.';
            case 'email':
                return 'Por favor, ingrese un email válido.';
            default:
                return mensaje;
        }
    };

    return (
        <div className='mt-1'>
            {getErrorMessage()}
        </div>
    );
};

export default InputErrorMessage;
