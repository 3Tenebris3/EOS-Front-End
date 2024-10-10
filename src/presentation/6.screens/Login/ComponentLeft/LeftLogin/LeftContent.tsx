import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TextFieldComponent from "../../../../components/TextField/TextFieldComponent";
import ButtonComponent from "../../../../components/Button/Button";
import PasswordFieldComponent from "../../../../components/PasswordInput/PasswordComponent";
import { Typography } from "@mui/material";

const LeftContent = () => {
  const [logo, setLogo] = useState("");

  return (
    <Col className="w-100 h-100">
      <Row className="h-25">
        <div className="d-flex justify-content-center align-content-center w-100 p-5 h-100">
          <img className="w-100" src="/img/fordLogo.svg" />
        </div>
      </Row>
      <Row className="h-50">
        <Row className="px-5">
          <Typography variant="h3">Inicio con tu cuenta de usuario</Typography>
          <TextFieldComponent
            label="Correo Electrónico"
            variant="outlined"
            color="primary"
            icon={{
              iconName: "FaRegUserCircle",
              position: "end",
              tooltip: "Correo Electrónico",
            }}
            onChange={(e) => console.log(e.target.value)}
          />
          <PasswordFieldComponent
            label="Ingresa tu contraseña"
            color="primary"
            helperText="Si no te acuerdas de tu contraseña, puedes restablecerla"
          />
          <div className="w-100 h-25 d-flex flex-column justify-content-center align-items-center">
            <ButtonComponent
              variant="contained"
              color="primary"
              className="w-50 h-50"
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
                className="w-50 h-50"
                size="small"
                onClick={() => console.log("Botón con ícono al final presionado")}
            >
            Olvide mi Contraseña
          </ButtonComponent>
          </div>
        </Row>
      </Row>
    </Col>
  );
};

export default LeftContent;
