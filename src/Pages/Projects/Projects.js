import React from 'react';
import './Projects.css';
import quizpic from '../../assets/quizpic.png';
import searchstream from '../../assets/searchstream_search.png';
import fixit from '../../assets/Fixit.png';
import metalspace from '../../assets/home.png';

function Projects() {
  return (
    <main className="content">
      <div className="projects-box">
        <section className="project-container">
          <h3>MetalSpace</h3>
          <a
            className="project-pic-link"
            href="https://metalspace.now.sh/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="project-pic"
              src={metalspace}
              alt="metalspace home"
            />
          </a>
          <div className="button-box">
            <a
              className="project-btn-link"
              href="https://github.com/r-kadel/metalspace"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Repo</button>
            </a>
            <a
              className="project-btn-link"
              href="https://metalspace.now.sh/"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Demo</button>
            </a>
          </div>
          <p>
            MetalSpace is a social media application for metal heads to engage
            with each other, talk about the bands they like, share opinions and
            complain about music in general (especially metal).
          </p>
          <p>
            This is a full stack web application deployed with Zeit/now/Vercel
            that uses React and custom vanilla CSS on the front end to deliver a
            fast and accessible user experience. On the back end Node.js using
            an express server handle the routing and API and a postgresql
            database stores the users data, the posts, and comments. JWT is used
            to authenticate and validate users to ensure the security of our
            users personal information. The API is powered by Heroku and handles
            the the various post, get, patch and delete requests in addidtion to
            authenticating users and assisting the front end in validating
            requests. The Heroku postgres database stores all of the users data,
            posts and comments.
          </p>
        </section>

        <hr className="project-hr" />

        <section className="project-container">
          <h3>SearchStream</h3>
          <a
            className="project-pic-link"
            href="https://searchstream.now.sh/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="project-pic"
              src={searchstream}
              alt="search stream search results"
            />
          </a>
          <div className="button-box">
            <a
              className="project-btn-link"
              href="https://github.com/r-kadel/searchstream"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Repo</button>
            </a>
            <a
              className="project-btn-link"
              href="https://searchstream.now.sh/"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Demo</button>
            </a>
          </div>
          <p className="project-p">
            Tired of searching through hundreds of videos through your tens of
            video streaming services? SearchStream was designed for you to
            quickly locate the content you want, without all the clutter and
            wasted time in a traditional google search.
          </p>
          <p className="project-p">
            This is a full stack web application deployed with Zeit that uses
            React and custom vanilla CSS on the front end to deliver a fast and
            accessible user experience. On the back end Node.js using an express
            server handle the routing and API and a postgresql database stores
            the users log in information. JWT is used to authenticate and
            validate users to ensure the security of our users personal
            information. The API is powered by Heroku and is set up to take POST
            requests from the client and validate them against the user data
            stored in the postgresql database. If the request is sucessful and
            validated by the server a JWT token is sent to the client allowing
            them to access the main app and the search endpoint.
          </p>
        </section>

        <hr className="project-hr" />

        <section className="project-container">
          <h3>FixIt</h3>
          <a
            className="project-pic-link"
            href="https://brittanyweickert.github.io/fixit"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="project-pic"
              src={fixit}
              alt="Fixit App landing page"
            />
          </a>
          <div className="button-box">
            <a
              className="project-btn-link"
              href="https://github.com/brittanyweickert/fixit"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Repo</button>
            </a>

            <a
              className="project-btn-link"
              href="https://brittanyweickert.github.io/fixit"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Demo</button>
            </a>
          </div>
          <p className="project-p">
            This is the API Hack capstone project for Thinkul's Nights and
            Weekends software engineering course. For this project I worked with
            an excellent partner:{' '}
            <a
              href="https://github.com/brittanyweickert/"
              target="_blank"
              rel="noopener noreferrer">
              <span id="partner-name">
                <i className="fab fa-github"></i> Brittany Weickert
              </span>
            </a>
          </p>
          <p className="project-p">
            The App is designed with people who have recently damaged their
            smartphones in mind. The user enters the smartphone model and zip
            code and they are shown a list of youtube videos that demonstrate
            the repair for the DIY'er as well as a map of their area with
            markers and list for local repair shops If they are less bold.
          </p>
          <ul className="tech-list">
            <li>This app uses the youtube API to display the videos</li>
            <li>
              {' '}
              Google Cloud Platform -
              <ul className="google-list">
                <li>
                  Geocode API to turn their zip code into usable lat and long
                  numbers
                </li>
                <li>
                  Google's Javascript Maps API to display the results as markers
                  on a map of their area
                </li>
              </ul>
            </li>
            <li>
              The lists of shops are populated using Foursquare's search API
            </li>
            <li>
              The app also features ample HTML, CSS, Javascript and jQuery
            </li>
          </ul>
        </section>

        <hr className="project-hr" />

        <section className="project-container">
          <h3>The Health Quiz App</h3>
          <a
            className="project-pic-link"
            href="https://r-kadel.github.io/Quiz-App"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="project-pic"
              src={quizpic}
              alt="Quiz App landing page"
            />
          </a>
          <div className="button-box">
            <a
              className="project-btn-link"
              href="https://github.com/r-kadel/Quiz-App"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Repo</button>
            </a>
            <a
              className="project-btn-link"
              href="https://r-kadel.github.io/Quiz-App"
              target="_blank"
              rel="noopener noreferrer">
              <button className="project-btn">Demo</button>
            </a>
          </div>
          <p className="project-p">
            This is a simple quiz web application showcasing HTML CSS Javascript
            and in particular Jquery.
          </p>
          <p className="project-p">
            It was my first from-scratch project in Thinkful's Software
            Engineering program and prompts the user with a series of questions
            and gives feedback from each one. At the conclusion of the quiz the
            user is shown their score and asked if they would like to play
            again. It's good for anyone looking for a basic biology refresher.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Projects;
