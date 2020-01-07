import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

const ConsumerShoppingCart = props => {
  return (
    <div>
      <h2>Select Your Produce</h2>
      {props.produce.map((item, id) => {
        return (
          <div key={id}>
            <p>{}</p>
            <p>{}</p>
          </div>
        );
      })}
      <button type='submit'>Add Items</button>
      <button type='submit'>Delete Items</button>
    </div>
  );
};

const mapStateToProps = state => ({
  produce: state.produce,
  isAdding: state.isAdding,
  isDeleting: state.isDeleting
});

export default connect(mapStateToProps, {})(ConsumerShoppingCart);
