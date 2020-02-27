import React from 'react';
import './Projects.css';
import quizpic from '../../assets/quizpic.png';
import searchstream from '../../assets/searchstream_search.png';

function Projects() {
  return (
    <main className="content">
      <div className="projects-box">
        <section className="project-container">
          <h3>The Health Quiz App</h3>
          <img
            className="project-pic"
            src={quizpic}
            alt="Quiz App landing page"
          />
          <p>
            This is a simple quiz web application showcasing HTML CSS Javascript
            and in particular Jquery.
          </p>
          <p>
            It was my first from-scratch project in Thinkful's Software
            Engineering program and prompts the user with a series of questions
            and gives feedback from each one. At the conclusion of the quiz the
            user is shown their score and asked if they would like to play
            again. It's good for anyone looking for a basic biology refresher.
          </p>
          <div className="button-box">
            <button className="project-btn">
              <a className="project-btn-link"
                href="https://github.com/r-kadel/Quiz-App"
                target="_blank"
                rel="noopener noreferrer">
                Github Repo
              </a>
            </button>
            <button className="project-btn">
              <a className="project-btn-link"
                href="https://r-kadel.github.io/Quiz-App"
                target="_blank"
                rel="noopener noreferrer">
                Demo
              </a>
            </button>
          </div>
        </section>

        <div className="project-container">
          <h3>SearchStream</h3>
          <img
            className="project-pic"
            src={searchstream}
            alt="search stream search results"
          />
          <p>
            Tired of searching through hundreds of videos through your tens of
            video streaming services? SearchStream was designed for you to
            quickly locate the content you want, without all the clutter and
            wasted time in a traditional google search.
          </p>
          <p>
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
          <section className="button-box">
            <button className="project-btn">
              <a className="project-btn-link"
                href="https://github.com/r-kadel/searchstream"
                target="_blank"
                rel="noopener noreferrer">
                Github Repo
              </a>
            </button>
            <button className="project-btn">
              <a
                className="project-btn-link"
                href="https://searchstream.r-kadel.now.sh/"
                target="_blank"
                rel="noopener noreferrer">
                Demo
              </a>
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Projects;
