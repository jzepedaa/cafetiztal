import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import GoogleMaps from './GoogleMaps'

const Styles = styled.div`
.background{
  padding-top:20px;
  padding-bottom: 30px;
  text-align: center;
  background-color:#222;
  color: white;

}

.copyright{
  padding-top: 20px;
}

`;

export const Footer = () => (
  <Styles>
    <div>
      <Container className="background">
        <Row>
          <Col><p>Location</p>
            {/* <GoogleMaps /> */}
            <a className="links" href="https://www.google.com/maps/dir//Tiztal+Cafe,+4631+N+Clark+St,+Chicago,+IL+60640/@41.9753876,-87.6741518,16.74z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880fd22fc2c989d3:0xfcd5269ee247e87d!2m2!1d-87.6666803!2d41.9662149">4631 N Clark St, Chicago, IL 60640</a>
            {/* <p>4631 N Clark St, Chicago, IL 60640</p> */}


          </Col>
          <Col><p>Hours</p>
            <p>Mon - Sun : 8am - 3pm</p>

          </Col>
          <Col><p>Social</p>
            <p><a href="https://www.facebook.com/tiztalcafe/">Facebook</a></p>
          </Col>
          <Col><p>Contact</p>
            <p>(773) 271-4631</p>
          </Col>
        </Row>
        {/* </Container>
    </div>
      <div>
        <Container className="background "> */}
        <Row>
          <Col className="copyright">
            Copyright © 2019 · All Rights Reserved
          </Col>
        </Row>
        <Row>
          <Col className="copyright">
            J.Zepeda LLC
          </Col>
        </Row>
      </Container>

    </div>
  </Styles>



)


