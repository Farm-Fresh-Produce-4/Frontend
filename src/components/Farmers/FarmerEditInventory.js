import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteFood, fetchFood, updateFood } from '../../actions';

const FarmerEditInventory = props => {
  const [items, setItems] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  // useEffect(() => {
  //   fetchFood();
  // }, []);

  const handleChange = e => {
    e.preventDefault();
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.updateFood();
    props.history.push('/inventory');
  };

  const deleteItem = e => {
    e.preventDefault();
    props.deleteFood();
    props.history.push('/inventory');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button onClick={e => handleSubmit(e, updateFood())}>
          Add/Edit Item
        </button>
        <button onClick={deleteItem}>Delete Item</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isDeleting: state.isDeleting,
  isUpdating: state.isUpdating,
  isFetching: state.isFetching,
  error: state.error
});

export default connect(mapStateToProps, { deleteFood, fetchFood, updateFood })(
  FarmerEditInventory
);
