import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs
        .sendForm(
          "service_2mu5xtl",
          "template_m5udu2c",
          form.current,
          "VLwg1ltOWvnCYAiK_",
          {
            action: "https://getform.io/f/ea716528-cde7-4a76-b09c-0499d3966325",
          }
        )
        .then(
          (result) => {
            if (result.success) {
              // The form was submitted successfully.
              setDone(true);
              form.reset();
              alert("Thank you for your submission!");
            } else {
              // The form was not submitted successfully.
              console.log(result.errors);
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  };
  

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
      <form action="https://getform.io/f/ea716528-cde7-4a76-b09c-0499d3966325" method="POST">
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        {/* <form action="https://getform.io/f/ea716528-cde7-4a76-b09c-0499d3966325" method="POST">
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="text" name="message" />
  <button type="submit">Send</button>
</form> */}

      </div>
    </div>
  );
};

export default Contact;
