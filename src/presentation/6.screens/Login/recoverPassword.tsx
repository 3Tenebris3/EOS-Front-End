import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import MyButton from '../../components/myButton';
import ReCAPTCHA from 'react-google-recaptcha';
import TextFieldComponent from '../../components/TextField/TextFieldComponent';
import { Typography } from '@mui/material';

interface RecoverPasswordProps {
    onCancel: () => void; // Prop para volver al componente anterior
}

interface ImportMetaEnv {
    readonly VITE_RECAPTCHA_SITE_KEY: string;
    readonly VITE_REACT_APP_ENABLE_RECAPTCHA: string;
}

declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

const RecoverPassword: React.FC<RecoverPasswordProps> = ({ onCancel }) => {

    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [isVerified, setIsVerified] = useState(false);

    const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
    const ENABLE_RECAPTCHA = import.meta.env.VITE_REACT_APP_ENABLE_RECAPTCHA === 'true'; // Verifica si está habilitado

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        debugger;
        if (ENABLE_RECAPTCHA && !recaptchaToken) {
            alert('Por favor, completa el reCAPTCHA.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/verify-recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: recaptchaToken }), // Enviar el token al backend
            });

            const data = await response.json();

            if (data.success) {
                setIsVerified(true);
                alert('reCAPTCHA verificado correctamente.');
                // Aquí puedes proceder a enviar el formulario o hacer cualquier otra acción
            } else {
                alert('Error verificando el reCAPTCHA: ' + (data['error-codes'] ? data['error-codes'].join(', ') : ''));
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de verificación de reCAPTCHA:', error);
            alert('Hubo un problema al verificar el reCAPTCHA. Intenta de nuevo.');
        }
    };

    const onRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };


    return (
        <>
            <Row className='w-100 h-100'>
                <Col className="bg-secondary w-10"></Col>
                <Col className="bg-secondary w-80 h-100">
                    <Row className='w-100 h-25'></Row>
                    <Row className="h-10">
                        <Typography variant="h2">Recuperar contraseña</Typography>
                    </Row>
                    <Row className='w-100 h-15'></Row>
                    <Row className='w-100 h-15'>
                        <TextFieldComponent
                            label="Correo electrónico"
                            variant="standard"
                            errorMessage="Correo no válido"
                            helperText="Introduce tu correo electrónico"
                            showValidationIcon={true}
                        />
                    </Row>
                    <Row className="h-15"></Row>
                    <Row className="h-10">
                        <ReCAPTCHA sitekey={SITE_KEY} onChange={(token) => console.log(token)} />
                    </Row>
                    <Row className="h-20"></Row>
                    <Row className="h-10">
                        <MyButton text={'Enviar'} onClick={() => alert('Formulario enviado')} />
                    </Row>
                    <Row className="h-20"></Row>
                    <Row className="h-10">
                        <MyButton text={'Cancelar'} onClick={onCancel} /> {/* Botón para regresar */}
                    </Row>
                </Col >
                <Col className="bg-secondary w-10"></Col>
            </Row >
        </>
    );
};

export default RecoverPassword;
