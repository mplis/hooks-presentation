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
  }

  componentDidMount() {
    document.title = `Building ${this.state.name}`;
  }

  componentDidUpdate() {
    document.title = `Building ${this.state.name}`;
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
