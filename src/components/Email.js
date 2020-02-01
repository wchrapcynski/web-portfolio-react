import React, {useState} from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(event) {
    event.preventDefault();
    handleSubmit();
    emailjs
      .sendForm(
        "gmail",
        "template_Fio2YPhJ",
        event.target,
        "user_pjfxHGckNRbG9jLyUaKXL"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
	}	

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

	function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handleMessageChange(event) {
    setMessage(event.target.value)
  }

  function handleSubmit() {
    setName(null);
    setEmail(null);
    setMessage(null);
    setFormSubmitted(true);
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      Contact form: {formSubmitted ? "Form Submitted" : "Please Fill All Fields"}
      <hr className='rule'/>
      <input type='hidden' name='contact_number' />
      <label>Name</label>
      <input className='contact-form-name' type='text' name='user_name' onChange={handleNameChange} />
      <label>Email</label>
      <input className='contact-form-email' type='email' name='user_email' onChange={handleEmailChange} />
      <label>Message</label>
      <textarea className='contact-form-message' name='message' onChange={handleMessageChange} />
      <input type='submit' value='Send' id='submit' disabled={!name || !email || !message}/>
    </form>
  );
}
