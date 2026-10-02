import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper-inner">
        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner row">
              <div className="col-xs-5">
                <h4 className="masthead-banner"><a href="https://www.zurad.net">Bob Zurad</a></h4>
              </div>
              <div className="col-xs-2 col-xs-offset-3 header-link">
                <h4><a href="https://github.com/bobzurad"><strong>GitHub</strong></a></h4>
              </div>
              <div className="col-xs-2 header-link">
                <h4><a href="./assets/Resume-BobZurad-2026.pdf"><strong>Resume</strong></a></h4>
              </div>
            </div>
          </div>

          <div className="inner cover">
            <div className="myPhoto">
              <img src="https://www.gravatar.com/avatar/d1fe45f892dc81c63e882d8fe4d63f57?s=300" alt="Bob Zurad"/>
            </div>
            <h1 className="cover-heading">Hi. I'm Bob.</h1>
            <p className="lead">
              I am a full stack software engineer with 20 years of experience. I have a passion for making great software. I believe that software should be well crafted and easy to use.
            </p>
            <p className="lead">
              I am currently seeking opportunities. If you are looking for a <a href="https://stackoverflow.blog/2017/02/08/means-remote-first-company/">remote</a> full stack software engineer, please <a href="mailto:bob.zurad@gmail.com">contact me</a>, and let's build something great together.
            </p>
            <p className="lead">
              Thanks for visiting.
            </p>

            <h2 className="appsHeader">Apps I've Created</h2>
            <div className="row">
              <div className="col-md-6 appInfo">
                <Well bsSize="large">
                  <h3><a href="https://www.notefireapp.com">NoteFire</a></h3>
                  <p>
                    A lightweight notes app that stores data in the cloud. 
                  </p>
                  <p>
                    <a href="https://github.com/bobzurad/NoteFire">Source Code</a>
                  </p>
                </Well>
              </div>
              <div className="col-md-6 appInfo">
                <Well bsSize="large">
                  <h3><a href="https://zurdle.vercel.app">Zurdle</a></h3>
                  <p>
                    A Wordle clone that I made for my daughter.&nbsp;&nbsp;
                    <small class="text-muted">
                      (NYT, please don't sue me)
                    </small>
                  </p>
                  <p>
                    <a href="https://github.com/bobzurad/zurdle">Source Code</a>
                  </p>
                </Well>
              </div>
              <div className="col-md-6 appInfo">
                <Well bsSize="large">
                  <h3><a href="https://play.google.com/store/apps/details?id=net.zurad.bob.whitenoisenightlight">Night Light</a></h3>
                  <p>
                    An Android app that allows the device to be used as a night light and provide white noise.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <a href="https://github.com/bobzurad/WhiteNoiseNightLight">Source Code</a>
                  </p>
                </Well>
              </div>
              <div className="col-md-6 appInfo">
                <Well bsSize="large">
                  <h3>ABV Calculator</h3>
                  <p>
                    A Windows 8 Metro app that calculates the ABV of homebrew, given the Original Gravity and Final Gravity.
                  </p>
                  <p>
                    <small class="text-muted">
                      (no longer available)
                    </small>
                  </p>
                  <p>
                    <a href="https://github.com/bobzurad/ABVCalculator">Source Code</a>
                  </p>
                </Well>
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