import React from 'react';
import { connect } from 'react-redux';
import { deleteFood } from '../../actions';

const FarmerEditInventory = props => {
  const deleteItem = e => {
    e.preventDefault();
    props.deleteFood();
  };

  return <div></div>;
};

const mapStateToProps = state => ({
  isDeleting: state.isDeleting
});

export default connect(mapStateToProps, {})(FarmerEditInventory);
