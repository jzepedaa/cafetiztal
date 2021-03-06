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
  font-weight: bold;
}


`;


export const Home = () => (

  <Styles>
    <NavigationBar />

    {/* <Container className="layout">
  
   <Container className="postarea">


     <h2 className="headLine">To all our customers, </h2>
     <p className="headLine">In light of COVID-19, Tiztal Café will temporarily close until March 30th 2020. We will open for business March 31st. </p>
     <p className="headLine">We will not be open for delivery or curbside pickup until further notice. </p>
     <p className="headLine">Although this was a difficult decision to make, we greatly appreciate all of your support through this troubling time. </p>
     <p className="headLine">From our Tiztal family to yours, we wish you all good health and to stay safe. </p>
     <p className="headLine">We hope to come back stronger together. </p>
     <p className="headLine">Sincerely, </p>
     <p className="headLine">Your Tiztal Family </p>
   
   </Container> */}


    <Container className="layout">
      <h2 className="headLine">  TIZTAL CAFÉ IS OPEN FOR BUSINESS</h2>
      <h2 className="headLine"> Dining and Patio Seating</h2>
      {/* <br></br> */}

      <Container className="postarea">


        <p>Dear Customers,</p>


        <p>At Tiztal Café, the health and safety of our staff and customers is always our top priority. With that in mind, we are taking many extra steps to ensure a healthy environment in light of the coronavirus developments and peak flu season.</p>

        <p>We have always been committed to the safety of our customers and staff and the cleanliness of our restaurant. Every day, our staff diligently cleans the restaurant, and in addition to our daily routine we are also taking the following precautions:</p>

        <li>All surfaces and door handles are being sanitized and disinfected throughout the day</li>

        <br></br>
      We thank you for your continued business / support during this time.
        <br></br>
        <br></br>
      Sincerely,
        <br></br>
      Tiztal Café Management and Staff

</Container>
      <br></br>


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
