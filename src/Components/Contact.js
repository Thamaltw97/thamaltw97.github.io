import React, { useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-reveal";
import { ImLocation } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = (props) => {

  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   debugger
  //   const test = props;
  // }, []);

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onSubjectChange = (e) => {
    setSubject(e.target.value);
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm('thamal_portfolio_email', 'template_portfolio', form.current, 'user_JAXjiDVYXIrN8QkwDNmWG')
      .then((result) => {
        // alert('A name was submitted: ' + result.text);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Message sent successfully.',
          showConfirmButton: false,
          timer: 1500
        })
      }, (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Failed to send. Please contact me via Email.',
          showConfirmButton: false,
          timer: 3000
        })
      });
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error,
        showConfirmButton: false,
        timer: 3000
      })
    }
  }

  return(
    <>
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{!props.data ? null : props.data.contactmessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form  ref={form} onSubmit={handleSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="name"
                      name="name"
                      value={name}
                      onChange={onNameChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onEmailChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={onSubjectChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="5"
                      id="message"
                      name="message"
                      value={message}
                      onChange={onMessageChange}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              {/* <div id="message-warning" hidden={this.state.statusMsg === 'fail' ? false : true}>Error!</div>
              <div id="message-success" hidden={this.state.statusMsg === 'success' ? false : true}>
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div> */}
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                {/* <h4>Address - Phone - Email</h4> */}
                <p className="address">
                  {/* {name} */}
                  {/* <br /> */}
                  <div>
                    <div className="icon" style={{display: "flex", flexDirection: "row"}}><ImLocation color="#fff" size="2rem" /><h4 style={{marginLeft: "1.5rem"}}>Address</h4></div>
                    {!props.data ? null : props.data.address.street1} <br />
                    {!props.data ? null : props.data.address.street2} <br />
                    {!props.data ? null : props.data.address.city}
                    {/* <br /> {state}  */}
                    <br /> {!props.data ? null : props.data.address.country} <br /> {!props.data ? null : props.data.address.zip}
                  </div>
                  
                  <br />
                  <div>
                    <div className="icon" style={{display: "flex", flexDirection: "row"}}><FaPhoneAlt color="#fff" size="1.5rem" /><h4 style={{marginLeft: "1.5rem"}}>Phone</h4></div>
                    <span>{!props.data ? null : props.data.phone}</span>
                  </div>
                  <br />
                  <div>
                    <div className="icon" style={{display: "flex", flexDirection: "row"}}><MdEmail color="#fff" size="2rem" /><h4 style={{marginLeft: "1.5rem"}}>Email</h4></div>
                    <span>{!props.data ? null : props.data.email}</span>
                  </div>
                </p>
              </div>

              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div> */}
            </aside>
          </Slide>
        </div>
      </section>
    </>
  )

}

export default Contact;