import React from 'react';
import './Landing.css'
import selfie1 from '../../assets/selfie1.jpg';

function Landing() {
  return (
    <main className="content">
      <div className="landing-box">
        <h1>Ryan Kadel</h1>
        <p>- Fullstack Web Developer</p>
        <img src={selfie1} alt="A shameful selfie" className="selfie" />
        <ul className="landing-ul">
          <li className="landing-icon">
            <a
              href="https://github.com/r-kadel"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="landing-icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:ryan.kadel@yahoo.com?Subject=From%20Portfolio">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="landing-icon">
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

export default Landing;
