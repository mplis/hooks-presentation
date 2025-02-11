class ProductBuilder extends React.Component {
  state = {
    name: 'My Tour',
    description: "It's great!",
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
      </div>
    );
  }
}
