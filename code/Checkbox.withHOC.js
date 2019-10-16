const Checkbox = withToggle(props => {
  return (
    <button onClick={props.onToggle}>
      {props.isOn ? '✅' : '❎'}
    </button>
  );
});
