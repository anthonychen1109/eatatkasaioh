import React, { Component } from 'react';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Gallery from './gallery';
import Contact from './contact';

const hours = [
  {
    day:	"Closed"
  },
  {
    day: "11:00 am - 2:30 pm, 5:00 pm - 9:30pm"
  },
  {
    day: "11:00 am - 2:30 pm, 5:00 pm - 9:30pm"
  },
  {
    day: "11:00 am - 2:30 pm, 5:00 pm - 9:30pm"
  },
  {
    day: "11:00 am - 2:30 pm, 5:00 pm - 9:30pm"
  },
  {
    day: "11:00 am - 2:30 pm, 5:00 pm - 9:30pm"
  },
	{
    day: "3:00 pm - 9:30 pm"
  }
]

class ThreeEightSevenFive extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="threeeightsevenfive">
        <Navbar />
        <Header />
        <About />
        <Gallery galleryNumber={this.props.storeNo}/>
        <Contact
          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.1246111471223!2d-81.46644928518438!3d40.95684893053789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836d4d0ff1cd425%3A0xdf451d782aaa51bd!2s3875+Massillon+Rd+%23300%2C+Uniontown%2C+OH+44685!5e0!3m2!1sen!2sus!4v1519833193167"
          />
      </div>
    )
  }
}

export default ThreeEightSevenFive;
