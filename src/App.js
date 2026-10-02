import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import emailIcon from './assets/envelope-regular.png';
import githubIcon from './assets/github-brands-solid.png';
import documentIcon from './assets/file-regular.png';
import resume from './assets/Resume-BobZurad-2026.pdf';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper-inner">
        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner banner-row">
              <span>
                <img src={emailIcon} className="icon" alt="Email Icon"/>
                <a href="mailto:bob.zurad@gmail.com"><strong>Bob Zurad</strong></a>
              </span>
              <span className="header-link">
                <img src={githubIcon} className="icon" alt="GitHub Icon"/>
                <a href="https://github.com/bobzurad"><strong>GitHub</strong></a>
              </span>
              <span className="header-link">
                <img src={documentIcon} className="icon" alt="Document Icon"/>
                <a href={resume} target="_blank" rel="noopener noreferrer"><strong>Resume</strong></a>
              </span>
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
                  <h3><strong>NoteFire</strong></h3>
                  <p>
                    A lightweight notes app that stores data in the cloud. 
                  </p>
                  <p>
                    <a href="https://www.notefireapp.com">www.notefireapp.com</a>
                  </p>
                  <p>
                    <a href="https://github.com/bobzurad/NoteFire">Source Code</a>
                  </p>
                </Well>
              </div>
              <div className="col-md-6 appInfo">
                <Well bsSize="large">
                  <h3><strong>Zurdle</strong></h3>
                  <p>
                    A Wordle clone that I made for my daughter.&nbsp;&nbsp;
                    <small class="text-muted">
                      (NYT, please don't sue me)
                    </small>
                  </p>
                  <p>
                    <a href="https://zurdle.vercel.app">zurdle.vercel.app</a>
                  </p>
                  <p>
                    <a href="https://github.com/bobzurad/zurdle">Source Code</a>
                  </p>
                </Well>
              </div>
              <div className="col-md-6 appInfo">
                <Well bsSize="large">
                  <h3><strong>Night Light</strong></h3>
                  <p>
                    An Android app that allows the device to be used as a night light and provide white noise.
                  </p>
                  <p>
                    <a href="https://play.google.com/store/apps/details?id=net.zurad.bob.whitenoisenightlight">Google Play Store</a>
                  </p>
                  <p>
                    <a href="https://github.com/bobzurad/WhiteNoiseNightLight">Source Code</a>
                  </p>
                </Well>
              </div>
              <div className="col-md-6 appInfo">
                <Well bsSize="large">
                  <h3><strong>ABV Calculator</strong></h3>
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