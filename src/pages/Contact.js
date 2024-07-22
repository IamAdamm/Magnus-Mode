import React, { useEffect } from 'react';
import '../styles/Contact.css'
import Swal from 'sweetalert2'



function Contact() {

    useEffect(() => {
        if (document.getElementById('contactFormTitleText')) {
          document.getElementById('contactFormTitleText').classList.add('contactFormTitleTypingAnim');
        }
      }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fc239067-4ea2-4e4d-b5b2-de1f67534bbe");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Message sent successfully!",
                icon: "success"
              });
        }
      };

  return (
    <div className='contact' id='contact'>
        <div className='contactForm'>
            <form>
                <div className='contactFormTitle'>
                    <h1 id='contactFormTitleText' className='contactFormTitleText'>Leave us a message!</h1>
                </div>
                <div className='contactFormInput'>
                    <label className='contactFormInputFullName'>Full Name:</label>
                    <input type='text' className='field' placeholder='Enter your full name' required/>
                </div>
                <div className='contactFormInput'>
                    <label>Email:</label>
                    <input type='email' className='field' placeholder='Enter your Email' required/>
                </div>
                <div className='contactFormInput'>
                    <label>Your Message:</label>
                    <textarea className='field-Mess' placeholder='Enter your Message' required/>
                </div>
                <button onSubmit={onSubmit} type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact