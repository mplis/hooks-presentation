class ProductBuilder extends React.Component {
  state = {
    name: 'My Tour',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <label>Product Name</label>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}
