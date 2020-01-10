import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteFood,
  fetchFood,
  updateFood,
  addFood,
  fetchFarms
} from '../../actions';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label } from 'reactstrap';

const FarmerEditInventory = props => {
  const [items, setItems] = useState({
    id: Date.now(),
    name: '',
    quantity: '',
    price: ''
  });

  useEffect(() => {
    fetchFood();
    console.log(fetchFarms());
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSub = e => {
    e.preventDefault();
    addFood();
    props.history.push('/produce');
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.updateFood();
    props.history.push('/produce');
  };

  const deleteItem = e => {
    e.preventDefault();
    props.deleteFood();
    props.history.push('/produce');
  };

  return (
    <div>
      <Form onSubmit={handleSub}>
        {/* <h1>Produce Inventory</h1> */}
        <FormGroup>
          <Label for='name'>Name: </Label>
          <br />
          <input
            name='name'
            placeholder='Produce Name'
            value={items.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='quantity'>Quantity: </Label>
          <br />
          <input
            name='quantity'
            placeholder='Quantity'
            value={items.quantity}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='Price'>Price: </Label>
          <br />
          <input
            name='price'
            placeholder='Price'
            value={items.price}
            onChange={handleChange}
          />
        </FormGroup>
        <br />
        <Button type='submit'>Add Item</Button>
        <br /> <br />
        <Button onClick={e => handleSubmit(e)}>Edit Item</Button>
        <br /> <br />
        <Button onClick={deleteItem}>Delete Item</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAdding: state.isAdding,
  isDeleting: state.isDeleting,
  isUpdating: state.isUpdating,
  isFetching: state.isFetching,
  error: state.error,
  produce: state.produce
});

export default connect(mapStateToProps, { deleteFood, fetchFood, updateFood })(
  FarmerEditInventory
);
