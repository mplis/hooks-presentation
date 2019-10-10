const Counter = props => {
  const [count, setCount] = React.useState(0);

  // don't do this
  if (count < 10) {
    React.useEffect(() => {
      document.title = `Count: ${count}`;
    });
  }

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
