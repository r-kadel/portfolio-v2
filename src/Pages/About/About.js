import React from 'react';
import './About.css';

function About() {
  return (
    <main className="content">
      <div className="about-box">
        <h3>A little about me</h3>

        <p className="about-paragraph">
          Hello, I am Ryan, a recent graduate of the Thinkful Software
          Engineering course. I've been interested in computers since I was very
          young and first got my hands on a "Macintosh II" in a computers summer
          camp, because I was the kid hat wanted to go to computer camp. After
          over a decade in retail and retail management I'm finally doing
          something that I really enjoy and hope to combine my experience with
          my passion for programming to excel in the modern team based
          development environment. I am a lifetime gamer and tech enthusiast,
          with leadership and team work skills learned from years of experience
          in retail management, and a former High Warlord in World of Warcraft.
        </p>
        <h3>Specializing in:</h3>
        <ul className="tech-list">
          <li className="tech-icon">HTML 5</li>
          <li className="tech-icon">JavaScript</li>
          <li className="tech-icon">CSS 3</li>
          <li className="tech-icon">React</li>
          <li className="tech-icon">Node.js</li>
          <li className="tech-icon">Postgresql</li>
        </ul>
      </div>
    </main>
  );
}

export default About;
