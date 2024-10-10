import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TextFieldComponent from "../../../../components/TextField/TextFieldComponent";
import ButtonComponent from "../../../../components/Button/Button";
import PasswordFieldComponent from "../../../../components/PasswordInput/PasswordComponent";
import { Typography } from "@mui/material";
import style from "../../../../styles/Login/Login.module.css";

interface LeftContentProps {
   onRecoverPassword: () => void; 
 }

const LeftContent = ({ onRecoverPassword }: LeftContentProps) => {
  const [logo, setLogo] = useState("");

  return (
    <Col className="w-100 h-100">
      <Row className="h-25">
        <div className="d-flex justify-content-center align-content-center w-100 p-5 h-100">
          <img className="w-100" src="/img/fordLogo.svg" />
        </div>
      </Row>
      <br />
      <Row className="h-50">
        <Row className="px-5">
          <div className="w-100 d-flex flex-column align-items-center">
            <Typography variant="h2">Bienvenido a Auriga</Typography>
            <Typography className="m-3" variant="h3">Ingresa tus datos para poder continuar</Typography>
            <br />
            <TextFieldComponent
              label="Correo Electrónico"
              variant="standard"
              color="primary"
              className="w-75"
              icon={{
                iconName: "FaRegUserCircle",
                position: "end",
                tooltip: "Correo Electrónico",
              }}
              onChange={(e) => console.log(e.target.value)}
            />
            <br />
            <PasswordFieldComponent
              label="Ingresa tu contraseña"
              color="primary"
              variant="standard"
              className="w-75"
              helperText="Si no te acuerdas de tu contraseña, puedes restablecerla"
            />
          </div>
          <div className="w-100 h-25 d-flex flex-column justify-content-center align-items-center mt-4">
            <ButtonComponent
              variant="contained"
              color="primary"
              className="w-50 h-50 mt-3"
              icon={{ iconName: "MdSend" }}
              onClick={() => console.log("Botón solo con ícono presionado")}
              aria-label="Enviar"
              size="large"
            >
              Ingresar
            </ButtonComponent>
            <ButtonComponent
              variant="text"
              color="primary"
              className="w-50 h-25 mt-3"
              size="small"
              onClick={onRecoverPassword}
            >
              Olvide mi Contraseña
            </ButtonComponent>
          </div>
        </Row>
      </Row>
      <Row className="h-25">
      <div className="w-100 h-75 position-relative d-flex justify-content-center align-items-center">
            <img className={style['custom-logo-eos']} alt="EOS Logo" src="/img/eosLogo.png" />
        </div>
      </Row>
    </Col>
  );
};

export default LeftContent;
