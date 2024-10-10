import React, { useState } from 'react';
import { User } from '../../../domain/1.entities/example';
import { Row, Col } from "react-bootstrap";

const RecoverPassword: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [isVerified, setIsVerified] = useState(false);

    const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || ''; // Usa la clave desde las variables de entorno
    const ENABLE_RECAPTCHA = process.env.REACT_APP_ENABLE_RECAPTCHA === 'true'; // Verifica si está habilitado

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
        <Col className="bg-secondary w-100 h-100">
            <Row className="h-100">
                <span>Fila</span>
            </Row>
            <Row className="h-100">
                <span>Fila</span>
            </Row>
            <Row className="h-100">
                <span>Fila</span>
            </Row>
            <Row className="h-100">
                <span>Fila</span>
            </Row>
        </Col>
    );
};


export default RecoverPassword;
