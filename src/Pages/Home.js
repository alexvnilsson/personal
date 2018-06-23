import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import Button from 'Core/UI/Components/Button';

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <h1>Lorem ipsum</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lacus et dolor auctor vulputate. In at faucibus neque. Curabitur quis ornare lectus. Ut placerat tincidunt imperdiet. Nulla dictum pellentesque mi et pulvinar. Ut fermentum enim in mauris mattis feugiat. Sed auctor odio nec ex lobortis, aliquet sodales leo semper. Nam eget vehicula mauris.
        </p>

        <p className="text-align-center">
          <Link to="/showcase">
            <Button>Portfolio showcase</Button>
          </Link>
        </p>
      </div>
    );
  }
}