const Counter = props => {
  const array = React.useState(0);
  const count = array[0];
  const setCount = array[1];

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
