import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Assets/logo.png";
import  './ContactUs.css';

export  class ContactUs extends Component {
    render() {
        return (
          <div>
            <div>
              <div>
                <div className="contact-form" style={{textAlign:"center"}}>
                  <div className="contact-image">
                  <img src={logo}/>
                  </div>
                  <form method="post">
                    <h3>Contact Us</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="txtName"
                            className="form-control"
                            placeholder="Your Name *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="txtEmail"
                            className="form-control"
                            placeholder="Your Email *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="txtPhone"
                            className="form-control"
                            placeholder="Your Phone Number *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            name="btnSubmit"
                            className="btnContact"
                            value="Send Message"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <textarea
                            name="txtMsg"
                            className="form-control"
                            placeholder="Your Message *"
                            style={{width: "100%",height: "150px"}}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
