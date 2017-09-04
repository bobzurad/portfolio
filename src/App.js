import React, { Component } from 'react';
//import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import resume from './zurad_bob_resume.pdf';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper-inner">
        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner">
              <h4 className="masthead-brand">@bobzurad</h4>
              <nav>
                <ul className="nav masthead-nav">
                  <li><a href="https://github.com/bobzurad">GitHub</a></li>
                  <li><a href="https://twitter.com/bobzurad">Twitter</a></li>
                  <li><a href="https://instagram.com/bobzurad">Instagram</a></li>
                  <li><a href={resume}>Resume</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <h1 className="cover-heading">Hi. I'm Bob.</h1>
            <p className="lead">
              When I'm not spending time with my wife and daughter, I like to <a href="https://github.com/bobzurad">write code</a> and <a href="http://steamcommunity.com/id/spurioustuple/">play video games.</a> I'm currently accepting work with <a href="https://stackoverflow.blog/2017/02/08/means-remote-first-company/">remote-first</a> employers. If you like what you see on my resume or GitHub, please drop me a line.
            </p>
            <p className="lead">
              Peace
            </p>
          </div>

          <div className="mastfoot">
            <div className="inner">
              <p>Never Stop Learning</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;