import React from 'react'

function ContactForm() {
  return (
    <div>
      <div className="space-bottom">
        <div className="container">
          <form
            action="https://html.themeholy.com/mediax/demo/mail.php"
            method="POST"
            className="contact-form ajax-contact"
            // data-bg-src="assets/img/bg/contact_form_bg.png"
            style={{
              backgroundImage: "url('/assets/img/bg/contact_form_bg.png')",
            }}
          >
            <div className="input-wrap">
              <h2 className="sec-title">Get In Touch!</h2>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                  <i className="fal fa-user"></i>
                </div>
                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  <i className="fal fa-envelope"></i>
                </div>
                <div className="form-group col-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    id="number"
                    placeholder="Phone Number"
                  />
                  <i className="fal fa-phone"></i>
                </div>
                {/***** ******************************** select option */}
                {/* <div className="form-group col-12">
                  <select name="subject" id="subject" className="form-select">
                    <option
                      value=""
                      disabled="disabled"
                      selected="selected"
                      hidden
                    >
                      Select Subject
                    </option>
                    <option value="Make Appointment">Make Appointment</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Medicine Help">Medicine Help</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                  <i className="fal fa-chevron-down"></i>
                </div> */}
                <div className="form-group col-12">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={3}
                    className="form-control"
                    placeholder="Type..."
                  ></textarea>
                  <i className="fal fa-pencil"></i>
                </div>
                <div className="form-btn col-12">
                  <button className="th-btn btn-fw">BOOK AN APPOINTMENT</button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm