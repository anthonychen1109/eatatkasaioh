import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact-container container">
          <div className="contact-location container">
            <Iframe url={this.props.location}
              height="350px"
              width="100%"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </div>
          <div className="contact-info">
            <h1>Hours</h1>
            <div className="hours">
              <p>Monday: Closed</p>
              <p>Tuesday: 11:00 AM - 2:30 PM, 5:00 PM - 9:30 PM</p>
              <p>Wednesday: 11:00 AM - 2:30 PM, 5:00 PM - 9:30 PM</p>
              <p>Thursday: 11:00 AM - 2:30 PM, 5:00 PM - 9:30 PM</p>
              <p>Friday: 11:00 AM - 2:30 PM, 5:00 PM - 9:30 PM</p>
              <p>Saturday: 11:00 AM - 2:30 PM, 5:00 PM - 9:30 PM</p>
              <p>Sunday: 3:00 pm - 9:30 pm</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
