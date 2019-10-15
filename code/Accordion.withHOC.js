const Accordion = withToggle(props => {
  return (
    <div>
      <button onClick={props.onToggle}>
        {props.isOn ? 'Close' : 'Open'}
      </button>
      {props.isOn ? props.children : null}
    </div>
  );
});
