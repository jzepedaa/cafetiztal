import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`



.menuOne{
  padding: 20px;
  border: 5px solid #222;
  margin-bottom: 30px;
}

.price{
font-size: 15px;
font-weight: bold;
  float: right;
}

.title{
  text-decoration: underline;
  font-weight: bold;
}

.addition{
font-size: 15px;
text-indent: 2rem;
font-weight: bold;
}

.start{
  text-indent: 3rem;
}


.noDot{
  list-style-type: none;
}

.additionPrice{
  font-weight: bold;
}

.menuTitle{
  text-align: center;
  padding: 20px;
  text-decoration: underline;
}

`;


export const Juices = () => (
  <Styles>
    <NavigationBar />

    <Container className="menuOne">

      <h2 className="menuTitle">Juices & Oatmeal Shakes</h2>


      <li className="title noDot">Frutas y Jugos / Fruits & Juices</li>
      <li className="start noDot">Naranja / Orange<span className="price">$3.99</span></li>
      <li className=" start noDot">Toronja / Grapefruit<span className="price">$3.99</span></li>
      <li className="start noDot">Vampiro / Beet, apple, orange, carrot, celery<span className="price">$5.99</span></li>
      <li className="start noDot">Naranja & Zanahoria / Orange and Carrot<span className="price">$5.99</span></li>
      <li className="start noDot">Pueblita / Vegetables & Fruit<span className="price">$6.99</span></li>
      <li className="start noDot">Enerjetco: granola, oatmeal, apple, orange<span className="price">$5.99</span></li>
      <li className="start noDot">Toronja Apio Perejil Pina<span className="price">$5.99</span></li>
      <li className="addition noDot"><p>...Grapefruit Cleansing Formula</p></li>


      <li className="title noDot">Smoothies All Natural</li>

      <li className=" start noDot">Strawberry Banana Orange<span className="price">$5.99</span></li>
      <li className=" start noDot">Mango Pineapple Orange<span className="price">$5.99</span></li>
      <li className=" start noDot">Rasberry Peach Apple<span className="price">$5.99</span></li>
      <li className=" start noDot">Blueberry Banana Carrot<span className="price">$5.99</span></li>
      <li className=" start noDot">Mango Strawberry Apple<span className="price">$5.99</span></li>
      <li className=" start noDot">Papaya Strawberry Orange<span className="price">$5.99</span></li>
      <li className=" start noDot">Custom Mixes on Request! Extra Fruit - <span className="additionPrice">$.25</span></li>
      <li className="addition noDot"><p>...Strawbery, Banana, Pineapple, Peach, Mango, Melon, Papaya, Blueberry, Rasberry, Blackberry</p></li>



      <li className="title noDot">Tiztal's Famous Oatmeal Shakes</li>
      <li className="start noDot">Original Creamy Oatmeal<span className="price">$5.99</span></li>
      <li className=" start noDot">Oatmeal Pecan<span className="price">$5.99</span></li>
      <li className=" start noDot">Oatmeal Banana<span className="price">$5.99</span></li>
      <li className=" start noDot">Oatmeal Granola<span className="price">$5.99</span></li>

      <li className="title noDot">Licuados / Shakes</li>
      <li className="start noDot">Fresa / Strawberry<span className="price">$5.99</span></li>
      <li className=" start noDot">Platano / Banana<span className="price">$5.99</span></li>
      <li className=" start noDot">Vainilla / Vanilla<span className="price">$5.99</span></li>
      <li className=" start noDot">Guayaba / Guava<span className="price">$5.99</span></li>
      <li className="start noDot">Nuez / Pecan<span className="price">$5.99</span></li>
      <li className=" start noDot">Pina / Pineapple<span className="price">$5.99</span></li>
      <li className=" start noDot">Oreo Cookie<span className="price">$5.99</span></li>
      <li className=" start noDot">Chocolate<span className="price">$5.99</span></li>
      <li className=" start noDot">Mango<span className="price">$5.99</span></li>
      <li className=" start noDot">Melon<span className="price">$5.99</span></li>
      <li className=" start noDot">Papaya<span className="price">$5.99</span></li>
      <li className="addition noDot"><p>...Extra Fruit $.25</p></li>




    </Container >

  </Styles >

)
