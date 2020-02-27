import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Landing from '../../Pages/Landing/Landing';
import About from '../../Pages/About/About';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../../Pages/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
