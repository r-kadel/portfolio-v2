import React from 'react';
import './About.css';

function About() {
  return (
    <main className="content">
      <div className="about-box">
        <h3>A little about me</h3>
        <ul className="bio-list">
          <li>Lifetime gamer and computer enthusiast</li>
          <li>
            Leadership learned from years of experience in retail management
          </li>
          <li>
            {' '}
            Fluent in:
            <ul>
              <li>Javascript</li>
              <li>HTML 3</li>
              <li>CSS 3</li>
            </ul>
          </li>
          <li>World of Warcraft High Warlord</li>
        </ul>
        <p className="about-paragraph">
          Hello, I am Ryan, a recent graduate of the Thinkful Software
          Engineering course. I've been interested in computers since I was very
          young and first got my hands on a "Macintosh II" in a computers summer
          camp, because I was the kid hat wanted to go to computer camp. After
          over a decade in retail and retail management I'm finally doing
          something that I really enjoy and hope to combine my experience with my
          passion for programming to excel in the modern team based development
          environment.
        </p>
      </div>
    </main>
  );
}

export default About;
