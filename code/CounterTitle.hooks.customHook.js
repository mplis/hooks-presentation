const useDocumentTitle = title => {
  React.useEffect(() => {
    document.title = title;
  });
};

const Counter = props => {
  const [count, setCount] = React.useState(0);
  useDocumentTitle(`Count: ${count}`);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
