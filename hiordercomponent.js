
import React from 'react'
//פקד השעון
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticks: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState(state => ({ ticks: state.ticks + 1 }))
  }

  render() {
    const { ticks } = this.state;

    return (
      <>
      <p>Ticks... {ticks}</p>
      <p>Ticks... {this.ddd}</p></>
    );
  }
}


// פקד המשנה את השמות באופן רנדומלי
export class NewsTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemIndex: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    const { items } = this.props;
    this.setState(state => ({ itemIndex: (state.itemIndex + 1) % items.length }));
  }

  render() {
    const { items } = this.props;
    const { itemIndex } = this.state;

    return (
      <h1 style={{color:items[itemIndex]}}>{items[itemIndex]}</h1>
    );
  }
}

//withTimer

function withTimer(Component) {
  return class WithTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ticks: 0 };
    }
    componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }
    tick = () => {
      this.setState(state => ({ ticks: state.ticks + 1 }))
    }
    render() {
      debugger
      const { ticks } = this.state;
      const { items } = this.props
      return (
        <Component ticks={ticks} {...this.props} />
      );
    }
  }
}


export const ClockHierOrderCompomemt = withTimer(class Clock extends React.Component {
  render() {
    const { ticks } = this.props;
    return (
      <h1>Ticks... {ticks}</h1>
    );
  }
});
export const NewsTickerHierOrderCompomemt = withTimer(class NewsTicker extends React.Component {
  render() {
    const { items, ticks } = this.props;
    const itemIndex = ticks % items.length;

    return (
      <h1 style={{color:items[itemIndex]}}>{items[itemIndex]}</h1>
    );
  }
});
