import React from 'react'

function WorkingHours() {
  return (
    <div>
        <div className="overflow-hidden space">
      <div className="container">
        <div className="appointment-row">
          <div className="schedule-box">
            <div className="shape"></div>
            <h3 className="box-title">Working Hours</h3>
            <p className="box-text">
              Variations of passages amt available are anything embarrassing.
            </p>
            <p className="box-timing">Monday - Tuesday: <span>9am - 6pm</span></p>
            <p className="box-timing">
              Wednesday - Thursday: <span>8am - 5pm</span>
            </p>
            <p className="box-timing">Friday: <span>7am - 10pm</span></p>
            <p className="box-timing">Saturday: <span>10am - 7pm</span></p>
            <p className="box-timing">Sunday: <span>Colsed</span></p>
          </div>
          <div className="form-wrap">
            <div className="img-box4">
              <div className="img1">
                <img src="assets/img/normal/form_1_1.jpg" alt="Image" />
              </div>
              <div className="img2">
                <img src="assets/img/normal/form_1_2.jpg" alt="Image" />
              </div>
            </div>
            <form
              action="https://html.themeholy.com/mediax/demo/mail.php"
              method="POST"
              className="appointment-form"
            >
              <h4 className="form-title">Contact Us</h4>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    id="number"
                    placeholder="Phone Number"
                  />
                </div>
                {/* <!-- <div className="form-group col-12">
                  <select name="subject" id="subject" className="form-select">
                    <option
                      value=""
                      disabled="disabled"
                      selected="selected"
                      hidden
                    >
                      Choose Department
                    </option>
                    <option value="Make Appointment">Make Appointment</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Medicine Help">Medicine Help</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div> --> */}
                {/* <!-- <div className="form-group col-6">
                  <input
                    type="text"
                    className="date-pick form-control"
                    name="date"
                    id="date-pick"
                    placeholder="Date"
                  />
                </div> --> */}
                {/* <!-- <div className="form-group col-6">
                  <input
                    type="text"
                    className="time-pick form-control"
                    name="time"
                    id="time-pick"
                    placeholder="Time"
                  />
                </div> --> */}
                <div className="form-btn col-12">
                  <button className="th-btn btn-fw">Submit</button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WorkingHours