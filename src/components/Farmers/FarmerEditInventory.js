import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteFood, fetchFood, updateFood, addFood } from '../../actions';

const FarmerEditInventory = props => {
  const [items, setItems] = useState({
    id: Date.now(),
    name: '',
    quantity: '',
    price: ''
  });

  const id = props.match.params.id;

  useEffect(() => {
    fetchFood();
  }, [id]);

  const handleChange = e => {
    e.preventDefault();
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSub = (e, id) => {
    e.preventDefault();
    addFood(id);
    props.history.push('/produce');
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    props.updateFood(id);
    props.history.push('/produce');
  };

  const deleteItem = (e, id) => {
    e.preventDefault();
    props.deleteFood(id);
    props.history.push('/produce');
  };

  return (
    <div>
      <h1>Produce Inventory</h1>
      <form onSubmit={handleSub}>
        <input
          label='name'
          name='name'
          placeholder='Produce Name'
          value={items.name}
          onChange={handleChange}
        />
        <input
          label='quantity'
          name='quantity'
          placeholder='Quantity'
          value={items.quantity}
          onChange={handleChange}
        />
        <input
          label='price'
          name='price'
          placeholder='Price'
          value={items.price}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Add Item</button>
        <br />
        <button onClick={e => handleSubmit(e, id)}>Edit Item</button>
        <br />
        <button onClick={deleteItem}>Delete Item</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAdding: state.isAdding,
  isDeleting: state.isDeleting,
  isUpdating: state.isUpdating,
  isFetching: state.isFetching,
  error: state.error
});

export default connect(mapStateToProps, { deleteFood, fetchFood, updateFood })(
  FarmerEditInventory
);
