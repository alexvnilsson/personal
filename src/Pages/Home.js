import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <h1>Who is Alexander?</h1>

        <p>
          Hello! I am a web developer, pure and simple. I work with NodeJs, ExpressJs, ReactJs, Angular <em>(not AngularJs)</em>.
        </p>
      </div>
    );
  }
}