import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import ReCAPTCHA from 'react-google-recaptcha';
import TextFieldComponent from '../../../components/TextField/TextFieldComponent';
import { Typography } from '@mui/material';
import ButtonComponent from '../../../components/Button/Button';
import { validateEmail } from '../../../../utils/constants/Validators/validators';

interface RecoverPasswordProps {
    onCancel: () => void; // Prop para volver al componente anterior
}

interface ImportMetaEnv {
    readonly VITE_RECAPTCHA_SITE_KEY: string;
    readonly VITE_REACT_APP_ENABLE_RECAPTCHA: string;
    readonly VITE_LOGO: string;
}

declare global {
    interface ImportMeta extends ImportMetaEnv { }
}

const RecoverPassword: React.FC<RecoverPasswordProps> = ({ onCancel }) => {

    const [email, setEmail] = useState<string>(''); // Estado para el correo electrónico
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // Estado del token reCAPTCHA
    const [isVerified, setIsVerified] = useState(false);

    const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
    const ENABLE_RECAPTCHA = import.meta.env.VITE_REACT_APP_ENABLE_RECAPTCHA === 'true'; // Verifica si está habilitado
    const LOGO = import.meta.env.VITE_LOGO || '';

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        debugger
        if (ENABLE_RECAPTCHA && !recaptchaToken) {
            alert('Por favor, completa el reCAPTCHA.');
            return;
        }
        if (ENABLE_RECAPTCHA) {
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
                    alert('Por favor revise su correo electornico para cambiar su clave');
                    // Aquí puedes proceder a enviar el formulario o hacer cualquier otra acción
                } else {
                    alert('Error verificando el reCAPTCHA: ' + (data['error-codes'] ? data['error-codes'].join(', ') : ''));
                }
            } catch (error) {
                console.error('Error al enviar la solicitud de verificación de reCAPTCHA:', error);
                alert('Hubo un problema al verificar el reCAPTCHA. Intenta de nuevo.');
            }
        }
        else {
            alert('Por favor revise su correo electornico para cambiar su clave');
        }
    };

    const onRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    // Verifica si el correo está lleno y el reCAPTCHA está validado para habilitar el botón
    const isFormValid = validateEmail(email) && (!ENABLE_RECAPTCHA || recaptchaToken !== null);

    return (
        <>
            <Col className="w-100 h-100">
                <Row className="h-25 mb-5">
                    <div className="d-flex justify-content-center align-content-center w-100 p-5 h-100">
                        <img className="w-100" src={LOGO} />
                    </div>
                </Row>
                <Row className='h-50'>
                    <Row className="px-5">
                        <Typography variant="h3">Recuperar Contraseña</Typography>
                        <TextFieldComponent
                            label="Correo Electrónico"
                            variant="outlined"
                            color="primary"
                            icon={{
                                iconName: "FaRegUserCircle",
                                position: "end",
                                tooltip: "Correo Electrónico",
                            }}
                            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del correo electrónico
                        />
                        {ENABLE_RECAPTCHA && ( // Mostrar reCAPTCHA solo si está habilitado
                            <div className="w-100 h-15 d-flex flex-column justify-content-center align-items-center">
                                <ReCAPTCHA sitekey={SITE_KEY} onChange={onRecaptchaChange} />
                            </div>
                        )}
                        <div className="w-100 h-25 d-flex flex-column justify-content-center align-items-center">
                            <ButtonComponent
                                variant="contained"
                                color="primary"
                                className="w-50 h-50"
                                icon={{ iconName: "MdSend" }}
                                onClick={(event) => { handleSubmit(event) }}
                                aria-label="Enviar"
                                size="large"
                                disabled={!isFormValid} // Deshabilita si el formulario no es válido (email vacío o recaptcha no verificado)
                            >Recuperar
                            </ButtonComponent>
                            <ButtonComponent
                                variant="text"
                                color="primary"
                                className="w-50 h-50"
                                size="small"
                                onClick={onCancel}
                                aria-label="Cancelar"
                            >
                                Cancelar
                            </ButtonComponent>
                        </div>
                    </Row>
                </Row>
            </Col >
        </>
    );
};

export default RecoverPassword;
