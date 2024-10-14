import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import ReCAPTCHA from 'react-google-recaptcha';
import TextFieldComponent from '../../../components/TextField/TextFieldComponent';
import { Typography } from '@mui/material';
import ButtonComponent from '../../../components/Button/Button';
import { validateEmail, validatePassword } from '../../../../utils/constants/Validators/validators';
import style from "../../../styles/Login/Login.module.css";
import PasswordFieldComponent from '../../../components/PasswordInput/PasswordComponent';
import { useNavigate } from 'react-router-dom';
// Función para evaluar la fortaleza de la contraseña
const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/\W/.test(password)) strength += 1;

    return strength;
};

const getStrengthColor = (strength: number) => {
    switch (strength) {
        case 1:
        case 2:
            return 'red'; // Insegura
        case 3:
            return 'orange'; // Moderada
        case 4:
        case 5:
            return 'green'; // Segura
        default:
            return 'gray'; // Muy débil
    }
};

const ResetPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate(); // Inicializa useNavigate para redirigir


    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const LOGO = import.meta.env.VITE_LOGO || '';

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
    };

    const onRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    // Obtiene la fortaleza de la contraseña
    const passwordStrength = getPasswordStrength(password);
    const passwordStrengthColor = getStrengthColor(passwordStrength);

    // Verifica si el formulario es válido
    const isFormValid = validatePassword(password) && password === confirmPassword;

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
                                label="Nueva contraseña"
                                color="primary"
                                variant="outlined"
                                fullWidth={true}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <div
                                className="password-strength-bar"
                                style={{
                                    width: '100%',
                                    height: '5px',
                                    backgroundColor: passwordStrengthColor,
                                    marginTop: '5px',
                                }}
                            />
                            <Typography
                                variant="caption"
                                style={{ color: passwordStrengthColor }}
                            >
                                {passwordStrength === 1 || passwordStrength === 2
                                    ? 'Insegura'
                                    : passwordStrength === 3
                                        ? 'Moderada'
                                        : 'Segura'}
                            </Typography>
                        </Row>
                        <Row className="px-5 mb-3">
                            <PasswordFieldComponent
                                label="Confirmar contraseña"
                                color="secondary"
                                variant="outlined"
                                fullWidth={true}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                errorMessage={password !== confirmPassword ? 'Las contraseñas no coinciden' : undefined}
                            />

                        </Row>
                        <Row className="px-5 mb-3">
                            <TextFieldComponent
                                label="Código"
                                variant="outlined"
                                color="primary"
                                icon={{
                                    iconName: "FaRegUserCircle",
                                    position: "end",
                                    tooltip: "Código",
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
                                onClick={(event) => handleSubmit(event)}
                                aria-label="Enviar"
                                size="large"
                                disabled={!isFormValid}
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
