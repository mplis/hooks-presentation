class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  render() {
    const { count } = this.state;
    return (
      <button
        onClick={() => this.setState({ count: count + 1 })}
      >
        {count}
      </button>
    );
  }
}
