const ProductBuilder = props => {
  const [name, setName] = React.useState('My Tour');
  const [description, setDescription] = React.useState("It's great!");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <label>Product Name</label>
      <input value={name} onChange={handleNameChange} />
      <label>Description</label>
      <input value={description} onChange={handleDescriptionChange} />
    </div>
  );
};
