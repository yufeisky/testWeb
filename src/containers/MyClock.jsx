import React from 'react';
import Clock from '@cp/Clock';

class MyClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const { state } = this;

    state.now = new Date();
    this.setState(state);
  }

  render() {
    return <Clock date={this.state.now} />;
  }
}

export default MyClock;
