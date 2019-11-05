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


export const Lunch = () => (
  <Styles>
    <NavigationBar />

    <Container className="menuOne">


      <h2 className="menuTitle">Lunch & Dessert Menu</h2>


      <li className="title noDot">Quesadillas</li>
      <li className="start noDot">Cheese Only <span className="price">$9.99</span></li>
      <li className=" start noDot">Chicken & Cheese <span className="price">$11.99</span></li>
      <li className="start noDot">Veggie & Cheese<span className="price">$11.99</span></li>
      <li className="start noDot">Chorizo & Cheese <span className="price">$11.99</span></li>
      <li className="start noDot">Steak & Cheese <span className="price">$11.99</span></li>
      <li className="addition noDot"><p>...served w/ pico de gallo (chopped tomatoes, onions, cilantro, lime or lemon juice) potatoes and fruit</p></li>

      <li className="title noDot">Fajitas</li>
      <li className="start noDot">Vegetables <span className="price">$12.99</span></li>
      <li className="start noDot">Chicken <span className="price">$14.99</span></li>
      <li className="start noDot">Steak<span className="price">$14.99</span></li>
      <li className="addition noDot"><p>...served with potatoes & rice</p></li>

      <li className="title noDot">Wraps</li>
      <li className="start noDot">Chicken <span className="price">$11.99</span></li>
      <li className="start noDot">Steak <span className="price">$11.99</span></li>
      <li className="addition noDot"><p>...lettuce, tomatoes & Caesar dressing, wrapped in a flour tortilla served w/ potatoes & fruit</p></li>

      <li className="title noDot">Savory Crepes</li>
      <li className="start noDot">Spinach, mushrooms, cream cheese & diced ham <span className="price">$11.99</span></li>
      <li className="start noDot">Spinach & chicken topped with chipotle sauce <span className="price">$12.99</span></li>
      <li className="start noDot"><p>Sweet Dream w/ cherry, blueberry or strawberry topping<span className="price">$8.99</span></p></li>

      <li className="title noDot">Monte Cristo<span className="price">$10.99</span></li>
      <li className="start noDot">Turkey, Swiss cheese, ham on French toast served w/ potatoes & fruit</li>

      <li className="title noDot"><p>Burgers - Served w/ Potatoes & Fruit</p></li>
      <li className="start noDot"><p>Bacon Cheddar Burger <span className="price">$12.99</span></p></li>
      <li className="start noDot"><p>Mushroom & Swiss Burger <span className="price">$12.99</span></p></li>
      <li className="start noDot"><p>Tiztal Chorizo Pineapple Burger<span className="price">$12.99</span></p></li>
      <li className="start noDot"><p>Chihuahua Cheese & Egg Burger<span className="price">$12.99</span></p></li>
      <li className="start noDot"><p>Patty Melt<span className="price">$12.99</span></p></li>


      <li className="title noDot">Cocktel De Fruta / Fruit Cocktail<span className="price">$10.99</span></li>
      <li className="start noDot">Spice it up with Salt, Chile & Lemon</li>
      <li className="title noDot">Fresas Con Crema / Strawberries with Cream<span className="price">$8.99</span></li>
      <li className="title noDot">The Belgian Beauty<span className="price">$10.99</span></li>
      <li className="start noDot">Waffle with 1 scoop of Ice Cream with Hot Carmel or Strawberry Creama</li>
      <li className="title noDot">The Sweet Dream<span className="price">$10.99</span></li>
      <li className="start noDot"><p>Teresa's Special Strawberry Crema over a mound of fresh-cut fruit, sprinkled with granola, coconut, raisins topped w/ a scoop of ice cream</p></li>

      <Container className="insideMenu">
        <h3 className="menuTitle">Weekday Lunch Specials</h3>

        <li className="title noDot">Grilled Chicken Sandwich<span className="price">$8.99</span></li>
        <li className="start noDot">Marinated chicken breast with your choice of bread, lettuce, tomato, and seasoned mayo. Add Swiss, American, Provolone, Pepper jack or cheddar cheese - <span className="additionPrice">$.75</span></li>
        <li className="title noDot">Steak Sandwich<span className="price">$8.99</span></li>
        <li className="start noDot">Lightly seasoned with salt, pepper and parsley, choice of white, wheat, or rye bread</li>
        <li className="title noDot">Bacon, Lettuce & Tomato<span className="price">$8.99</span></li>
        <li className="start noDot">choice of white, wheat, or rye bread</li>
        <li className="title noDot">Sliced Turkey or Ham<span className="price">$8.99</span></li>
        <li className="start noDot"><p>choice of Swiss or American cheese</p></li>
      </Container>


    </Container >

  </Styles >

)
