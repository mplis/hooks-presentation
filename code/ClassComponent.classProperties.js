class Counter extends React.Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count });
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
