class ProductBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      width: window.innerWidth
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = `Building ${this.state.name}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = `Building ${this.state.name}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <div>
        <label>Product Name</label>
        <input value={this.state.name} onChange={this.handleNameChange} />
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
