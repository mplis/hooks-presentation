class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count });
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
