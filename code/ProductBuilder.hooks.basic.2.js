const ProductBuilder = props => {
  const name = ???
  const setName = ???

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <label>Product Name</label>
      <input value={name} onChange={handleNameChange} />
    </div>
  );
};
