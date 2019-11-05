import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import { SlideShow } from "../components/Carousel";
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Contact } from './Contact';
// import { Contact } from '../pages/Contact';

const Styles = styled.div`


.postarea {
  margin-top: 30px;
    padding: 24px;
}


 .link{
   text: 5px;
   /* color: #222; */

    &:hover {
      color: #222;
      font-size: 20px;
    }
 }
.noDot{
  list-style-type: none;
}


.layout{
  padding: 20px;
  border: 5px solid #222;
  margin-bottom: 20px;
}

.headLine{
  text-align: center;
}


`;


export const Home = () => (

  <Styles>
    <NavigationBar />
    <Container className="layout">
      <SlideShow className="slideshow" />
      <Container className="postarea">

        <h1 className="headLine">Home of the famous Chilaquiles, Oatmeal Shake and making you feel like family!</h1>

        {/* <h1 className="headLine">Best Chilaquiles in town, Juices, smoothies & Mexican-style breakfasts from a cozy, festively decorated choice with a weather permitted patio.</h1> */}
        <br></br>
        <li className="noDot"><p>We are open for breakfast and brunch from 8:00 am thru 3:00 pm, Monday- Sunday.  We specialize in homemade food, freshly squeezed orange juice, as well as specialty mixed juices.  Meter parking outside except for Sundays, it’s FREE.</p></li>

        <li className="noDot"><p>Unfortunately, we do not except reservations, but we do encourage customers to call ahead to inquire about waiting estimates.   We have a lovely Patio that is open all spring and summer.</p></li>

      </Container>
    </Container>
  </Styles>

)
