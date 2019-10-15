class ProductBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <label>Product Name</label>
        <input value={this.state.name} onChange={this.handleNameChange} />
      </div>
    );
  }
}
