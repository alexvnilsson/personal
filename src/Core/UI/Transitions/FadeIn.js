import React from "react";
import Posed, { PoseGroup } from "react-pose";

const FadeInTransition = Posed.div({
  visible: {
    opacity: 1,
    delay: ({ delay }) => ({ delay: delay }),
    transition: ({ duration }) => ({ duration: duration })
  },
  hidden: {
    opacity: 0,
    transition: ({ duration }) => ({ duration: duration })
  },
  props: {
    delay: 50,
    duration: 500
  }
});

export default class FadeIn extends React.Component {
  static defaultProps = {
    delay: 100,
    duration: 500
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  render() {
    const { isVisible } = this.state;
    const { delay, duration } = this.props;

    return (
      <FadeInTransition pose={isVisible} delay={delay} duration={duration}>
        {this.props.children}
      </FadeInTransition>
    );
  }
}
