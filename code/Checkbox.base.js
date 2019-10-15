class Checkbox extends React.Component {
  state = { isChecked: false };

  handleToggle = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <button onClick={this.handleToggle}>
        {this.state.isChecked ? '✅' : '❎'}
      </button>
    );
  }
}
