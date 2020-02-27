import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="content">
      <div className="contact-box">
        <h2>How to get in touch</h2>
        <p className="contact-p">
          Please get in touch with me at any time if you are hiring, want to
          talk code, or just to say hi! I love to talk shop, so even if you just
          want to talk about something you are working on or need help with your
          Javascript, feel free to drop me a line.
        </p>
        <ul className="contact-ul">
          <li className="contact-icon">
            <a
              href="https://github.com/r-kadel"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="contact-icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:ryan.kadel@yahoo.com?Subject=From%20Portfolio">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="contact-icon">
            <a
              href="https://www.linkedin.com/in/ryankadel"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contact;
