import React, { Component } from 'react';
//import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

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
                  <li className="hiddenBelow400"><a href="https://instagram.com/bobzurad">Instagram</a></li>
                  <li><a href="">Resume</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <div className="myPhoto">
              <img src="https://www.gravatar.com/avatar/d1fe45f892dc81c63e882d8fe4d63f57?s=300" alt="Bob Zurad"/>
            </div>
            <h1 className="cover-heading">Hi. I'm Bob.</h1>
            <p className="lead">
              When I'm not spending time with my wife and daughter, I like to <a href="https://github.com/bobzurad">write code</a> and <a href="http://steamcommunity.com/id/spurioustuple/">play video games.</a> I'm also a fan of <a href="https://stackoverflow.blog/2017/02/08/means-remote-first-company/">working remote</a>.
            </p>
            <p className="lead">
              Thanks for visiting.
            </p>

            <h2 className="appsHeader">Apps I've Created</h2>
            <div className="row">
              <div className="col-md-4 appInfo">
                <h3><a href="https://www.notefireapp.com">NoteFire</a></h3>
                <p>
                  A lightweight notes app that stores data in the cloud. 
                </p>
                <p>
                  <a href="https://github.com/bobzurad/NoteFire">Source Code</a>
                </p>
              </div>
              <div className="col-md-4 appInfo">
                <h3><a href="https://play.google.com/store/apps/details?id=net.zurad.bob.whitenoisenightlight">Night Light</a></h3>
                <p>
                  An Android app that allows the device to be used as a night light and provide white noise.
                </p>
                <p>
                  <a href="https://github.com/bobzurad/WhiteNoiseNightLight">Source Code</a>
                </p>
              </div>
              <div className="col-md-4 appInfo">
                <h3>ABV Calculator</h3>
                <p>
                  A Windows app that calculates the ABV of homebrew, given the Original Gravity and Final Gravity.
                </p>
                <p>
                  <small class="text-muted">
                    (no longer available)
                  </small>
                </p>
                <p>
                  <a href="https://github.com/bobzurad/NoteFire">Source Code</a>
                </p>
              </div>
            </div>
          </div>

          <div className="footer">
            <p>Never Stop Learning</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;