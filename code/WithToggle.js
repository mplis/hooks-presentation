const withToggle = WrappedComponent => {
  return class Toggle extends React.Component {
    state = { isOn: false };

    handleToggle = () => {
      this.setState({ isOn: !this.state.isOn });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isOn={this.state.isOn}
          onToggle={this.handleToggle}
        />
      );
    }
  };
};
