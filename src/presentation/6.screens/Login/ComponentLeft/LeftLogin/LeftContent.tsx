import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const LeftContent = () => {
  const [logo, setLogo] = useState('');

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

export default LeftContent;
