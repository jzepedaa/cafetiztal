import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import styled from 'styled-components';


import { Container } from 'react-bootstrap';

const Styles = styled.div`

.li {
  list-style-position: inside;
}

.menuOne{
  padding: 20px;
  border: 5px solid #222;
  margin-bottom: 30px;
}
.menuTwo{
  padding: 20px;
  margin-bottom: 30px;
  border: 5px solid #222;
}

.sides{
  text-indent: 2rem;
  font-style: oblique;
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
.smallTitle{
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
}

.menuTitle{
  text-align: center;
  padding: 20px;
  text-decoration: underline;
}

.start{
  text-indent: 3rem;
}

.customize{
  text-align: center;
}

.kidsPricing{
  text-align: center;
}

.insideMenu{
  margin-bottom: 20px;
  border: 5px solid #222;
}

.noDot{
  list-style-type: none;
}

.additionPrice{
  font-weight: bold;
}

`;




export const Menu = () => (
  <Styles>
    <NavigationBar />

    <Container className="menuOne">
      <h2 className="menuTitle">Breakfast Menu</h2>

      {/* <Row >
        <Col> */}

      <ul>
        <li className="title noDot">EGGS & OMELETS</li>
        <p className="sides">All eggs & omelet orders include : garlic/cilantro potatoes & toast</p>

        <li className="title noDot">Famous Zepher Omelet <span className="price">$11.99</span></li>
        <li className="start"><p >Spinach, mushrooms and cream cheese wrapped inside our 3 egg omelet topped with melted Swiss cheese</p></li>

        <li className="title noDot">Zucchini Pesto Omelet<span className="price">$11.99</span></li>
        <li className="start"><p>Zucchini, pesto, yellow squash and mozzarella cheese</p></li>

        <li className="title noDot">Spanish Omelet<span className="price">$11.99</span></li>
        <li className="start"><p>Green peppers, onion, tomatoes and chihuahua cheese</p></li>

        <li className="title noDot">Florentine Omelet<span className="price">$11.99</span></li>
        <li className="start"><p>Spinach & mushrooms, topped with hollandaise sauce</p></li>

        <li className="title noDot">Salsa Verde Omelet<span className="price">$11.99</span></li><li className="start"><p>Green peppers, onions, chihuahua cheese topped with our salsa verde</p></li>

        <li className="title noDot">Tiztal Meat Lovers Omelet<span className="price">$12.99</span></li><li className="start"><p>Ham, bacon & pork sausage or chorizo cooked in our round omelete <span className="addition">- add cheese $.75</span></p></li>

        <li className="title noDot">Feta, Tomato & Onion Omelet<span className="price">$11.99</span></li><li className="start"><p>3 Egg omelet with feta cheese, tomato & onion folded inside</p></li>

        <li className="title noDot">Cheese Please Omelet<span className="price">$11.99</span></li><li className="start"><p>Your choice of 2 cheese melted inside our fluffy 3 egg omelete</p></li>

        <li className="title noDot">Ranchero Omelet<span className="price">$11.99</span></li><li className="start"><p>American cheese, onion, green pepper, tomato and cilantro wrapped inside our 3 egg omelet w/ Ranchero sauce & Salsa on top</p></li>

        <li className="title noDot">Tiztal Chorizo Scramble<span className="price">$11.99</span></li>
        <li className="start"><p>4 eggs scrambled with chorizo, topped with tomato, onion, cilantro, shredded cheddar & a side of sour cream
          <li className="noDot">w/ side of tortillas</li>

          <p className="addition">...2 Egg Version - $9.99</p></p></li>

        <li className="title noDot">The Leslie Scramble<span className="price">$11.99</span></li>
        <li className="start"><p>Lots of egg whites scrambled with feta, spinach, tomato, onion & mushrooms</p></li>
        <Container className="customize">
          <p className="sides">Choice of potatoes or cottage cheese<br></br>
            Add Ham, Sausage or Bacon to any omelet $1.50<br></br>
            <p className="sides">Sides: Sour Cream $.75, Chiles Toreados $1.50, Pico de Gallo $.75, Tortilla $.75<br></br>
              We will customize any omelete or scramble order<br></br>
              <p className="sides">Fruit substitute $1.50 Egg whites $1.00</p></p></p>
        </Container>
        {/* </ul>
        </Col>

        <Col>
          <ul> */}

        <li className="title noDot">Chilaquiles</li>
        <li className="start">Eggs Only <span className="price">$10.99</span></li>
        <li className="start">Chorizo & Eggs <span className="price">$12.99</span></li>
        <li className="start">Chicken & Eggs <span className="price">$13.99</span></li>
        <li className="start">Steak & Eggs <span className="price">$13.99</span></li>
        <li className="addition noDot">...made with fresh tortilla chips, green salsa, topped with baked Chihuahua cheese, chopped onions & fresh cilantro, served w/ potatoes</li>

        <li className="title noDot">Eggs Benedict <span className="price">$11.99</span></li>
        <li className="start"><p>2 poached eggs with Canadian bacon on an English muffin, topped with Hollandaise sauce, Florentine style (with spinach instead of meat)</p></li>

        <li className="title noDot">Eggs Ranchero <span className="price">$9.99</span></li>
        <li className="start"><p>3 Corn tortillas melted with american cheese, 2 eggs topped with Ranchero sauce</p></li>

        <li className="title noDot">Steak & Eggs <span className="price">$13.99</span></li>
        <li className="start"><p>Includes garlic, cilantro potatoes & toast</p></li>

        <li className="title noDot">Beef Hash & Eggs <span className="price">$11.99</span></li>
        <li className="start"><p>Includes garlic, cilantro potatoes & toast</p></li>

        <li className="title noDot">Tiztal Waffles</li>
        <li className="start">Plain<span className="price">$5.99</span></li>
        <li className="start">Pecan<span className="price">$6.99</span></li>
        <li className="start"><p>Fresh Fruit Topped<span className="price">$9.99</span></p></li>
        <p className="addition start">Add whipped cream <span className="price">$.75</span><p className="addition start">Ice cream <span className="price">$1.79</span></p></p>

        <li className="title noDot">Country Breakfest<span className="price">$11.99</span></li>
        <li className="start"><p>Country fried steak w/ gravy, eggs, biscuit & potatoes</p></li>

        <li className="title noDot"><p>Biscuits & Gravy<span className="price">$6.99</span></p></li>

        <li className="title noDot">2 Eggs anystyle<span className="price">$5.99</span></li>
        <li className="start"><p>add Sausage, Bacon or Ham<span className="price">$8.99</span></p></li>

        <li className="title noDot">1 Egg<span className="price">$4.99</span></li>
        <li className="start"><p>add Sausage, Bacon or Ham<span className="price">$7.99</span></p></li>

        <li className="title noDot">French Toast<span className="price">$7.99</span></li>

        <li className="title noDot">Pancakes<span className="price">$4.99</span></li>
        <li className="start"><p>with chocolate chips <span className="price">$5.99</span></p></li>

        <li className="title noDot"><p>Silver Dollar Pancakes<span className="price">$5.99</span></p></li>

      </ul>




      <ul>
        <li className="title noDot">Side Orders</li>
        <li>Ham <span className="price">$3.99</span></li>
        <li>Bacon/Sausage <span className="price">$3.99</span></li>
        <li>Tiztal Breakfast Potatoes <span className="price">$6.99</span></li>
        <li className="addition start noDot">Garlic, red potatoes, topped with chopped onion, cilantro and shredded cheddar</li>
        <li>Breads <span className="price">$1.99</span></li>
        <li className="addition start noDot">Whole grain, White, Rye</li>
        <li><p>Oatmeal (bowl) <span className="price">$6.99</span></p></li>

        <li className="title noDot">Soft Drinks</li>
        <li>Coke, Diet Code, Sprite, Iced Tea, Coffe or Tea  <span className="price">$2.99</span></li>
        <li>Lemonade (fresh squeezed)<span className="price">$3.99</span></li>
      </ul>




      {/* </ul>
        </Col>





      </Row> */}
      <Container className="insideMenu">
        <h3 className="menuTitle">Kids Menu</h3>
        <h4 className="kidsPricing">Children, 12 and Under</h4>
        <h5 className="kidsPricing">$6.99</h5>
        <ul>
          <li>1 Scrambled egg, 2 Slices of bacon or Sausage link, 1 Slice of Toast</li>
          <li><p>1 Scrambled egg, sliced ham sprinkled w/ cheddar cheese, 1 Slice of Toast</p></li>
          <li className="title noDot">Quesadillas</li>
          <li className="start">Cheese Only</li>
          <li className="start">Cheese & Chicken</li>
          <p className="noDot">Natural Nuggets (lightly breaded, grilled chicken breast)</p>
          <Container className="customize">
            <p className="sides">Kids menu items served with potatoes and fruit</p>

          </Container>

          <li className="title noDot">Kiddie Drinks</li>
          <li className="start">Soft drinks, Apple Juice, Orange Juice<span className="price">$2.99</span></li>
        </ul>


      </Container>
      {/* <ul> */}


    </Container>
  </Styles >

)
