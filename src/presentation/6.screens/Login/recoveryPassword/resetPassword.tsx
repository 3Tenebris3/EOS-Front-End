import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import ReCAPTCHA from 'react-google-recaptcha';
import TextFieldComponent from '../../../components/TextField/TextFieldComponent';
import { Typography } from '@mui/material';
import ButtonComponent from '../../../components/Button/Button';
import { validateEmail, validatePassword } from '../../../../utils/constants/Validators/validators';
import style from "../../../styles/Login/Login.module.css";
import PasswordFieldComponent from '../../../components/PasswordInput/PasswordComponent';

interface ImportMetaEnv {
    readonly VITE_LOGO: string;
}

declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

const ResetPassword = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repassword, setRepassword] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const LOGO = import.meta.env.VITE_LOGO || '';

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    };

    const onRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    // Verifica si el correo está lleno y el reCAPTCHA está validado para habilitar el botón
    const isFormValid = validatePassword(password) && password == repassword;

    return (
        <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
            <div className={'w-25'}></div>
            <div className={'w-50'}>
                <Col className="w-100 h-100">
                    <Row className="h-25">
                        <div className="d-flex justify-content-center align-content-center w-100 p-5 h-100">
                            <img className="w-100" src={LOGO} />
                        </div>
                    </Row>
                    <Row className="h-25">
                        <Row className="px-5 mb-3">
                            <PasswordFieldComponent
                                label="Contraseña"
                                color="primary"
                            />
                        </Row>
                        <Row className="px-5 mb-3">
                            <PasswordFieldComponent
                                label="Repetir Contraseña"
                                color="primary"
                            />
                        </Row>
                        <Row className="px-5 mb-3">
                            <TextFieldComponent
                                label="Codigo"
                                variant="outlined"
                                color="primary"
                                icon={{
                                    iconName: "FaRegUserCircle",
                                    position: "end",
                                    tooltip: "Correo Electrónico",
                                }}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </Row>
                    </Row>
                    <Row className="h-75">
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
                            >
                                Guardar
                            </ButtonComponent>
                        </div>
                    </Row>
                </Col>
            </div>
            <div className={'w-25 p-2'}></div>
        </div>
    );
};

export default ResetPassword;
