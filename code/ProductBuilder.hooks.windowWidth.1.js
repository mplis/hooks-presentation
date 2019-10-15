const ProductBuilder = props => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    document.title = `Building ${name}`;
  });

  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  });

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
      <div>{width}</div>
    </div>
  );
};
