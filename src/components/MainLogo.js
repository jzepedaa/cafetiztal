import React from 'react';
// import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Picture } from 'react-responsive-picture';


import logo from '../pictures/mainLogo.jpg';




export const MainLogo = () => (

  <Container>
    <Row>
      <Col></Col>

      <Col>
        <Link to="/">
          <Picture src={logo} />
          {/* <Image src={logo} alt="logo" /> */}

        </Link>
      </Col>

      <Col></Col>

    </Row>
  </Container>

)
