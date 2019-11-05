import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import Burger from '../pictures/Burger.png';
import ChorizoScrambled from '../pictures/ChorizoScrambled.png';
import EggsBenedict from '../pictures/EggsBenedict.png';
import RancheroOmelete from '../pictures/RancheroOmelete.png';
import SteakChilaquiles from '../pictures/SteakChilaquiles.png';
import ZucchiniPesto from '../pictures/ZucchiniPesto.png';

// import Inside from '../pictures/Inside.jpg';

// const Styles = styled.div`
// .sizing{
//      width: 50px;
//      height: 500px;
//      background-position: 50% 50%;
//      background-repeat: no-repeat;
//      /* background-size: cover; */
// }

// `;

export const SlideShow = () => (

  <Container>
    <Row>
      <Col ></Col>
      <Col xs={9}>


        <Carousel>
          <Carousel.Item>
            <img
              className=" w-100 sizing"
              src={SteakChilaquiles} alt="SteakChilaquiles"

            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={ChorizoScrambled} alt="ChorizoScrambled"

            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={EggsBenedict} alt="EggsBenedict"

            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={RancheroOmelete} alt="RancheroOmelete"

            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={Burger} alt="burger"

            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={ZucchiniPesto} alt="ZucchiniPesto"

            />

            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col></Col>
    </Row>
  </Container>

)