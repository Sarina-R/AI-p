import React, { useRef, useState } from "react";
import "./email.css";
import emailjs from "@emailjs/browser";
import PopUp from "./PopUp/PopUp";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_Sarina",
        "template_djta3qi",
        form.current,
        "hFRmq2fQNVXw1wOjr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // Create a state variable to control the visibility of the PopUp component
  const [showPopUp, setShowPopUp] = useState(false);

  // Create a function to toggle the state variable when the input element is clicked
  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
    // Add a timer function that will set the showPopUp state variable to false after 5 seconds
    setTimeout(() => {
      setShowPopUp(false);
    }, 3500);
  };
  return (
    <div className="body">
      <section className="section-email">
        <span className="bg" />
        <form ref={form} onSubmit={sendEmail} className="formE">
          <h1>Conect Us</h1>
          <div className="name input-box">
            <input type="text" name="user_name" />
            <label>Name</label>
          </div>
          <div className="email input-box">
            <input type="email" name="user_email" />
            <label>Email</label>
          </div>
          <div>
            <div className="message input-box">
              <textarea name="message" />
              <label className="lable">Message</label>
            </div>
          </div>
          <div className="send">
            <input type="submit" value="Send" onClick={handlePopUp} />
          </div>
        </form>
        <div className="right-e">
          <h1>How does it work?</h1>
          <p className="pLarg">
            With Emailjs, you can send me an email using their server and not
            your own. It allows you to send emails without having to set up a
            backend server.
          </p>
          <p className="pSmall">
            With Emailjs, you can send me an email using their server and not
            your own. This means you will not see your sent email in your
            dashboard, but I will receive your message. Emailjs is a service
            that allows you to send emails from your website without having to
            set up a backend server or an SMTP server. You can learn more about
            how Emailjs works and how to use it in your website from their
            official website or this tutorial.
          </p>
        </div>
      </section>
      {/* Render the PopUp component conditionally based on the state variable */}
      {showPopUp && <PopUp />}
    </div>
  );
};

export default Email;
