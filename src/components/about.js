import React from 'react';

// Images
import Img from '../static/images/dish/20.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-container container">
        <div className="about-text">
          <h1>About Us</h1>
          <br />
          <p>Kasai Japanese Restaurant in Wadsworth was opened spring of 2005. Since then, the popularity is gradually rising. We boast about a large diverse menu including freshest sashimi and sushi, hibachi, teriyaki, tempura, rice bowls, noodles. Our newest location in Green was opened during Christmas season of 2014. The uniqueness of our new location is the addition of Robatayaki and a large bar featuring remarkable creative drinks with modern Japanese Restaurant dining atmosphere.</p>
        </div>
        <div className="about-image"
          style={{backgroundImage: "url(" + Img + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default About;
