class ProductBuilder extends React.Component {
  state = {
    name: 'My Tour',
    description: "It's great!",
    width: window.innerWidth,
  };

  componentDidMount() {
    document.title = `Building ${this.state.name}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      document.title = `Building ${this.state.name}`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <div>
        <label>Product Name</label>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <label>Description</label>
        <input
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <div>{this.state.width}</div>
      </div>
    );
  }
}
