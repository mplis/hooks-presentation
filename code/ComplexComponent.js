class ComplexComponent extends React.Component {
  constructor() {
    this.state = { value: '' };
  }

  componentDidMount() {
    document.title = `Hello: {this.props.name}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = `Hello: {this.props.name}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleChange = newValue => {
    this.setState({ value: newValue });
  };
}
