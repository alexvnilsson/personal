import React from "react";
import { Transition } from "react-transition-group";

export default class FadeInAndPanDown extends React.Component {
  static defaultProps = {
    delay: 50,
    duration: 500
  };

  constructor(props) {
    super(props);

    this.state = {
      goIn: false
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          goIn: true
        }),
      this.props.delay
    );
  }

  render() {
    const defaultStyle = {
      transition: `all ${this.props.duration}ms ease-in-out`,
      opacity: 0,
      transform: "translate(0px, -100px)"
    };

    const transitionStyles = {
      entering: { transform: "translate(0px, 0px)", opacity: 1 },
      entered: { transform: "translate(0px, 0px)", opacity: 1 },
      exiting: { transform: defaultStyle.transform, opacity: 0 },
      exited: { transform: defaultStyle.transform, opacity: 0 }
    };

    return (
      <Transition in={this.state.goIn} timeout={this.props.duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {this.props.children}
          </div>
        )}
      </Transition>
    );
  }
}
