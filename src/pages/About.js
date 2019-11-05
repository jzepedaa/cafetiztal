import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import styled from 'styled-components';

const Styles = styled.div`
.links{
  /* color: #222; */
}

.layout{
  padding: 20px;
  border: 5px solid #222;
  margin-bottom: 20px;
}

`;



export const About = () => (
  <Styles>
    <NavigationBar />
    <div className="layout">
      <h2>Story</h2>

      <p>TIZTAL CAFÉ opened in May of 2008 at 4136 N. Clark Avenue, Chicago, in Uptown.  We are a fusion of Oasis, a juice bar in what was called the “Mega Mall” in Logan Square and  Zephyr’s Ice Cream Restaurant,  located in the Lakeview neighborhood  but closed its doors in 2006.  The fusion of these two popular spots has made Tiztal Café the-go-to spot for Chicagoans for breakfast and lunch. We’ve had the pleasure and privilege of serving customers from Indiana, Wisconsin and many that come from out-of-town to visit loved ones.  We are a family owned and operated restaurant; it is why we treat everyone like part of the family!
</p>

      <h2>Links</h2>
      <ul>
        <li><a className="links" target="_blank" href="https://checkplease.wttw.com/restaurants/tiztal-cafe">Check Please</a></li>
        <li><a className="links" target="_blank" href="https://www.chicagotribune.com/dining/ct-breakfast-with-ina-bryn-mawr-tiztal-cafe-20150317-story.html">Chicago Tribune - Breakfast</a></li>
        <li><a className="links" target="_blank" href="https://www.chicagotribune.com/redeye/ct-redeye-best-milkshakes-chicago-ice-cream-20170728-story.html">Chicago Tribune - Shakes</a></li>
        <li><a className="links" target="_blank" href="https://www.pressreader.com/search?query=tiztal%20cafe&languages=en&groupBy=Language&hideSimilar=0&type=1&state=1">Pressreader</a></li>
        <li><a className="links" target="_blank" href="https://www.yelp.com/biz/tiztal-cafe-chicago-3?osq=Tiztal+Cafe">Tiztal Cafe on Yelp</a></li>
        <li><a className="links" target="_blank" href="https://www.timeout.com/chicago/restaurants/where-to-find-the-best-milkshake">The best Milkshakes in chicago</a></li>
        <li><a className="links" target="_blank" href="https://www.theinfatuation.com/chicago/reviews/tiztal-cafe">The Infatuation</a></li>
        <li><a className="links" target="_blank" href="https://www.timeout.com/chicago/restaurants/tiztal-cafe">Time out</a></li>


      </ul>




    </div>
  </Styles>
)
