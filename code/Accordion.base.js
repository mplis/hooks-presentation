class Accordion extends React.Component {
  state = { isOpen: false };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.isOpen ? 'Close' : 'Open'}
        </button>
        {this.state.isOpen ? this.props.children : null}
      </div>
    );
  }
}
